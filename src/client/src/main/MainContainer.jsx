import React from 'react';
import styled from 'styled-components';
import FullScreenBox from '../layout/FullScreenBox';
import UserSideBar from './common/components/UserSideBar';
import ServerSideBar from './common/components/ServerSideBar';

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
