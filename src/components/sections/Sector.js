import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Sector = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  //   const [videoModalActive, setVideomodalactive] = useState(false);

  //   const openModal = (e) => {
  //     e.preventDefault();
  //     setVideomodalactive(true);
  //   };

  //   const closeModal = (e) => {
  //     e.preventDefault();
  //     setVideomodalactive(false);
  //   };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ background: "#000a1e" }}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Interested in telling your own stories with KuNFT's?
              {/* KuNFT's For <span className="text-color-primary">EVERYONE</span> */}
            </h1>
            <div className="container-xs">
              <p className="m-0  reveal-from-bottom" data-reveal-delay="400">
                We partner with top artists, athletes, brands, and creatives to
                bring life changing creativity works on-the-chain.
              </p>
              <br></br>

              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="/Become-A-Creator"
                  >
                    Become A Creator Today
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Sector.propTypes = propTypes;
Sector.defaultProps = defaultProps;

export default Sector;
