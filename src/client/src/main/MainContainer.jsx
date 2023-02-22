import React from 'react';
import styled from 'styled-components';
import FullScreenBox from '../layout/FullScreenBox';
import UserSideBar from './user-sidebar/UserSideBar';
import ServerSideBar from './server-sidebar/ServerSideBar';

const Box = styled(FullScreenBox)`
  display: grid;
  grid-template-columns: 72px 240px 1fr;

  background-color: ${(props) => props.theme.color.primaryBg};
`;

function MainContainer() {
  return (
    <Box>
      <UserSideBar />
      <ServerSideBar />
      <div>dddd</div>
    </Box>
  );
}

export default MainContainer;
