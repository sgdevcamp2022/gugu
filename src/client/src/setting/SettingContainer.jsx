import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { server } from './constant/server';
import { channel } from './constant/channel';
import { user } from './constant/user';
import { notFound } from './constant/notFound';

import SideBar from './SideBar';
import FullScreenBox from '../layout/FullScreenBox';
import SettingCloseButton from './SettingCloseButton';
import ServerMemberContainer from './server/server-member/ServerMemberContainer';

const Box = styled(FullScreenBox)`
  display: flex;
  background-color: ${(props) => props.theme.color.primaryBg};
`;

const ContentContainer = styled.div`
  width: 80%;
  padding: 60px 40px;
  max-width: 660px;

  display: grid;
  grid-template-columns: auto 80px;
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
        <ServerMemberContainer />
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
