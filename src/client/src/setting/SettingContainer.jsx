import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { server } from './constant/server';
import { channel } from './constant/channel';
import { user } from './constant/user';
import { notFound } from './constant/notFound';
import Content from './Content';
import SideBar from './SideBar';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const settingSelector = (type) => {
  switch (type) {
    case 'server':
      return server;
    case 'channel':
      return channel;
    case 'user':
      return user;
    default:
      return notFound;
  }
};

function SettingContainer({ settingType }) {
  return (
    <Container>
      <SideBar settingTypes={settingSelector(settingType)} />
      <Content />
    </Container>
  );
}

SettingContainer.propTypes = {
  settingType: PropTypes.string,
};

SettingContainer.defaultProps = {
  settingType: '',
};

export default SettingContainer;
