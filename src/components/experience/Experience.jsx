import { setElementStyles } from "parallax-controller";
import React, { useLayoutEffect, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import PageHeader from "../common/PageHeader";
import { ExperienceWrapper, ExperienceDetails } from "./Experience.style";

const Experience = () => {
  const companies = [
    {
      id: "c1",
      name: "Masai School",
      location: "Remote",
      desc: "Masai is an outcome-driven career school whose mission is to skill India’s untapped & underutilized talent and train them for some of the most in-demand jobs in the world.",
      logo: "https://media-exp1.licdn.com/dms/image/C560BAQHdxMHntX6Z8Q/company-logo_200_200/0/1650372038245?e=1678924800&v=beta&t=JJF4S3MPdH5DviPExenbpu9gfgakuhPYmITKKsOITx4",
    },
  ];
  const experiences = [
    {
      id: "e1",
      title: "Instructional Associate",
      employment_type: "Full-time",
      company_id: "c1",
      currently_working: true,
      start_date: [4, 2022],
      end_date: false,
      desc: "Roles & Responsibilities",
      bulletPoints: [
        "Taking problem-solving standups & doubt sessions for over 70+ students on zoom",
        "Handling 150+ students on slack and resolving their tech queries and doubts",
        "Taking live Coding & DSA curriculum doubt sessions of students on zoom",
        "Taking one-on-one Calendly and Pair Programming sessions with students to develop their problem-solving skills",
        "Reviewing the projects made by students and delivering lectures whenever required",
      ],
      skills: [
        "React",
        " · ",
        "JavaScript",
        " · ",
        "MongoDB",
        " · ",
        "Node.js",
        " · ",
        "Express.js",
        " · ",
        "Data Structures",
      ],
    },
    {
      id: "e2",
      title: "Student Guide",
      employment_type: "Part-time",
      company_id: "c1",
      currently_working: false,
      start_date: [2, 2022],
      end_date: [3, 2022],
      // end_date: false,
      desc: "Student Guide in Masai works with 10 students on average and thus they have the bandwidth to connect with students for their smallest of queries.",
      bulletPoints: false,
      skills: false,
    },
  ];
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
  const [expLeftDivSize, setexpLeftDivSize] = useState([]);
  const ref = useRef(null);
  useLayoutEffect(() => {
    // setexpLeftDivSize([...ref.current.children]);
    const handleResize = () => setexpLeftDivSize([...ref.current.children]);
    // console.log(ref.current.childNodes[0]);
    // console.log(ref.current.children[0].clientHeight);
    // console.log(ref.current.childNodes[0].clientHeight);
    // console.log(ref.current.children);
    // ref.current.children[0].style.height = "400px";
    // [...ref.current.children].map((el, idx) => {
    //   console.log(el);
    // });

    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // window.addEventListener("resize", () => setexpLeftDivSize2(!test2));
  // console.log(test[0].clientHeight);
  // ref.current.childNodes.length;

  return (
    <ExperienceWrapper>
      <PageHeader>Experience</PageHeader>

      <ExperienceDetails>
        {companies.map((comp) => (
          <CompanyDetails key={comp.id}>
            <Left>
              {ref.current &&
                expLeftDivSize.map((el, idx) => (
                  <div key={idx} style={{ height: el.offsetHeight }}>
                    {idx === 0 ? (
                      <Logo>
                        <img src={comp.logo} alt="logo" width="100%" />
                      </Logo>
                    ) : (
                      <>
                        <div className="side_bullet"></div>
                        {idx < expLeftDivSize.length - 1 && (
                          <div
                            className="side_vertical_line"
                            style={{ height: el.offsetHeight - 12 }}
                          ></div>
                        )}
                      </>
                    )}
                  </div>
                ))}
            </Left>

            <Right ref={ref}>
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
                .map((exp) => (
                  <Experiences key={exp.id}>
                    <Heading>
                      <h4>{exp.title}</h4>
                      <p>{exp.employment_type}</p>
                      <p>{exp.duration}</p>
                    </Heading>
                    <Details>
                      <p>{exp.desc}</p>
                      <ul>
                        {exp.bulletPoints &&
                          exp.bulletPoints.map((pt, idx) => (
                            <li key={idx}>{pt}</li>
                          ))}
                      </ul>
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
    </ExperienceWrapper>
  );
};

export default Experience;

const CompanyDetails = styled.div`
  display: flex;
  gap: 10px;
  /* border: 1px solid red; */
  & h3,
  h4,
  p {
    margin: 3px 0;
  }
  & p {
    font-size: 14px;
  }

  ul {
    /* border: 1px solid red; */
    list-style: disc;
    padding: 0 20px;
    font-size: 14px;
    line-height: 140%;
    margin: 0;
    font-family: ${(p) => p.theme.secondaryFontFamily};
    color: ${(p) => p.theme.primaryText};
  }
`;

const Left = styled.div`
  max-width: 50px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* padding-top: 3px; */
  > div {
    /* border: 1px solid red; */
  }
  .side_bullet {
    background: ${(props) =>
      props.theme.dark ? props.theme.primaryText : "#0000004D"};
    height: 8px;
    width: 8px;
    border-radius: 50%;
    margin: 8px auto;
  }
  .side_vertical_line {
    background: ${(props) =>
      props.theme.dark ? props.theme.primaryText : "#00000014"};
    width: 2px;
    margin: 0 auto;
    border-radius: 10px;
  }
`;
const Right = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  gap: 12px;
  > div {
    /* border: 1px solid green; */
  }
`;
const Company = styled.div``;

const Experiences = styled.div``;

const Heading = styled.div`
  margin-bottom: 9px;
`;
const Details = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Logo = styled.div`
  /* border: 1px solid blue; */
`;
