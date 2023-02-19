import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import SERVER from './constant/SERVERS';
import CHANNELS from './constant/CHANNELS';
import USERS from './constant/USERS';
import NOTFOUND from './constant/NOTFOUND';

import SideBar from './SideBar';
import FullScreenBox from '../layout/FullScreenBox';
import SettingCloseButton from './common/components/SettingCloseButton';
import settingMainContentState from '../recoil/setting/common/settingMainContentState';
import settingTypeState from '../recoil/setting/common/settingTypeState';

const Box = styled(FullScreenBox)`
  display: flex;
  background-color: ${(props) => props.theme.color.primaryBg};
`;

const ContentContainer = styled.div`
  width: 80%;
  padding: 60px 40px;
  max-width: 740px;

  display: grid;
  grid-template-columns: auto 80px;
`;

const sidebarSelector = (type) => {
  switch (type) {
    case 'SERVER':
      return SERVER.SIDEBAR;
    case 'CHANNEL':
      return CHANNELS.SIDEBAR;
    case 'USER':
      return USERS.SIDEBAR;
    default:
      return NOTFOUND.SIDEBAR;
  }
};

function SettingContainer() {
  const mainContent = useRecoilValue(settingMainContentState);
  const settingType = useRecoilValue(settingTypeState);
  return (
    <Box>
      <SideBar sidebar={sidebarSelector(settingType)} />
      <ContentContainer>
        {mainContent}
        <SettingCloseButton />
      </ContentContainer>
    </Box>
  );
}

export default SettingContainer;
