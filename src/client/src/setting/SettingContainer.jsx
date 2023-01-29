import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { server } from './constant/server';
import { channel } from './constant/channel';
import { user } from './constant/user';
import { notFound } from './constant/notFound';
import Content from './Content';
import SideBar from './SideBar';
import FullScreenBox from '../layout/FullScreenBox';
import SettingCloseButton from './SettingCloseButton';

const Box = styled(FullScreenBox)`
  display: flex;
`;

const ContentContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 60px 40px;
  
  display: grid;
  grid-template-columns: auto 60px;
  
  background-color: #3a3c41;
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
    <Box>
      <SideBar settingTypes={settingSelector(settingType)} />
      <ContentContainer>
        <Content />
        <SettingCloseButton />
      </ContentContainer>
    </Box>
  );
}

SettingContainer.propTypes = {
  settingType: PropTypes.string,
};

SettingContainer.defaultProps = {
  settingType: '',
};

export default SettingContainer;
