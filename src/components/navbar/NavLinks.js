import React from "react";
import { Link as SLink } from "react-scroll";

const NavItemsSmoothLinks = ({ NavItem }) => (
  <>
    <NavItem>
      <SLink smooth offset={-70} hashSpy to="home">
        home
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="about">
        about me
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="skills">
        skills
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="projects">
        projects
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="contact">
        contact
      </SLink>
    </NavItem>
  </>
);

const NavLinks = React.memo(({ NavItem }) => {
  //   let path = null;
  //   if (typeof window !== "undefined") {
  //     path = window.location.pathname;
  //   }

  return <NavItemsSmoothLinks NavItem={NavItem} />;

  // return (
  //   <>
  //     {path === "/" ? (
  //       <NavItemsSmoothLinks NavItem={NavItem} />
  //     ) : (
  //       <NavItemsGatsbyLinks NavItem={NavItem} />
  //     )}
  //   </>
  // );
});

export default NavLinks;
