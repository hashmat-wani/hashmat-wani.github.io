import { css } from "styled-components";

const scrollBar = css`
  ::-webkit-scrollbar-track {
    background-color: white;
  }

  ::-webkit-scrollbar {
    width: 13px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.scrollBar};
    border-radius: 1rem;
    border: 3px solid transparent;
    background-clip: content-box;
  }

  ::-moz-scrollbartrack-vertical {
    background-color: white;
  }

  ::-moz-scrollbar {
    width: 12px;
  }

  ::-moz-scrollbarbutton-up {
    background-color: ${(p) => p.theme.scrollBar};
  }

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }
`;

export default scrollBar;
