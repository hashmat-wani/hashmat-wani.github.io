import styled from "styled-components";

const Flex = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => (props.nowrap ? "no-wrap" : "wrap")};
`;

export default Flex;
