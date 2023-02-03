import React from 'react';
import styled from 'styled-components';

import SideBar from './components/SideBar';
import TopBar from './components/TopBar';

const Content = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 200px 1fr;
`;

const Container = styled.div`
  padding: 0 42px 0 24px;
`;

function RoleSettingContainer() {
  return (
    <Content>
      <SideBar />
      <Container>
        <TopBar />
      </Container>
    </Content>
  );
}

export default React.memo(RoleSettingContainer);
