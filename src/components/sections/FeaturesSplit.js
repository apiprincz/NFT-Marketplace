import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import featureone from "./../../assets/images/features-split-image-01.png";
import featuretwo from "./../../assets/images/features-split-image-02.png";
import featurethree from "./../../assets/images/features-split-image-03.png";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "RoadMap",
    // paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section {...props} className={outerClasses} id="how">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div
              className="split-item"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">
                  Design and Creation Of NOK NFT series
                </h3>
                <p className="m-0">
                  After weeks of thoughtful imagination, the ideas are brought
                  to live in reality.{" "}
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                {/* <Image
                  src={featureone}
                  alt="Features split 01"
                  width={528}
                  height={396}
                /> */}
              </div>
            </div>

            <div
              className="split-item"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Minting Of NOK Commences</h3>
                <p className="m-0">
                  It's Obvious Nokians can't wait further to get their hands on
                  the beautiful art. On September 14, NOKs goes live on the
                  Solana blockchain
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                {/* <Image
                  src={featuretwo}
                  alt="Features split 02"
                  width={528}
                  height={396}
                /> */}
              </div>
            </div>
            <div
              className="split-item"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">NOKs Trading Begins </h3>
                <p className="m-0">
                  Open trading on the Marketplace begins right after the minting
                  process is completely. After all, NOKs are eager to find new
                  owners.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                {/* <Image
                  src={featureone}
                  alt="Features split 01"
                  width={528}
                  height={396}
                /> */}
              </div>
            </div>

            <div
              className="split-item"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12"> The First Sweepstakes</h3>
                <p className="m-0">
                  All holders will be eligible to enter the first sweepstakes
                  freely. Funds for the exercise will be disbursed from the
                  development wallet.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                {/* <Image
                  src={featuretwo}
                  alt="Features split 02"
                  width={528}
                  height={396}
                /> */}
              </div>
            </div>
            <div
              className="split-item"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Let The Quest Begins</h3>
                <p className="m-0">
                  More than just a beautiful piece of Art, the race to dip the
                  rarest treasure begins in a space of 2 weeks after the minting
                  exercise. This is exclusive to holders as the first map is
                  released.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                {/* <Image
                  src={featureone}
                  alt="Features split 01"
                  width={528}
                  height={396}
                /> */}
              </div>
            </div>

            <div
              className="split-item"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12"> Non-Ending Fun</h3>
                <p className="m-0">
                  Every week a new map is released for its treasure to be dug up
                  and unlocked. Lucky Nokians also gets the amazing cash prizes
                  from weekly sweepstakes with entry fee .
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                {/* <Image
                  src={featuretwo}
                  alt="Features split 02"
                  width={528}
                  height={396}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
