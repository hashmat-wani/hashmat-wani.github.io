import styled from "styled-components";

export const GithubOverviewWrapper = styled.section`
  ${(props) => props.theme.spacing.sectionBottom};
  /* border: 2px solid red; */
`;

export const GithubDetails = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  padding: 40px;
  background-color: ${(props) => props.theme.secondaryColor};
  box-shadow: ${(props) => props.theme.shadowSmall};
  border-radius: 10px;
  @media ${(props) => props.theme.media.mobile} {
    padding: 30px;
  }
`;
