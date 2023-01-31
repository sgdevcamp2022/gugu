import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const Box = styled.div`
  flex: 1;
`;

function ChannelContainer() {
  return (
    <Box>
      <NavBar />
    </Box>
  );
}

export default ChannelContainer;
