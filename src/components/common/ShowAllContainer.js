import styled, { css } from "styled-components";

export const ShowAllContainer = styled.div`
  /* border: 1px solid red; */
  overflow: hidden;
  position: relative;

  ${(props) =>
    !props.showAll &&
    css`
      &:before {
        content: "";
        width: 100%;
        height: 300px;
        position: absolute;
        /* border-radius: 10px; */
        bottom: 0;
        background: ${(p) =>
          `linear-gradient(180deg, rgba(0,0,0,0), 40%, ${p.theme.bg})`};
        /* background-color: red; */
        z-index: 5;
        transition: 0.3s;
      }
    `}

  .showall__button {
    position: absolute;
    bottom: 50px;
    left: 50%;
    z-index: 6;
    padding: 15px;
    font-weight: bold;
    transform: translateX(-50%);

    @media ${(props) => props.theme.media.mobile} {
      padding: 14px 11px;
    }
  }
  max-height: ${(props) => (props.showAll ? "100%" : props.collapseHeight)};

  @media ${(props) => props.theme.media.tablet} {
    max-height: ${(props) => (props.showAll ? "100%" : "2800px")};
  }
`;
