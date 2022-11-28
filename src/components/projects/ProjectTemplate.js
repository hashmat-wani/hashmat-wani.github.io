import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  ProjectContent,
  ProjectDetail,
  ProjectWrapper,
} from "./ProjectTemplate.style";
import axios from "axios";

const ProjectTemplate = ({
  title,
  demo,
  github,
  desc,
  bulletPoints,
  otherCreators_id,
  links,
  preview,
}) => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    otherCreators_id &&
      Promise.all(
        otherCreators_id.map((creator_id) =>
          axios
            .get(`https://api.github.com/user/${creator_id}`)
            .then((data) => data.data)
        )
      )
        .then((data) => setCreators(data))
        .catch((err) =>
          console.log(`Other creators not ${err.response.data.message}`)
        );
    return () => setCreators([]);
  }, []);
  let descArray = desc.split("\n");
  return (
    <ProjectWrapper>
      <ProjectContent>
        <ProjectDetail>
          <div className="project__detail-container">
            <a href={demo || github} target="_blank" rel="noreferrer">
              <h2>{title}</h2>
            </a>
            <div className="desc_container">
              {descArray.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}

              {bulletPoints &&
                bulletPoints.map((point, idx) => <li key={idx}>{point}</li>)}
            </div>
            {creators.length !== 0 && (
              <div className="other_creators">
                <h5>Other creators</h5>
                {creators.map((creator, idx) => (
                  <a
                    key={idx}
                    href={creator.html_url}
                    target="_blank"
                    rel="noreferrer"
                    title={`${creator.name} - ${creator.bio}`}
                  >
                    <img
                      src={creator.avatar_url}
                      width="48px"
                      alt="other_creator"
                    ></img>
                  </a>
                ))}
              </div>
            )}
            {links}
          </div>
        </ProjectDetail>

        {preview}
      </ProjectContent>
    </ProjectWrapper>
  );
};

ProjectTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  links: PropTypes.node.isRequired,
  preview: PropTypes.node.isRequired,
};

export default ProjectTemplate;
