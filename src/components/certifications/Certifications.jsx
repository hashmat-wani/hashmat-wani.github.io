import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../common/Button";
import { ProjectLinks } from "../projects/ProjectTemplate.style";
import PageHeader from "../common/PageHeader";
import data from "../../data.json";

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
  p {
    font-size: 15px;
  }

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
  const certifications = data.certifications;

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
