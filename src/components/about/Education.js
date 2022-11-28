import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const EducationWrapper = styled.article`
  position: relative;
  font-size: 12px;
  padding: 15px;
  padding-bottom: 30px;
  margin: 20px 10px;
  border-radius: 10px;
  min-width: 200px;
  flex: 1;

  background-color: ${(p) =>
    p.theme.dark ? p.theme.accentColor : p.theme.secondaryColor};
  box-shadow: ${(props) => props.theme.shadowSmall};

  p {
    font-size: 15px;
  }
  h3,
  i {
    color: ${(p) => p.theme.primaryColor};
  }

  i {
    position: absolute;
    bottom: 20px;
    right: 20px;
    float: right;
  }
  h3:hover {
    color: ${(p) => p.theme.primaryText};
    text-decoration: underline;
  }
`;

const Education = ({ children }) => (
  <EducationWrapper>{children}</EducationWrapper>
);

Education.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Education;
