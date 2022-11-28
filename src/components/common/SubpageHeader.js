import styled from "styled-components";

const SubpageHeader = styled.h3`
  margin: 60px auto 40px;
  font-size: 1rem;
  color: ${(p) => (p.theme.dark ? p.theme.primaryText : p.theme.primaryColor)};
  font-weight: 900;
  text-align: center;
  letter-spacing: 1px;
`;

export default SubpageHeader;
