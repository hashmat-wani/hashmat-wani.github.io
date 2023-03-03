import React, { useState } from "react";
import PageHeader from "../common/PageHeader";
import Button, { IconButton } from "../common/Button";
import Grid from "../common/Grid";

import {
  JSProjectsWrapper,
  JSProjectCard,
  JSProjectCardFooter,
} from "./MiniJsProjects.style";

import data from "../../data.json";

const Card = React.memo(({ node }) => (
  <JSProjectCard>
    <div style={{ width: "100%", height: "100%" }}>
      <img
        alt={node.title}
        src={node.thumbnail}
        width="100%"
        border="0"
        height="100%"
      />
    </div>

    <JSProjectCardFooter
      nowrap
      justify="space-between"
      direction="column"
      className="ccard__footer"
    >
      <div
        style={{
          textAlign: "left",
          marginBottom: "6px",
        }}
      >
        <h5>{node.title}</h5>
        <p>{node.desc}</p>
      </div>
      <div style={{ textAlign: "right" }}>
        {node.demo && (
          <IconButton
            label={`Live Demo - ${node.title}`}
            href={node.demo}
            icon="window-maximize"
          />
        )}
        <IconButton
          label={`Source Code - ${node.title}`}
          href={node.github}
          icon={["fab", "github"]}
        />
      </div>
    </JSProjectCardFooter>
  </JSProjectCard>
));

const Concepts = () => {
  const [showAll, setShowAll] = useState(
    data.JSProjects.length > 6 ? false : true
  );

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <JSProjectsWrapper id="miniJsProjects">
      <PageHeader>Mini Js Projects</PageHeader>
      <Grid collapseHeight="950px" showAll={showAll}>
        {data.JSProjects.map((node) => {
          return <Card key={node.id} node={node} />;
        })}

        {!showAll && (
          <Button onClick={handleShowAll} className="showall__button">
            Show all
          </Button>
        )}
      </Grid>
    </JSProjectsWrapper>
  );
};

export default Concepts;
