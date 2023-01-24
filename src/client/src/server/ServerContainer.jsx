import React from 'react';
import styled from 'styled-components';
import FullScreenBox from '../layout/FullScreenBox';
import ServerList from './ServerList';

const Box = styled(FullScreenBox)`
  display: flex;
`;

function ServerContainer() {
  return (
    <Box>
      <ServerList />
    </Box>
  );
}

export default ServerContainer;
