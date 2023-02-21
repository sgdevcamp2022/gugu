import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IoSettingsSharp } from 'react-icons/io5';
import { PropTypes } from 'prop-types';

import ServerSideBarModalButton from './ServerSideBarModalButton';
import privatePageTypeState from '../../../recoil/common/privatePageType';
import PRIVATE_PAGE_TYPES from '../../../common/constant/PRIVATE_PAGE_TYPES';

function ServerSideBarSettingBtn({ setIsServerModalOpen }) {
  const setPrivatePageType = useSetRecoilState(privatePageTypeState);

  const handleServerSettingBtn = () => {
    setIsServerModalOpen(false);
    setPrivatePageType(PRIVATE_PAGE_TYPES.SETTING);
  };

  return (
    <ServerSideBarModalButton onClick={handleServerSettingBtn}>
      <div className="label">서버 설정</div>
      <div className="icon">
        <IoSettingsSharp />
      </div>
    </ServerSideBarModalButton>
  );
}

ServerSideBarSettingBtn.propTypes = {
  setIsServerModalOpen: PropTypes.func.isRequired,
};

export default ServerSideBarSettingBtn;
