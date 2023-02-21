import React from 'react';
import styled from 'styled-components';

import ServerSideBarHeader from './ServerSideBarHeader';

const Container = styled.div`
  background-color: ${(props) => props.theme.color.secondaryBg};
`;

function ServerSideBar() {
  return (
    <Container>
      <ServerSideBarHeader />
    </Container>
  );
}

export default ServerSideBar;
