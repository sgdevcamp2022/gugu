import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// import ServerContainer from './server/ServerContainer';
import SettingContainer from './setting/SettingContainer';
import Theme from './styles/Theme';

function AppRouter() {
  return (
    <div className="App">
      <SettingContainer />
    </div>
  );
}

function App() {
  return (
    <StyledThemeProvider theme={Theme}>
      <AppRouter />
    </StyledThemeProvider>
  );
}

export default App;
