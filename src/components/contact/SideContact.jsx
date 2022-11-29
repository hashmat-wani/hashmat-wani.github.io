import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const SideContact = () => {
  return (
    <SideContactWrapper>
      <div className="icon icon1" aria-haspopup="true">
        <p>
          <a href="mailto: hashmatwani@icloud.com">hashmatwani@icloud.com</a>
        </p>
        <FontAwesomeIcon icon="envelope" />
      </div>
      <div className="icon icon2" aria-haspopup="true">
        <p>
          <a href="tel:7006600835">7006600835</a>
        </p>
        <FontAwesomeIcon icon="phone" />
      </div>
    </SideContactWrapper>
  );
};

export default SideContact;

const SideContactWrapper = styled.aside`
  width: 0;
  position: fixed;
  left: 0;
  z-index: 1000;
  top: 50%;
  transform: translateY(-50%);

  .icon {
    font-weight: 700;
    background: ${(props) => props.theme.gradient};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3px;
    padding: 5px 10px;
    border-radius: 3px;
    /* transform: translateX(-90px); */
    transition: all 0.3s ease;
    cursor: pointer;
    color: ${(props) => props.theme.secondaryColor};

    a {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
  .icon1 {
    width: 290px;
    letter-spacing: 1px;
    transform: translate(-258px);
  }
  .icon2 {
    width: 180px;
    letter-spacing: 2px;
    transform: translate(-148px);
  }

  .icon:hover,
  .left_bar:focus,
  .icon:active {
    transform: translateX(-5px);
  }
`;
