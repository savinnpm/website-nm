import React, { useMemo, useState } from 'react';
import { createGlobalStyle, ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../../styles/theme';
import { useDarkMode } from '../hooks/useDarkMode';

const GlobalStyle = createGlobalStyle`
  html {
    color-scheme: ${props => props.theme.colorScheme};
  }
  
  html,
  body {
    height: 100%;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  body {
    background-color: ${props => props.theme.primaryBackgroundColor};
    color: ${props => props.theme.color};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  svg.icon {
    width: 24px;
    height: 24px;
  }

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    font: inherit;
    border: none;
    background-color: transparent;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const ThemeContext = React.createContext({
    darkMode: false,
    setDarkMode: () => { }
});

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useDarkMode()

    const memoizedValue = useMemo(() => {
      return { darkMode, setDarkMode };
    }, [darkMode, setDarkMode]);
    
    return (
      <ThemeContext.Provider value={memoizedValue}>
        <StyledComponentsThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          {props.children}
          <GlobalStyle />
        </StyledComponentsThemeProvider>
      </ThemeContext.Provider>
    )
};

export const useThemeContext = () => {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};