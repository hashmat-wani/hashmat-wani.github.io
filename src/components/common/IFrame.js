import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { useInView } from "react-intersection-observer";

const IframeWrapper = styled.div`
  /* border: 1px solid red; */
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  background-color: ${(props) => props.theme.accentColor};
  border-top-left-radius: 10px;

  ${(props) =>
    props.liveVideo &&
    css`
      @media ${(props) => props.theme.media.tablet} {
        min-height: 400px;
      }
    `}

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media ${(props) => props.theme.media.fablet} {
    border-radius: 10px;
  }
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  .wave {
    font-weight: bolder;
    font-size: 20px;
    color: ${(props) =>
      props.theme.dark ? props.theme.secondaryColor : props.theme.primaryColor};
    height: 100px;
    background: linear-gradient(
      45deg,
      ${(props) =>
        props.theme.dark
          ? props.theme.secondaryColor
          : props.theme.primaryColor},
      #f8f8f8
    );
    margin: 10px;
    animation: wave 1s linear infinite;
    border-radius: 20px;

    @media ${(props) => props.theme.media.fablet} {
      font-size: 17px;
      height: 85px;
      margin: 8.5px;
    }
    @media ${(props) => props.theme.media.tablet} {
      font-size: 14px;
      height: 70px;
      margin: 7px;
    }
    @media ${(props) => props.theme.media.mobile} {
      font-size: 11px;
      height: 55px;
      margin: 5.5px;
    }
  }
  .wave:nth-child(2) {
    animation-delay: 0.1s;
  }
  .wave:nth-child(3) {
    animation-delay: 0.2s;
  }
  .wave:nth-child(4) {
    animation-delay: 0.3s;
  }
  .wave:nth-child(5) {
    animation-delay: 0.4s;
  }
  .wave:nth-child(6) {
    animation-delay: 0.5s;
  }
  .wave:nth-child(7) {
    animation-delay: 0.6s;
  }

  @keyframes wave {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;
const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="wave">L</div>
      <div className="wave">O</div>
      <div className="wave">A</div>
      <div className="wave">D</div>
      <div className="wave">I</div>
      <div className="wave">N</div>
      <div className="wave">G</div>
    </LoaderWrapper>
  );
};

const IFrame = ({ src, liveVideo }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const handleLoaded = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <IframeWrapper liveVideo={liveVideo} className="iframe-wrapper" ref={ref}>
      <iframe
        title={src}
        style={{ opacity: isLoading ? "0" : "1" }}
        src={inView ? src : undefined}
        onLoad={handleLoaded}
        frameBorder="0"
        scrolling="auto"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; geolocation"
        allowFullScreen
      />
      {isLoading && <Loader />}
    </IframeWrapper>
  );
};

IFrame.defaultProps = {
  liveVideo: false,
};
IFrame.propTypes = {
  src: PropTypes.string.isRequired,
  liveVideo: PropTypes.bool,
};

export default IFrame;
