import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import ServerSideBarInviteBtn from './ServerSideBarInviteBtn';
import ServerSideBarSettingBtn from './ServerSideBarSettingBtn';
import ServerSideBarChannelBtn from './ServerSideBarChannelBtn';
import ServerSideBarCategoryBtn from './ServerSideBarCategoryBtn';

const Container = styled.div``;

function ServerSideBarModal({ setIsServerModalOpen }) {
  return (
    <Container>
      <ServerSideBarInviteBtn />
      <ServerSideBarSettingBtn setIsServerModalOpen={setIsServerModalOpen} />
      <ServerSideBarChannelBtn />
      <ServerSideBarCategoryBtn />
    </Container>
  );
}

ServerSideBarModal.propTypes = {
  setIsServerModalOpen: PropTypes.func.isRequired,
};

export default ServerSideBarModal;
