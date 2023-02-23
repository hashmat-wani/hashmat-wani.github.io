import PropTypes from "prop-types";

import styled from "styled-components";

// import avatar from "../../static/avatar.png";
import avatar from "../../static/avatar.jpg";

const AvatarWrapper = styled.div`
  width: 240px;
  height: 250px;
  margin: 0;
  img {
    /* animation: tiltImage 2s linear infinite; */
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  img:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  @keyframes tiltImage {
    0% {
      transform: skewY(-6deg);
    }
    50% {
      transform: skewY(6deg);
    }
    100% {
      transform: skewY(-6deg);
    }
  }
`;
const Avatar = () => {
  return (
    <AvatarWrapper>
      <img
        width="100%"
        height="100%"
        draggable="false"
        className="tilt"
        src={avatar}
      />
    </AvatarWrapper>
  );
};

export default Avatar;
