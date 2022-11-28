import React, { createContext } from "react";

import "normalize.css";
import styled, { ThemeProvider } from "styled-components";
import Wrapper from "../components/common/Wrapper";
import Navbar from "../components/navbar/Navbar";
import useThemes from "../hooks/useThemes";
import GlobalStyle from "../styles/GlobalStyle";
import { themedark, themelight } from "../theme";
import "../fontLib";

import { setConfiguration } from "react-grid-system";
import Footer from "../components/footer/Footer";
setConfiguration({ breakpoints: [576, 769, 992, 1200] });

const RootWrapper = styled(Wrapper)`
  margin-top: 100px;
  margin-bottom: 50px;
  min-height: calc(100vh - 125px);

  @media ${(props) => props.theme.media.tablet} {
    margin-top: 50px;
  }
`;

export const themeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [theme, toggleTheme] = useThemes();
  let currentTheme = theme === "light" ? themelight : themedark;

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyle />
        <themeContext.Provider value={{ theme, toggleTheme }}>
          <Navbar />
          <RootWrapper>{children}</RootWrapper>
        </themeContext.Provider>

        <Footer />
      </>
    </ThemeProvider>
  );
};

export default ThemeContextProvider;
