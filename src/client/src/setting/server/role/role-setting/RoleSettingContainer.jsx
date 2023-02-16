import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import roleSettingTypeState from '../../../../recoil/atom/setting/server/roleSettingTypeState';
import ROLE_SETTING_TYPES from '../../../constant/ROLE_SETTING_TYPES';

import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import PermissionsContent from './components/PermissionsContent';
import DisplayContent from './components/DisplayContent';
import MembersContent from './components/MembersContent';

const Content = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 200px 1fr;
`;

const Container = styled.div`
  width: 100%;
  max-width: 442px;
  padding: 0 42px 0 24px;
`;

function RoleSettingContainer() {
  const [content, setContent] = useState(
    <div style={{ color: 'red' }}>Not Found</div>
  );
  const roleSettingType = useRecoilValue(roleSettingTypeState);

  useEffect(() => {
    switch (roleSettingType) {
      case ROLE_SETTING_TYPES.DISPLAY:
        return setContent(<DisplayContent />);

      case ROLE_SETTING_TYPES.PERMISSIONS:
        return setContent(<PermissionsContent />);

      case ROLE_SETTING_TYPES.MEMBERS:
        return setContent(<MembersContent />);

      default:
        return setContent(<div style={{ color: 'red' }}>Not Found</div>);
    }
  }, [roleSettingType]);

  return (
    <Content>
      <SideBar />
      <Container>
        <TopBar />
        {content}
      </Container>
    </Content>
  );
}

export default React.memo(RoleSettingContainer);
