import React from "react";
import svgRect from "../../static/home_rect.svg";
import Button from "../common/Button";
import { Card, CardIcon, CardText, CardTitle } from "../common/Card";
import Flex from "../common/Flex";
import IconLink from "../common/IconLink";
import PageHeader from "../common/PageHeader";
import { HeroCard } from "./HeroCard";
import { HomeWrapper, Intro } from "./Home.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect";
import problemsolving from "../../static/problem-solving.png";
import leetcode from "../../static/leetcode.svg";

const ThingsILove = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon="code" />
      </CardIcon>
      <CardTitle>FrontEnd</CardTitle>
      <CardText>
        I'm more front end focused and love to work with Reactjs as well as pure
        HTML, CSS.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={["fab", "js"]} />
      </CardIcon>
      <CardTitle>Javascript</CardTitle>
      <CardText>
        I just extremely love vanilla JavaScript, as it serves me well in
        understanding the frameworks, APIs, and libraries.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <img src={problemsolving} alt="" />
      </CardIcon>
      <CardTitle>Problem Solving</CardTitle>
      <CardText>
        I enjoy solving problems, troubleshooting issues, and finding solutions.
      </CardText>
    </Card>
  </Flex>
);

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>HASHMAT NOORANI</h1>
          <div className="adjust">
            <Typewriter
              options={{
                strings: ["FULL STACK WEB DEVELOPER", "JAVASCRIPT ENTHUSIAST"],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 100,
                pauseFor: 1000,
                skipAddStyles: true,
              }}
            />
          </div>

          <div className="home__CTA">
            <Button
              target="_blank"
              rel="noreferrer"
              className="cta"
              as="a"
              href="https://drive.google.com/file/d/1RUbFlxXR_Q3aUxbbRT8ffjyg9JY19bxw/view?usp=share_link"
            >
              Download Resume
            </Button>

            <div className="home__social">
              <IconLink
                label="github"
                icon={["fab", "github"]}
                href="//github.com/hashmat-noorani"
              />
              <IconLink
                label="linkedin"
                icon={["fab", "linkedin-in"]}
                href="//linkedin.com/in/hashmat-noorani"
              />
              <IconLink
                label="hackerrank"
                icon={["fab", "hackerrank"]}
                href="//hackerrank.com/hashmat_noorani"
              />
              <a
                href="//leetcode.com/hashmat-noorani/"
                target="_blank"
                aria-label="leetcode"
                title="leetcode"
                rel="noreferrer"
              >
                <img
                  src={leetcode}
                  alt="leetcode icon"
                  height="22px"
                  style={{
                    marginTop: "1px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>

        <HeroCard />
      </Intro>
      {/* Things I LOVE */}
      <PageHeader style={{ marginBottom: 30 }}>
        Things I love <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
