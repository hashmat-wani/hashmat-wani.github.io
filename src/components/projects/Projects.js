import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PageHeader from "../common/PageHeader";
import IFrame from "../common/IFrame";
import Button, { IconButton } from "../common/Button";

import ProjectTemplate from "./ProjectTemplate";
import { ProjectLinks, ProjectPreview, Tags } from "./ProjectTemplate.style";
import { ShowAllContainer } from "../common/ShowAllContainer";
import data from "../../data.json";

const ProjectsWrapper = styled.section`
  ${(props) => props.theme.spacing.sectionBottom};
  /* border: 2px solid blue; */
`;
const Projects = () => {
  const projects = data.projects;

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <ProjectsWrapper id="projects" style={{ marginBottom: 100 }}>
      <PageHeader>Projects</PageHeader>
      <ShowAllContainer collapseHeight="1900px" showAll={showAll}>
        <DisplayProjects>
          {projects.map((node) => (
            <ProjectTemplate
              key={node.id}
              title={node.title}
              demo={node.demo}
              github={node.github}
              desc={node.desc}
              bulletPoints={node.bulletPoints || null}
              otherCreators_id={node.otherCreators_id}
              duration={node.duration}
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
        </DisplayProjects>
        {!showAll && (
          <Button onClick={handleShowAll} className="showall__button">
            Show all {projects.length} projects&nbsp;&nbsp;
            <FontAwesomeIcon icon="arrow-right-long" />
          </Button>
        )}
      </ShowAllContainer>
    </ProjectsWrapper>
  );
};

export default Projects;

const DisplayProjects = styled.div``;
