import React, { useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './styled/themes';
import GlobalStyle from './styled/global';
import Router from './route/index';

export const StateContext = createContext({ changeTheme: () => {console.log();} });

function App() {
  const [themeState, setThemeState] = useState(lightTheme);
  const handleThemeChange = () => {
    if(themeState === lightTheme) {setThemeState(darkTheme);}
    if(themeState === darkTheme) {setThemeState(lightTheme);}
  };
  return (
    <ThemeProvider theme={themeState}>
      <StateContext.Provider value={{ changeTheme: handleThemeChange }}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </StateContext.Provider>
    </ThemeProvider>
  );
}

export default App;
