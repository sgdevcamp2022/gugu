import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import isRoleSettingModeState from '../recoil/atom/isRoleSettingModeState';

import RoleInfoContainer from './role-information/RoleInfoContainer';
import RoleSettingContainer from './role-setting/RoleSettingContainer';
import roleListState from '../recoil/atom/roleListState';

function ServerRoleContainer() {
  const isRoleSettingMode = useRecoilValue(isRoleSettingModeState);
  const setRoleList = useSetRecoilState(roleListState);

  const roleList = [
    { id: '1', name: '프론트엔드', color: 'green', numMember: 2 },
    { id: '2', name: '백엔드', color: 'orange', numMember: 2 },
  ];

  useEffect(() => {
    setRoleList(roleList);
  }, []);

  if (!isRoleSettingMode) {
    return <RoleInfoContainer />;
  }

  return <RoleSettingContainer roleList={roleList} />;
}

export default ServerRoleContainer;
