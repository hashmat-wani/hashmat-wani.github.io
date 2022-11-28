import React from "react";
import PageHeader from "../common/PageHeader";
import GithubCalendar from "./GithubCalendar";
import { GithubDetails, GithubOverviewWrapper } from "./GithubOverview.style";
import GithubStats from "./GithubStats";

const GithubOverview = () => {
  return (
    <GithubOverviewWrapper>
      <PageHeader>Github Overview</PageHeader>
      <GithubDetails>
        <GithubCalendar />
        <GithubStats />
      </GithubDetails>
    </GithubOverviewWrapper>
  );
};

export default GithubOverview;
