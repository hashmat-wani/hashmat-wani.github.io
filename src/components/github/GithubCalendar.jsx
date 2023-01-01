import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { GithubCalendarWrapper } from "./GithubCalendar.style";
import SubpageHeader from "../common/SubpageHeader";

// const calendars = ["phone", "tablet", "fablet", "desktop"];

// const selectLast9Months = (contributions) => {
//   const currentYear = new Date().getFullYear();
//   const currentMonth = new Date().getMonth();
//   const shownMonths = 9;

//   return contributions.filter((day) => {
//     const date = new Date(day.date);
//     const monthOfDay = date.getMonth();

//     return (
//       date.getFullYear() === currentYear &&
//       monthOfDay > currentMonth - shownMonths &&
//       monthOfDay <= currentMonth
//     );
//   });
// };

// const selectLast6Months = (contributions) => {
//   const currentYear = new Date().getFullYear();
//   const currentMonth = new Date().getMonth();
//   const shownMonths = 6;

//   return contributions.filter((day) => {
//     const date = new Date(day.date);
//     const monthOfDay = date.getMonth();

//     return (
//       date.getFullYear() === currentYear &&
//       monthOfDay > currentMonth - shownMonths &&
//       monthOfDay <= currentMonth
//     );
//   });
// };

// const selectLast4Months = (contributions) => {
//   const currentYear = new Date().getFullYear();
//   const currentMonth = new Date().getMonth();
//   const shownMonths = 4;

//   return contributions.filter((day) => {
//     const date = new Date(day.date);
//     const monthOfDay = date.getMonth();

//     return (
//       date.getFullYear() === currentYear &&
//       monthOfDay > currentMonth - shownMonths &&
//       monthOfDay <= currentMonth
//     );
//   });
// };

const GithubCalendar = () => {
  return (
    <GithubCalendarWrapper>
      <SubpageHeader style={{ marginTop: "20px" }}>
        GitHub Calendar
      </SubpageHeader>

      {/* {calendars.map((cal, idx) => (
        <div className={cal} key={idx}>
          <GitHubCalendar
            blockSize={13.5}
            blockMargin={7}
            username="hashmat-noorani"
            {...(cal === "phone"
              ? { transformData: selectLast4Months }
              : cal === "tablet"
              ? { transformData: selectLast6Months }
              : cal === "fablet"
              ? { transformData: selectLast9Months }
              : {})}
            {...(cal === "phone" && { hideColorLegend: true })}
            {...(cal !== "desktop" && {
              labels: {
                totalCount: `{{count}} contributions in the last ${
                  cal === "phone" ? 4 : cal === "tablet" ? 6 : 9
                } months`,
              },
            })}
            style={{
              margin: "0 auto",
            }}
          >
            <ReactTooltip delayShow={40} html />
          </GitHubCalendar>
        </div>
      ))} */}

      <div className="scroll-div">
        <GitHubCalendar
          blockSize={13.5}
          blockMargin={7}
          username="hashmat-noorani"
          style={{
            minWidth: "770px",
            // border: "1px solid red",
            padding: "7px 12px 7px 7px",
          }}
        >
          <ReactTooltip delayShow={40} html />
        </GitHubCalendar>
      </div>
    </GithubCalendarWrapper>
  );
};

export default GithubCalendar;
