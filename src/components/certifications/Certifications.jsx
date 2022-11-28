import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../common/Button";
import { ProjectLinks } from "../projects/ProjectTemplate.style";
import PageHeader from "../common/PageHeader";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  centerMode: true,
  centerPadding: "40px",
  swipeToSlide: true,
  arrows: false,
  accessibility: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerPadding: "15px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        speed: 500,
        slidesToShow: 1,
        centerPadding: "15px",
      },
    },
  ],
};

const InnerContent = styled.div`
  padding: 190px 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const BG = styled.div`
  position: absolute;
  background: ${(p) =>
    p.theme.dark ? p.theme.secondaryColor : p.theme.gradient};
  transform: skewY(-3deg);
  right: 0;
  left: 0;
  width: 100%;
  min-height: 630px;
  max-height: 740px;
`;
const CertificationsWrapper = styled.section`
  ${(props) => props.theme.spacing.sectionBottom};

  margin-top: 100px;

  width: 100%;
  height: 100%;

  .slick-slide {
    padding: 10px;
  }
`;

const CertificationsCard = styled.div`
  /* because of project links */
  position: relative;

  background-color: ${(props) => props.theme.bg};
  border-radius: 10px;
  padding: 30px;
  height: 280px;

  h4 {
    color: ${(props) => props.theme.primaryColor};
    margin-bottom: 5px;
  }

  .Certifications__links {
    position: absolute;
    bottom: 20px;
  }
`;

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "JavaScript Algorithms and Data Structures",
      issuing_organization: "freeCodeCamp",
      issue_date: "Aug 2022",
      expiration_date: null,
      credential_id: null,
      credential_link:
        "https://www.freecodecamp.org/certification/HashmatNoorani/javascript-algorithms-and-data-structures",
    },
    {
      id: 2,
      title: "Responsive Web Design",
      issuing_organization: "freeCodeCamp",
      issue_date: "Aug 2022",
      expiration_date: null,
      credential_id: null,
      credential_link:
        "https://www.freecodecamp.org/certification/HashmatNoorani/responsive-web-design",
    },
    {
      id: 3,
      title: "Front End Development Libraries",
      issuing_organization: "freeCodeCamp",
      issue_date: "Sep 2022",
      expiration_date: null,
      credential_id: null,
      credential_link:
        "https://www.freecodecamp.org/certification/HashmatNoorani/front-end-development-libraries",
    },
    {
      id: 4,
      title: "Back End Development and APIs",
      issuing_organization: "freeCodeCamp",
      issue_date: "Apr 2022",
      expiration_date: null,
      credential_id: null,
      credential_link:
        "https://www.freecodecamp.org/certification/HashmatNoorani/back-end-development-and-apis",
    },
    {
      id: 5,
      title: "CSS",
      issuing_organization: "HackerRank",
      issue_date: "Mar 2022",
      expiration_date: null,
      credential_id: "6BD437BB5D15",
      credential_link: "https://www.hackerrank.com/certificates/6bd437bb5d15",
    },
    {
      id: 6,
      title: "Certificate in Advance Excel",
      issuing_organization: "Amity University",
      issue_date: "Jan 2021",
      expiration_date: null,
      credential_id: null,
      credential_link:
        "https://onedrive.live.com/?authkey=%21ABILLS5Q24rdSzg&cid=5AE15EB40FBD5964&id=5AE15EB40FBD5964%216682&parId=5AE15EB40FBD5964%214526&o=OneUp",
    },
    {
      id: 7,
      title: "Certificate in Professional and Life Skills",
      issuing_organization: "Amity University",
      issue_date: "Jan 2021",
      expiration_date: null,
      credential_id: null,
      credential_link:
        "https://onedrive.live.com/?cid=5ae15eb40fbd5964&id=5AE15EB40FBD5964%216682&ithint=file%2Cpdf&authkey=%21ABILLS5Q24rdSzg",
    },
    {
      id: 8,
      title: "Cyber Security Foundation Professional Certificate - CSFPC™",
      issuing_organization: "CertiProf",
      issue_date: "Jan 2021",
      expiration_date: "Jan 2023",
      credential_id: null,
      credential_link:
        "https://www.youracclaim.com/badges/9d1b66ad-ab4c-4e28-ad99-c40e1fead091?source=linked_in_profile",
    },
    {
      id: 9,
      title: "Lifelong Learning",
      issuing_organization: "CertiProf",
      issue_date: "Jan 2021",
      expiration_date: "Jan 2023",
      credential_id: null,
      credential_link:
        "https://www.youracclaim.com/badges/e85da6e8-034a-4f1d-b31d-31a172ad4cdb?source=linked_in_profile",
    },
  ];

  return (
    <CertificationsWrapper>
      <BG>
        <PageHeader style={{ color: "#F8F8F8", transform: "skewY(3deg)" }}>
          Certifications
        </PageHeader>
      </BG>
      <InnerContent>
        <Slider {...settings}>
          {certifications.map((node) => (
            <CertificationsCard key={node.id}>
              <h4>{node.title}</h4>
              <h5>{node.issuing_organization}</h5>
              <p>
                Issued {node.issue_date} -{" "}
                {node.expiration_date
                  ? `Expires ${node.expiration_date}`
                  : `No Expiration Date`}
              </p>
              {node.credential_id && <p>Credential ID {node.credential_id}</p>}
              <ProjectLinks className="Certifications__links">
                <Button
                  target="_blank"
                  as="a"
                  href={node.credential_link}
                  rel="noreferrer"
                >
                  Show credential
                </Button>
              </ProjectLinks>
            </CertificationsCard>
          ))}
        </Slider>
      </InnerContent>
    </CertificationsWrapper>
  );
};

export default Certifications;
