import React from 'react';
import styled from 'styled-components';

import SideBar from './components/SideBar';

const Content = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 200px 1fr;
`;

function RoleSettingContainer() {
  return (
    <Content>
      <SideBar />
      <div>d</div>
    </Content>
  );
}

export default React.memo(RoleSettingContainer);
