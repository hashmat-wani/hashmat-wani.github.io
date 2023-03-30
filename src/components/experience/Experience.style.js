import styled from "styled-components";

export const ExperienceWrapper = styled.section`
  ${(props) => props.theme.spacing.sectionBottom};
  /* border: 2px solid red; */
`;

export const ExperienceDetails = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 100%;
  padding: 40px;
  background-color: ${(props) => props.theme.secondaryColor};
  box-shadow: ${(props) => props.theme.shadowSmall};
  border-radius: 10px;
  @media ${(props) => props.theme.media.tablet} {
    padding: 40px 30px;
  }
  @media ${(props) => props.theme.media.mobile} {
    padding: 25px 15px;
  }
`;

export const CompanyDetails = styled.div`
  display: flex;
  gap: 10px;
  /* border: 1px solid red; */
  & h4,
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
    line-height: 140%;
    margin: 0;
    font-family: ${(p) => p.theme.secondaryFontFamily};
    color: ${(p) => p.theme.primaryText};
  }
`;

export const Left = styled.div`
  max-width: 50px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  gap: 12px;
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
    /* margin-top: 10px; */
  }
  .side_vertical_line {
    background: ${(props) =>
      props.theme.dark ? props.theme.primaryText : "#00000014"};
    width: 2px;
    margin: 0 auto;
    border-radius: 10px;
  }
`;
export const Right = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* > div {
    border: 1px solid green;
  } */
`;
export const Company = styled.div`
  /* border: 1px solid red; */
  p {
    font-size: 15px;
  }
`;

export const Experiences = styled.div``;

export const Heading = styled.div`
  margin-bottom: 9px;
  h3 {
    margin: 0;
  }
`;
export const Details = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 6px;
  .line-clamp {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .toggle {
    background: none;
    border: none;
    cursor: pointer;
    float: right;
    display: none;
    font-size: 13px;
    color: ${(props) => props.theme.primaryText};
    :hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`;

export const Logo = styled.div`
  padding-top: 3px;
  width: 46px;
  height: 46px;
  /* border: 1px solid blue; */
`;
