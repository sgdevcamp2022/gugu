import React, { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import isRoleSettingModeState from '../../../recoil/setting/server/isRoleSettingModeState';

import RoleInfoContainer from './role-information/RoleInfoContainer';
import RoleSettingContainer from './role-setting/RoleSettingContainer';
import roleListState from '../../../recoil/setting/common/roleListState';

function ServerRoleContainer() {
  const isRoleSettingMode = useRecoilValue(isRoleSettingModeState);
  const setRoleList = useSetRecoilState(roleListState);
  const resetIsRoleSettingMode = useResetRecoilState(isRoleSettingModeState);

  const roleList = [
    { id: '1', name: '프론트엔드', color: 'green', numMember: 2 },
    { id: '2', name: '백엔드', color: 'orange', numMember: 2 },
  ];

  useEffect(() => {
    resetIsRoleSettingMode();
    setRoleList(roleList);
  }, []);

  if (!isRoleSettingMode) {
    return <RoleInfoContainer />;
  }

  return <RoleSettingContainer />;
}

export default ServerRoleContainer;
