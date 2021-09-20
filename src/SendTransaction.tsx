import { Button } from '@material-ui/core';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, PublicKey, Transaction, sendAndConfirmTransaction, TransactionSignature, Connection, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';

import React, { FC, useCallback } from 'react';
import { useNotify } from './notify';
var splToken = require('@solana/spl-token');

const SendTransaction: FC = () => {
    const { connection } = useConnection();
    // var connection = new Connection(clusterApiUrl("devnet"), "confirmed")
    const { publicKey, sendTransaction } = useWallet();
    const notify = useNotify();

    const onClick = useCallback(async () => {
        if (!publicKey) {
            notify('error', 'Wallet not connected!');
            return;
        }

        let fromAirdropSignature: TransactionSignature = '';
            fromAirdropSignature = await connection.requestAirdrop(
                publicKey,
                LAMPORTS_PER_SOL,
            );
    
            console.log("fromAirdropSignature", fromAirdropSignature)
            //wait for airdrop confirmation
    
            await connection.confirmTransaction(fromAirdropSignature, 'processed');
        

        let signature: TransactionSignature = '';
        var devWallet = Keypair.generate();
        try {
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: devWallet.publicKey,
                    lamports: 1,
                })
            );

            signature = await sendTransaction(transaction, connection);
            notify('info', 'Transaction sent:', signature);

            await connection.confirmTransaction(signature, 'processed');
            notify('success', 'Transaction successful!', signature);

            mintToken(connection, devWallet, publicKey, LAMPORTS_PER_SOL)

        } catch (error: any) {
            notify('error', `Transaction failed! ${error?.message}`, signature);
            return;
        }
    }, [publicKey, notify, connection, sendTransaction]);

    return (

        <Button variant="contained" color="secondary" onClick={onClick} disabled={!publicKey}>
            Mint
        </Button>

    );
};
const mintToken = async (connection: Connection, devWallet: Keypair, publicKey: PublicKey, LAMPORTS_PER_SOL: number) => {

    let fromAirdropSignature: TransactionSignature = '';
    console.log("fromAirdropSignature", devWallet.publicKey)
    try {
        fromAirdropSignature = await connection.requestAirdrop(
            devWallet.publicKey,
            LAMPORTS_PER_SOL,
        );

        console.log("fromAirdropSignature", fromAirdropSignature)
        //wait for airdrop confirmation

        await connection.confirmTransaction(fromAirdropSignature, 'processed');
    } catch (e) {
        console.log(e)
    }
    console.log("ok")
    let mint = await splToken.Token.createMint(
        connection,
        devWallet,
        devWallet.publicKey,
        null,
        9,
        splToken.TOKEN_PROGRAM_ID,
    );

    console.log("mint", await mint.publicKey)
    let devTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
        devWallet.publicKey,
    );
    console.log("devTokenAccount", devTokenAccount.address.toString())
    console.log("devTokenAccount", devTokenAccount.amount)

    var userTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
        publicKey,
    );

    // console.log("toTokenAccount",await userTokenAccount.amount.toBase58())
    //minting 1 new token to the "toTokenAccount" account we just returned/created
    await mint.mintTo(
        devTokenAccount.address, //who it goes to
        devWallet.publicKey, // minting authority
        [], // multisig
        1000000000, // how many
    );
    await mint.setAuthority(
        mint.publicKey,
        null,
        "MintTokens",
        devWallet.publicKey,
        []
    )
    // Add token transfer instructions to transaction
    var transaction = new Transaction().add(
        splToken.Token.createTransferInstruction(
            splToken.TOKEN_PROGRAM_ID,
            devTokenAccount.address,
            userTokenAccount.address,
            devWallet.publicKey,
            [],
            1,
        ),
    );

    // Sign transaction, broadcast, and confirm
    var signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [devWallet],
        { commitment: 'confirmed' },
    );
    console.log('SIGNATURE', signature);
}
export default SendTransaction;
