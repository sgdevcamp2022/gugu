import React from 'react';
import styled from 'styled-components';
import Server from './Server';

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 90px;
  flex-direction: column;
  background: #25272a;
`;

function ServerList() {
  return (
    <Box>
      <Server />
    </Box>
  );
}

export default ServerList;
