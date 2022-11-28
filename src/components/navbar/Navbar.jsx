import React from "react";
import { Visible } from "react-grid-system";
import { NavContent, NavWrapper } from "./Navbar.style";
import NavDesktop from "./NavDesktop";
import NavbarMobile from "./NavMobile";

const Navbar = () => {
  return (
    <header>
      <NavWrapper>
        <NavContent as="div">
          <Visible md lg xl>
            <NavDesktop />
          </Visible>
        </NavContent>
      </NavWrapper>
      {/* out of NavWrapper so i can display:none the NavWrapper */}
      <Visible xs sm>
        <NavbarMobile />
      </Visible>
    </header>
  );
};

export default Navbar;
