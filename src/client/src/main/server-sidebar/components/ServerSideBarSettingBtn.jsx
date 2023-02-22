import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IoSettingsSharp } from 'react-icons/io5';
import { PropTypes } from 'prop-types';

import HeaderModalButton from './HeaderModalButton';
import privatePageTypeState from '../../../recoil/common/privatePageType';
import PRIVATE_PAGE_TYPES from '../../../common/constant/PRIVATE_PAGE_TYPES';
import settingTypeState from '../../../recoil/setting/common/settingTypeState';
import SETTING_TYPES from '../../../setting/constant/SETTING_TYPES';

function ServerSideBarSettingBtn({ setIsServerModalOpen }) {
  const setPrivatePageType = useSetRecoilState(privatePageTypeState);
  const setSettingType = useSetRecoilState(settingTypeState);

  const handleServerSettingBtn = () => {
    setIsServerModalOpen(false);
    setPrivatePageType(PRIVATE_PAGE_TYPES.SETTING);
    setSettingType(SETTING_TYPES.SERVER);
  };

  return (
    <HeaderModalButton onClick={handleServerSettingBtn}>
      <div className="label">서버 설정</div>
      <div className="icon">
        <IoSettingsSharp />
      </div>
    </HeaderModalButton>
  );
}

ServerSideBarSettingBtn.propTypes = {
  setIsServerModalOpen: PropTypes.func.isRequired,
};

export default ServerSideBarSettingBtn;
