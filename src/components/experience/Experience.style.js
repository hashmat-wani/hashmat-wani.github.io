import styled from "styled-components";

export const ExperienceWrapper = styled.section`
  ${(props) => props.theme.spacing.sectionBottom};
  /* border: 2px solid red; */
`;

export const ExperienceDetails = styled.div`
  /* border: 1px solid red; */
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
