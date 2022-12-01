import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../../context/ThemeContextProvider";
import SubpageHeader from "../common/SubpageHeader";
import { GithubStatsContent, GithubStatsWrapper } from "./GithubStats.style";

const GithubStats = () => {
  const { theme } = useContext(themeContext);
  const [srcStats, setSrcStats] = useState("");
  const [srcStreaks, setSrcStreaks] = useState("");

  useEffect(() => {
    setSrcStats(
      `https://github-readme-stats.vercel.app/api?username=hashmat-noorani&show_icons=true&hide_border=true&include_all_commits=true&${
        theme === "light"
          ? "text_color=383838&bg_color=F8F8F8"
          : "text_color=F8F8F8&bg_color=232323"
      }`
    );

    setSrcStreaks(
      `https://github-readme-streak-stats.herokuapp.com?user=hashmat-noorani&hide_border=true&sideNums=6D83F2&currStreakNum=6D83F2&${
        theme === "light"
          ? "background=F8F8F8&dates=232323&sideLabels=232323&stroke=C7D0FF"
          : "background=232323&dates=F8F8F8&sideLabels=F8F8F8&stroke=303030"
      }`
    );
  }, [theme]);

  return (
    <GithubStatsWrapper>
      <SubpageHeader>Github Stats</SubpageHeader>

      <GithubStatsContent>
        <img width="100%" alt="hashmat-noorani" src={srcStats} />
        <img width="100%" alt="hashmat-noorani" src={srcStreaks} />
      </GithubStatsContent>
    </GithubStatsWrapper>
  );
};

export default GithubStats;
