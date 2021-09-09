import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import Sector from "../components/sections/Sector";


// import web3 from '@solana/web3.js';
// import splToken from '@solana/spl-token';

const Home = () => {

  // (async () => {
  //   // Connect to cluster
  //   var connection = new web3.Connection(
  //     web3.clusterApiUrl("devnet"),
  //     'confirmed',
  //   );
  // })

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Sector className="illustration-section-01" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
};

export default Home;
