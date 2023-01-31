import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background: #333439;
`;

function SideBar() {
  return (
    <Box>
      <NavBar />
    </Box>
  );
}

export default SideBar;
