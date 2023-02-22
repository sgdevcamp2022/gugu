import React from 'react';
import styled from 'styled-components';

import ServerSideBarHeader from './components/ServerSideBarHeader';
import ServerSideBarContent from './components/ServerSideBarContent';
import ServerFooter from './components/ServerFooter';

const Container = styled.div`
  display: grid;
  grid-template-rows: 48px 1fr 52px;
  background-color: ${(props) => props.theme.color.secondaryBg};
`;

function ServerSideBar() {
  return (
    <Container>
      <ServerSideBarHeader />
      <ServerSideBarContent />
      <ServerFooter />
    </Container>
  );
}

export default ServerSideBar;
