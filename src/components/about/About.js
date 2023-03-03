import SkewBg from "../common/SkewBg";
import PageHeader from "../common/PageHeader";
import Flex from "../common/Flex";

import Education from "./Education";
import Avatar from "./Avatar";

import { AboutWrapper, AboutInfo } from "./About.style";

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader style={{ marginTop: 0 }}>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar />
        </div>
        <p style={{ textAlign: "justify" }}>
          Hello, I am Hashmat Noorani, a self-taught Full Stack web developer
          with a passion for writing clean and efficient code. With 1-year of
          experience in building single-page applications using the MERN Stack,
          I have developed a skill set in creating reusable components and
          optimizing React application performance. Additionally, I am
          proficient in integrating APIs into React applications using Axios and
          Fetch and utilizing various React tools and libraries such as Redux,
          React Router, and Material UI. As someone who is passionate about
          coding, I am always seeking ways to improve my skills and apply them
          to real-world projects. I am currently seeking a challenging role in a
          product-based company to further enhance my technical knowledge.
        </p>
      </AboutInfo>
      <div className="education__wrapper">
        <PageHeader
          style={{
            margin: "0 auto",
          }}
        >
          <div className="education">Education</div>
        </PageHeader>

        <Flex justify="space-between">
          <Education>
            <a href="https://www.amity.edu/" target="_blank" rel="noreferrer">
              <h3>Amity University, Noida</h3>
            </a>

            <p>Master of Computer Applications</p>
            <p>CGPA - 8.51</p>
            <br />
            <i>Oct 2020 - Sep 2022</i>
          </Education>
          <Education>
            <a
              href="https://www.masaischool.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Masai</h3>
            </a>

            <p>Full Stack Web Development - MERN</p>
            <p>2160 hours of practical learning</p>
            <br />
            <i>Nov 2021 - May 2022</i>
          </Education>
          <Education>
            <a
              href="http://www.theoxfordscience.org/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>The Oxford College of Science, Bengaluru</h3>
            </a>

            <p>Bachelor of Computer Applications</p>
            <p>CGPA - 7.45</p>
            <br />
            <i>Jul 2017 - Oct 2020</i>
          </Education>
        </Flex>
      </div>
    </AboutWrapper>
  );
};

export default About;
