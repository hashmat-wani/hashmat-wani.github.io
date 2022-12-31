import styled from "styled-components";

import { Card, CardFooter } from "../common/Card";

const CCard = styled(Card)`
  justify-self: center;
  margin: 0;
  position: relative;
  padding: 0;
  border-radius: 15px;
  overflow: hidden;
  min-width: unset;
  width: 100%;

  height: auto;
  max-width: 90%;

  transform: translateY(0px);
  transition: transform 0.2s ease;
  &:hover {
    transition: transform 0.2s ease;
    transform: translateY(-5px);
  }
`;

export const JSProjectsWrapper = styled.section`
  ${(props) => props.theme.spacing.sectionBottom};
`;

export const JSProjectCard = styled(CCard)`
  overflow: hidden;
  height: 320px;
  cursor: pointer;
  &:hover .ccard__footer {
    bottom: 0;
    opacity: 1;
    transition: 0.3s ease-in-out;
  }
  @media ${(props) => props.theme.media.mobile} {
    height: 400px;
  }
`;

export const JSProjectCardFooter = styled(CardFooter)`
  position: absolute;
  bottom: -100px;
  left: 0;
  opacity: 0;
  transition: 0.3s ease-in-out;
  padding: 10px 15px;
  background: ${(props) => props.theme.secondaryColor};
  p {
    font-size: 12px;
    text-align: left;
  }
  h5 {
    margin: 0;
    margin-bottom: 6px;
    color: ${(props) => props.theme.primaryColor};
  }

  @media ${(props) => props.theme.media.mobile} {
    bottom: 0;
    opacity: 1;
  }
`;
