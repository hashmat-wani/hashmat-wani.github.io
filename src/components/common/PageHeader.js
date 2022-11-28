import styled from "styled-components";

const PageHeader = styled.h2`
  margin: 100px auto;
  font-size: 1.5rem;
  color: ${(p) => (p.theme.dark ? p.theme.primaryText : p.theme.primaryColor)};
  font-weight: 900;
  text-align: center;
  letter-spacing: 1px;
  .education {
    color: #f8f8f8;
    margin: 0;
    @media (min-width: 769px) and (max-width: 890px) {
      color: ${(p) =>
        p.theme.dark ? p.theme.primaryText : p.theme.primaryColor};
    }
  }
`;

export default PageHeader;
