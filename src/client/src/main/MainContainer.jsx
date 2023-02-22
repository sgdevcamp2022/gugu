import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import FullScreenBox from '../layout/FullScreenBox';
import UserSideBar from './user-sidebar/UserSideBar';
import ServerSideBar from './server-sidebar/ServerSideBar';
import mainMainContentState from '../recoil/main/common/mainMainContentState';

const Box = styled(FullScreenBox)`
  display: grid;
  grid-template-columns: 72px 240px 1fr;

  background-color: ${(props) => props.theme.color.primaryBg};
`;

const MainContentContainer = styled.div`
  padding: 20px;
  color: ${(props) => props.theme.color.primaryText};
  font-size: 32px;
`;

function MainContainer() {
  const mainContent = useRecoilValue(mainMainContentState);
  return (
    <Box>
      <UserSideBar />
      <ServerSideBar />
      <MainContentContainer>{mainContent}</MainContentContainer>
    </Box>
  );
}

export default MainContainer;
