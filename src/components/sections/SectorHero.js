import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import placeholder from "./../../assets/images/video-placeholder.jpg";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const SectorHero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  let [counter, setCounter] = useState(0);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

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

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter >= 2) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 1000);
    // clearing interval
    return () => clearInterval(timer);
  });

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
              style={{ transform: "translateX(-75px)" }}
            >
              Start &nbsp;
              <div style={{ display: "inline", position: "relative" }}>
                {counter === 0 ? (
                  <span
                    style={{ position: "absolute", top: "0", left: "0" }}
                    className="text-color-primary"
                  >
                    Creating
                  </span>
                ) : (
                  ""
                )}
                {counter === 1 ? (
                  <span
                    style={{ position: "absolute", top: "0", left: "0" }}
                    className="text-color-primary"
                  >
                    Telling
                  </span>
                ) : (
                  ""
                )}
                {counter === 2 ? (
                  <span
                    style={{ position: "absolute", top: "0", left: "0" }}
                    className="text-color-primary"
                  >
                    Selling
                  </span>
                ) : (
                  ""
                )}
              </div>
            </h1>

            <div className="container-xs">
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="/KuMarketPlace"
                  >
                    Explore
                  </Button>
                  <Button tag="a" color="dark" wideMobile href="#">
                    Apply Now
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={placeholder}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

SectorHero.propTypes = propTypes;
SectorHero.defaultProps = defaultProps;

export default SectorHero;
