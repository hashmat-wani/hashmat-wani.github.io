import React from "react";
import styled from "styled-components";
import PageHeader from "../common/PageHeader";
import { ExperienceWrapper, ExperienceDetails } from "./Experience.style";

const Experience = () => {
  let date = new Date();
  console.log(date.getMonth());
  console.log(date.getFullYear());

  const companies = [
    {
      id: 1,
      name: "Masai School",
      location: "Remote",
      desc: "Masai is an outcome-driven career school whose mission is to skill India’s untapped & underutilized talent and train them for some of the most in-demand jobs in the world.",
    },
  ];
  const experiences = [
    {
      title: "Instructional Associate",
      employment_type: "Full-time",
      company_id: 1,
      currently_working: true,
      start_date: "Apr-2022",
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
      title: "Student Guide",
      employment_type: "Part-time",
      company_id: 1,
      currently_working: false,
      start_date: "Feb-2022",
      end_date: "Mar-2022",
      desc: "Student Guide in Masai works with 10 students on average and thus they have the bandwidth to connect with students for their smallest of queries.",
      bulletPoints: false,
      skills: false,
    },
  ];
  return (
    <ExperienceWrapper>
      <PageHeader>Experience</PageHeader>
      <ExperienceDetails>
        {companies.map((comp) => (
          <CompanyDetails key={comp.id}>
            <Left>
              <Logo>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560BAQHdxMHntX6Z8Q/company-logo_200_200/0/1650372038245?e=1678924800&v=beta&t=JJF4S3MPdH5DviPExenbpu9gfgakuhPYmITKKsOITx4"
                  alt="logo"
                  width="100%"
                />
              </Logo>
            </Left>
            <Right>
              <Company>
                <Heading>
                  <h3>{comp.name}</h3>
                  <p>{comp.location}</p>
                  {/* <p>
                    {comp.start_date} -{" "}
                    {comp.end_date ? comp.end_date : "Present"}
                  </p> */}
                </Heading>
                <Details>
                  <p>{comp.desc}</p>
                </Details>
              </Company>
              {experiences
                .filter((expp) => expp.company_id === comp.id)
                .map((exp) => (
                  <Experiences>
                    <Heading>
                      <h4>{exp.title}</h4>
                      <p>{exp.employment_type}</p>
                      <p>
                        {exp.start_date} -{" "}
                        {exp.end_date ? exp.end_date : "Present"}
                      </p>
                    </Heading>
                    <Details>
                      <p>{exp.desc}</p>
                      <ul>
                        {exp.bulletPoints &&
                          exp.bulletPoints.map((pt) => <li>{pt}</li>)}
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
`;
const Right = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Company = styled.div``;

const Experiences = styled.div``;

const Heading = styled.div`
  margin-bottom: 10px;
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
