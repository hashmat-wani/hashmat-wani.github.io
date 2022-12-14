import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useLayoutEffect, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import PageHeader from "../common/PageHeader";
import { ShowAllContainer } from "../common/ShowAllContainer";
import {
  ExperienceWrapper,
  ExperienceDetails,
  CompanyDetails,
  Left,
  Logo,
  Right,
  Company,
  Heading,
  Details,
  Experiences,
} from "./Experience.style";
import data from "../../data.json";

const Experience = () => {
  const companies = JSON.parse(JSON.stringify(data)).companies;
  const experiences = JSON.parse(JSON.stringify(data)).experiences;

  const [showAll, setShowAll] = useState(companies.length > 1 ? false : true);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const monthNames = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let date = new Date();
  const currMonth = date.getMonth() + 1;
  const currYear = date.getFullYear();
  experiences.forEach((exp) => {
    if (
      exp.start_date[0] === exp.end_date[0] &&
      exp.start_date[1] === exp.end_date[1]
    ) {
      exp.duration = `${monthNames[exp.start_date[0]]} ${
        exp.start_date[1]
      } · 1 mo`;
    } else {
      let total_mos = 0;
      if (exp.end_date) {
        total_mos =
          (exp.end_date[1] - exp.start_date[1]) * 12 +
          (exp.end_date[0] - exp.start_date[0] + 1);
      } else {
        total_mos =
          (currYear - exp.start_date[1]) * 12 +
          (currMonth - exp.start_date[0] + 1);
      }

      const company = companies.find((comp) => comp.id === exp.company_id);
      company.duration = company.duration + total_mos || total_mos;

      const yrs = Math.floor(total_mos / 12);
      const mos = total_mos % 12;

      exp.duration = `${monthNames[exp.start_date[0]]} ${exp.start_date[1]} - ${
        exp.end_date
          ? `${monthNames[exp.end_date[0]]} ${exp.end_date[1]} `
          : "Present"
      } · ${yrs === 1 ? `${yrs} yr` : yrs > 1 ? `${yrs} yrs` : ""}
      ${mos === 1 ? `${mos} mo` : mos > 1 ? `${mos} mos` : ""}`;
    }
  });

  companies.forEach((comp) => {
    if (comp.duration) {
      const yrs = Math.floor(comp.duration / 12);
      const mos = comp.duration % 12;
      comp.duration = `${yrs === 1 ? `${yrs} yr` : yrs > 1 ? `${yrs} yrs` : ""}
        ${mos === 1 ? `${mos} mo` : mos > 1 ? `${mos} mos` : ""}`;
    }
  });
  const [expLeftDivCount, setExpLeftDivCount] = useState([]);
  const [toggle, setToggle] = useState(false);
  const ref = useRef([]);
  useLayoutEffect(() => {
    adjustSideVerticalLine();
  }, [toggle]);

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize);
    // Call handler right away so state gets updated with initial window size
    debouncedHandleResize(10);

    window.addEventListener("resize", () => debouncedHandleResize(600));

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const debounce = (cb) => {
    let debounceId;
    return (delay) => {
      debounceId && clearTimeout(debounceId);
      debounceId = setTimeout(() => {
        cb();
      }, delay);
    };
  };
  const adjustLineclamp = () => {
    const element = document.querySelectorAll(".line-clamp");
    element.forEach((el) => {
      if (
        el.offsetHeight < el.scrollHeight ||
        el.offsetWidth < el.scrollWidth
      ) {
        el.nextSibling.style.display = "block";
        // document.querySelectorAll(".toggle")[idx].style.display = "block";
      } else {
        el.nextSibling.style.display = "none";
        // document.querySelectorAll(".toggle")[idx].style.display = "none";
      }
    });
  };

  const adjustSideVerticalLine = () => {
    setExpLeftDivCount(ref.current.map((el) => [...el.childNodes]));
  };

  const handleResize = () => {
    adjustLineclamp();
    adjustSideVerticalLine();
  };

  return (
    <ExperienceWrapper id="experience">
      <PageHeader>Experience</PageHeader>
      <ShowAllContainer collapseHeight="700px" showAll={showAll}>
        <ExperienceDetails>
          {companies.map((comp, index) => (
            <CompanyDetails key={comp.id}>
              <Left>
                {ref.current.length > 0 &&
                  expLeftDivCount[index].map((el, idx) => (
                    <div key={idx} style={{ height: el.offsetHeight }}>
                      {idx === 0 ? (
                        <Logo>
                          <img src={comp.logo} alt="logo" width="100%" />
                        </Logo>
                      ) : (
                        <>
                          <div className="side_bullet"></div>
                          {idx < expLeftDivCount[index].length - 1 && (
                            <div
                              className="side_vertical_line"
                              style={{ height: el.offsetHeight - 13 }}
                            ></div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
              </Left>

              <Right ref={(el) => (ref.current[index] = el)}>
                <Company>
                  <Heading>
                    <h3>{comp.name}</h3>
                    {comp.duration && <p>{comp.duration}</p>}
                    <p>{comp.location}</p>
                  </Heading>
                  <Details>
                    <p>{comp.desc}</p>
                  </Details>
                </Company>
                {experiences
                  .filter((expp) => expp.company_id === comp.id)
                  .map((exp, i) => (
                    <Experiences key={exp.id}>
                      <Heading>
                        <h4>{exp.title}</h4>
                        <p>{exp.employment_type}</p>
                        <p>{exp.duration}</p>
                      </Heading>
                      <Details>
                        <div>
                          <div className={`details line-clamp`}>
                            <p>{exp.desc}</p>
                            {exp.bulletPoints && (
                              <ul>
                                {exp.bulletPoints &&
                                  exp.bulletPoints.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                  ))}
                              </ul>
                            )}
                          </div>
                          <button
                            className="toggle"
                            onClick={() => {
                              setToggle(!toggle);
                              document
                                .querySelectorAll(".details")
                                [i].classList.remove(`line-clamp`);
                              document.querySelectorAll(".toggle")[
                                i
                              ].style.display = "none";
                            }}
                          >
                            ...see more
                          </button>
                        </div>
                        {exp.skills && (
                          <p>
                            <b>skills: </b>
                            {exp.skills}
                          </p>
                        )}
                      </Details>
                    </Experiences>
                  ))}
              </Right>
            </CompanyDetails>
          ))}
        </ExperienceDetails>
        {!showAll && (
          <Button onClick={handleShowAll} className="showall__button">
            Show all {companies.length} experiences&nbsp;&nbsp;
            <FontAwesomeIcon icon="arrow-right-long" />
          </Button>
        )}
      </ShowAllContainer>
    </ExperienceWrapper>
  );
};

export default Experience;
