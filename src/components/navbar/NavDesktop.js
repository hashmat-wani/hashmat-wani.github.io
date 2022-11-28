import React from "react";

import { Link as SLink } from "react-scroll";

import { NavItems, NavItem } from "./Navbar.style";

import NavLinks from "./NavLinks";
import ToggleSwitch from "../common/ToggleSwitch";
import logo from "../../static/logo.svg";

const NavDesktop = () => {
  return (
    <>
      <SLink className="logo" smooth offset={-100} hashSpy={true} to="home">
        <img src={logo} alt="Hashmat Noorani" />
      </SLink>

      <nav>
        <NavItems>
          <NavLinks NavItem={NavItem} />
          <NavItem>
            <ToggleSwitch />
          </NavItem>
        </NavItems>
      </nav>
    </>
  );
};

export default NavDesktop;
