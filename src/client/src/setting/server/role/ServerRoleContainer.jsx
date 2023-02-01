import React from 'react';
import { useRecoilValue } from 'recoil';
import isRoleSettingModeState from '../../../recoil/setting/atom/isRoleSettingModeState';

import RoleInfoContainer from './role-info/RoleInfoContainer';

function ServerRoleContainer() {
  const isRoleSettingMode = useRecoilValue(isRoleSettingModeState);

  if (!isRoleSettingMode) {
    return <RoleInfoContainer />;
  }

  return <div>dfs</div>;
}

export default ServerRoleContainer;
