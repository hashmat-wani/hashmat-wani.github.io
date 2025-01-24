import React from "react";
import styled from "styled-components";

import PageHeader from "../common/PageHeader";
import { Hidden } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flex from "../common/Flex";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const SkillsWrapper = styled.section`
  ${(props) => props.theme.spacing.sectionBottom};
  position: relative;
  .skill__icons {
    padding: 30px 0;
    @media ${(props) => props.theme.media.tablet} {
      padding: 10px 0;
    }

    svg {
      color: ${(props) => props.theme.primaryColor};
    }
  }
  .skills__word-clouds {
    @media ${(props) => props.theme.media.tablet} {
      display: none;
    }

    p {
      position: absolute;
      color: ${(props) => props.theme.skills};
      z-index: -1;
      left: 0;
      right: 0;
      font-weight: 900;
      user-select: none;
    }
    z-index: -1;
  }
`;

const WordClouds = () => {
  return (
    <Parallax
      translateY={["-225px", "-70px"]}
      speed={-10}
      aria-hidden="true"
      className="skills__word-clouds"
    >
      <p style={{ top: 50, left: "100%", fontSize: 17 }}>Git</p>
      <p style={{ top: 0, left: 0, fontSize: 18 }}>TypeScript</p>
      <p style={{ top: 200, left: -60, fontSize: 18 }}>CSS</p>
      <p style={{ top: "30%", left: "35%", fontSize: 14 }}>figma</p>
      <p style={{ top: 40, left: "75%", fontSize: 18 }}>Postman</p>
      <p style={{ top: 380, left: "85%", fontSize: 18 }}>MongoDB</p>
      <p style={{ top: 320, left: "60%", fontSize: 18 }}>Next.js</p>
      <p style={{ top: 180, left: "48%", fontSize: 23 }}>ES6</p>
      <p style={{ top: 350, left: 80, fontSize: 18 }}>Bootstrap</p>
      <p style={{ top: 120, left: "65%", fontSize: 20 }}>Redux</p>
      <p style={{ top: 220, left: "30%", fontSize: 20 }}>ESLint</p>
      <p style={{ top: 140, left: "93%", fontSize: 20 }}>Express.js</p>
      <p style={{ top: 250, left: "90%", fontSize: 25 }}>Jenkins</p>
      <p style={{ top: 280, left: "75%", fontSize: 14 }}>Firebase</p>
      <p style={{ top: 120, left: "16%", fontSize: 15 }}>Tailwind CSS</p>
      <p style={{ top: 210, left: "12%", fontSize: 22 }}>WebSocket</p>
    </Parallax>
  );
};

const Skills = () => (
  <SkillsWrapper id="skills">
    <ParallaxProvider>
      <PageHeader>My Skillsets</PageHeader>

      <Flex className="skill__icons" justify="space-around" align="center">
        <FontAwesomeIcon icon={["fab", "html5"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "js"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "react"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "node"]} size="5x" />
      </Flex>

      <Hidden md xs sm>
        <WordClouds />
      </Hidden>
    </ParallaxProvider>
  </SkillsWrapper>
);

export default Skills;
