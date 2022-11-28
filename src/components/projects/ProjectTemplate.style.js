import styled from "styled-components";

export const ProjectWrapper = styled.section`
  margin: 80px 0;
`;

export const ProjectContent = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 170px 1fr;
  grid-template-rows: 1fr;
  align-items: center;
`;

export const ProjectDetail = styled.div`
  /* border: 1px solid blue; */
  padding: 50px;
  background-color: ${(props) => props.theme.secondaryColor};
  box-shadow: ${(props) => props.theme.shadowSmall};
  border-radius: 10px;
  min-height: 350px;
  grid-column: 1 / 3;
  grid-row: 1;

  .project__detail-container {
    width: 75%;
    p {
      line-height: 170%;
    }
    h2 {
      color: ${(p) => p.theme.primaryColor};
    }
    h2:hover {
      color: ${(p) => p.theme.primaryText};
      text-decoration: underline;
    }

    .desc_container {
      /* border: 1px solid red; */
      margin: 25px 0 35px 0;
      line-height: 170%;
      min-height: 250px;
      li {
        font-size: 16px;
        line-height: 150%;
        font-family: ${(p) => p.theme.secondaryFontFamily};
        color: ${(p) => p.theme.primaryText};
        :nth-of-type(1) {
          margin-top: 10px;
        }
      }
    }
  }

  @media ${(props) => props.theme.media.fablet} {
    min-height: unset;
    grid-column: 1 / 4;
    grid-row: unset;
    padding: 30px 30px;
    .project__detail-container {
      width: 100%;

      .desc_container {
        min-height: unset;
      }
    }
  }

  .other_creators {
    margin-bottom: 35px;
    a {
      > img {
        border-radius: 50%;
      }
      :nth-of-type(n + 2) {
        margin-left: -22px;
      }
    }
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  margin-bottom: 0;

  a {
    margin-right: 10px;
  }
`;

export const ProjectPreview = styled.div`
  grid-column: 2 / 4;
  grid-row: 1;
  position: relative;
  right: -20px;

  @media ${(props) => props.theme.media.fablet} {
    right: 0;
    grid-column: 1 / 4;
    margin-bottom: 20px;
  }

  iframe {
    border-radius: 10px;
  }
`;
export const Tags = styled.div`
  /* @media ${(props) => props.theme.media.fablet} {
    display: none;
  } */
  .techstack_tags {
    font-size: 12px;
    padding: 5px 8px;
    border-radius: 15px;
    background: ${(props) => props.theme.gradient};
    color: ${(props) => props.theme.secondaryColor};
    font-weight: 600;
  }

  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 26px;
`;
