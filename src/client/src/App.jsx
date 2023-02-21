import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';

// import ServerContainer from './SERVER/ServerContainer';
import SettingContainer from './setting/SettingContainer';
import Theme from './styles/Theme';
import privatePageTypeState from './recoil/common/privatePageTypeState';
import PRIVATE_PAGE_TYPES from './common/constant/PRIVATE_PAGE_TYPES';
import MainContainer from './main/MainContainer';

function PrivateRouter() {
  const privatePageType = useRecoilValue(privatePageTypeState);

  switch (privatePageType) {
    case PRIVATE_PAGE_TYPES.MAIN:
      return <MainContainer />;
    case PRIVATE_PAGE_TYPES.SETTING:
      return <SettingContainer />;
    default:
      return <MainContainer />;
  }
}

function PublicRouter() {}

function AppRouter() {
  const isLogIn = !!localStorage.getItem('accessToken');

  switch (isLogIn) {
    case true:
      return <PrivateRouter />;
    case false:
      return <PublicRouter />;
    default:
      return <PublicRouter />;
  }
}

function App() {
  return (
    <StyledThemeProvider theme={Theme}>
      <AppRouter />
    </StyledThemeProvider>
  );
}

export default App;
