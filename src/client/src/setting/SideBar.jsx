import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 20%;
  background-color: #333439;
  color: #b8babd;
  padding: 1.2rem;
`;

const ServerName = styled.p`
  color: #b8babd;
  font-weight: 700;
  font-size: 0.9rem;
`;

function SideBar() {
  return (
    <Container>
      <ServerName>GuGu</ServerName>
    </Container>
  );
}

export default SideBar;
