import React from "react";
import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import { Link as SLink } from "react-scroll";
import logo from "../../static/logo_white.svg";

const FooterWrapper = styled.footer`
  width: 100vw;
  padding: 7px 0;
  background: ${(p) =>
    p.theme.dark ? p.theme.secondaryColor : p.theme.gradient};

  p {
    /* border: 1px solid blue; */
    display: inline;
    font-size: 1rem;
    line-height: 35px;
    color: white;
    text-align: center;
  }

  a {
    color: ${(p) =>
      p.theme.dark ? p.theme.primaryColor : p.theme.secondaryColor};
    &:hover {
      color: ${(p) => p.theme.primaryText};
    }
  }

  .logo {
    margin-right: auto;
    cursor: pointer;

    img {
      flex-basis: 100px;
      max-width: 40px;
    }
  }
  @media (max-width: 450px) {
    .logo {
      display: none;
    }
    p {
      font-size: 13px;
    }
  }
  @media (max-width: 400px) {
    .logo {
      display: none;
    }
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 360px) {
    .logo {
      display: none;
    }
    p {
      font-size: 11px;
    }
  }
  @media (max-width: 320px) {
    .logo {
      display: none;
    }
    p {
      font-size: 10px;
    }
  }
`;

const FWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 450px) {
    justify-content: center;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FWrapper>
      <SLink className="logo" smooth offset={-100} hashSpy={true} to="home">
        <img src={logo} alt="Hashmat Noorani" />
      </SLink>
      <p>
        Made with love and
        <a
          href="https://styled-components.com/"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;styled-components&nbsp;
        </a>
        by
        <a
          href="https://github.com/hashmat-noorani"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;hashmat-noorani
        </a>
      </p>
    </FWrapper>
  </FooterWrapper>
);

export default Footer;
