import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PageHeader from "../common/PageHeader";
import IFrame from "../common/IFrame";
import Button, { IconButton } from "../common/Button";

import ProjectTemplate from "./ProjectTemplate";
import { ProjectLinks, ProjectPreview, Tags } from "./ProjectTemplate.style";

const ProjectsWrapper = styled.section`
  ${(props) => props.theme.spacing.sectionBottom};
  /* border: 2px solid blue; */
`;
const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const projects = [
    {
      id: 1,
      title: "Weather App",
      desc: "Weather App that displays the weather wherever the user happened to be. I implemented the following user stories:",
      bulletPoints: [
        "Users can view the weather in his/her current location",
        "Users can search for weather information of other places also",
        "The weather icon will change depending on weather conditions",
        "Weekly, daily, and hourly weather reports",
        "Data on humidity, feels like, as well as the current time of location",
        "Built-in map allowing users to monitor the weather in a particular region",
      ],
      techstack: [
        {
          icon: "html5",
          title: "HTML5",
          url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        },
        {
          icon: "css3",
          title: "CSS",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          icon: "js",
          title: "JavaScript",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          icon: "bootstrap",
          title: "Bootstrap",
          url: "https://getbootstrap.com/",
        },
      ],
      demo: "https://hashmat-noorani.github.io/Weather-App/",
      github: "https://github.com/Hashmat-Noorani/Weather-App",
      iframe: "https://hashmat-noorani.github.io/Weather-App/",
      liveVideo: false,
      otherCreators_id: null,
    },
    {
      id: 2,
      title: "Kohl's Clone - Ecommerce",
      desc: "A collaborative project (Kohl's Clone - American department store) built by team of 4 members in 5 days. It is fully functional from the users signing in using their email and password, adding items to the basket, checking their basket, removing items if needed, and proceeding to checkout.",
      bulletPoints: [
        "Fully responsive design - You are no longer dependent on computers, you can quickly search for information using various devices: laptops, smartphones, tablets, and even smartwatches.",
      ],
      techstack: [
        {
          icon: "html5",
          title: "HTML5",
          url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        },
        {
          icon: "css3",
          title: "CSS",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          icon: "js",
          title: "JavaScript",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          icon: "bootstrap",
          title: "Bootstrap",
          url: "https://getbootstrap.com/",
        },
      ],
      demo: "https://hashmat-noorani.github.io/Kohl-s/",
      github: "https://github.com/Hashmat-Noorani/Kohl-s",
      iframe: "https://hashmat-noorani.github.io/Kohl-s/",
      liveVideo: false,
      otherCreators_id: ["97455128", "94161952", "94235431"],
    },
    {
      id: 3,
      title: "GetCV - Resumonk Clone",
      desc: "This was my first web-based project in my final semester of college. During my project work, I learned things like HTML, CSS, Bootstrap, and JavaScript. It was a great experience making a clone of Resumonk.",
      techstack: [
        {
          icon: "html5",
          title: "HTML5",
          url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        },
        {
          icon: "css3",
          title: "CSS",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          icon: "js",
          title: "JavaScript",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          icon: "bootstrap",
          title: "Bootstrap",
          url: "https://getbootstrap.com/",
        },
      ],
      bulletPoints: [
        "Making Resume is a very hectic work for all students. Also, many companies judge the candidature of a student just by his/her Resume. So it is necessary for the student to think beyond the third dimension while making the Resume.",
        "Resumonk(online resume builder) is the Web Application that helps students to get their resume in hand just by filling up a simple form where important credentials need to be filled in.",
        "Fully responsive design - You are no longer dependent on computers, you can quickly search for information using various devices: laptops, smartphones, tablets, and even smartwatches",
      ],
      demo: "https://hashmat-noorani.github.io/getCV-Resumonk-Clone/",
      github: "https://github.com/Hashmat-Noorani/getCV-Resumonk-Clone",
      iframe: "https://hashmat-noorani.github.io/getCV-Resumonk-Clone/",
      liveVideo: false,
      otherCreators_id: null,
    },
    {
      id: 4,
      title: "SPM - Semester Process Management",
      desc: "This is a standalone system designed to automate/reduce the effort and time of maintaining/retrieving data stored by using files and registers in the CSA Department of our college. The record of every student, course, and teacher was handled manually and there was no use of any computer.\nThis project contains mainly the following sections:",
      techstack: [
        {
          icon: null,
          title: "Visual Basic 6.0",
          url: "https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6.0-documentation",
        },
        { icon: null, title: "Microsoft Access 2007", url: null },
      ],
      bulletPoints: [
        "STUDENT INFORMATION",
        "STAFF INFORMATION",
        "STUDENT RECORDS (ADD/MODIFY/DELETE)",
        "STAFF RECORDS (ADD/MODIFY/DELETE)",
        "ATTENDANCE RECORDS (ADD/MODIFY/DELETE)",
      ],
      demo: false,
      github: "https://github.com/Hashmat-Noorani/SPM",
      iframe:
        "https://drive.google.com/file/d/1RJ7dIVhdBPgxY2q0E7lAgz2XwBOyeEaR/preview",
      liveVideo: false,
      otherCreators_id: null,
    },
  ];

  return (
    <ProjectsWrapper id="projects" style={{ marginBottom: 100 }}>
      <PageHeader>Projects</PageHeader>
      <DisplayProjects collapseHeight="1900px" showAll={showAll}>
        {projects.map((node) => (
          <ProjectTemplate
            key={node.id}
            title={node.title}
            demo={node.demo}
            github={node.github}
            desc={node.desc}
            bulletPoints={node.bulletPoints || null}
            otherCreators_id={node.otherCreators_id}
            links={
              <ProjectLinks>
                {node.demo && (
                  <Button
                    target="_blank"
                    rel="noreferrer"
                    as="a"
                    href={node.demo}
                  >
                    Live Demo
                  </Button>
                )}

                <IconButton
                  label="github"
                  icon={["fab", "github"]}
                  href={node.github}
                />
              </ProjectLinks>
            }
            preview={
              <ProjectPreview>
                <IFrame liveVideo={node.liveVideo} src={node.iframe} />
                <Tags>
                  {node.techstack.map((tech, idx) => (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={tech.url}
                      title={tech.title}
                      key={idx}
                    >
                      {node.id === 4 ? (
                        <div className="techstack_tags">{tech.title}</div>
                      ) : (
                        <FontAwesomeIcon icon={["fab", `${tech.icon}`]} />
                      )}
                    </a>
                  ))}
                </Tags>
              </ProjectPreview>
            }
          />
        ))}

        {!showAll && (
          <Button onClick={handleShowAll} className="showall__button">
            Show all {projects.length} projects&nbsp;&nbsp;
            <FontAwesomeIcon icon="arrow-right-long" />
          </Button>
        )}
      </DisplayProjects>
    </ProjectsWrapper>
  );
};

export default Projects;

const DisplayProjects = styled.div`
  /* border: 1px solid red; */
  /* padding: 9px; */
  overflow: hidden;
  position: relative;

  ${(props) =>
    !props.showAll &&
    css`
      &:before {
        content: "";
        width: 100%;
        height: 300px;
        position: absolute;
        /* border-radius: 10px; */
        bottom: 0;
        background: ${(p) =>
          `linear-gradient(180deg, rgba(0,0,0,0), 40%, ${p.theme.bg})`};
        z-index: 5;
        transition: 0.3s;
      }
    `}

  .showall__button {
    position: absolute;
    bottom: 50px;
    left: 50%;
    z-index: 6;
    padding: 15px 20px;
    font-weight: bold;
    transform: translateX(-50%);
  }
  max-height: ${(props) => (props.showAll ? "100%" : props.collapseHeight)};

  @media ${(props) => props.theme.media.tablet} {
    max-height: ${(props) => (props.showAll ? "100%" : "2800px")};
  }
`;
