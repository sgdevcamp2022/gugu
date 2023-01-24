import React from 'react';
import styled from 'styled-components';
import FullScreenBox from '../layout/FullScreenBox';
import ChannelContainer from './channel/ChannelContainer';
import ServerList from './ServerList';
import SideBar from './sidebar/SideBar';

const Box = styled(FullScreenBox)`
  display: flex;
`;

function ServerContainer() {
  return (
    <Box>
      <ServerList />
      <SideBar />
      <ChannelContainer />
    </Box>
  );
}

export default ServerContainer;
