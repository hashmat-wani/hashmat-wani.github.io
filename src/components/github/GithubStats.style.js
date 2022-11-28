import styled from "styled-components";

export const GithubStatsWrapper = styled.div`
  /* border: 1px solid red; */
`;

export const GithubStatsContent = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media ${(props) => props.theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;
