import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import Content from './Content';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const settingTypes = ['channel', 'user', 'server'];

function SettingContainer() {
  return (
    <Container>
      <SideBar settingTypes={settingTypes[0]} />
      <Content />
    </Container>
  );
}

export default SettingContainer;
