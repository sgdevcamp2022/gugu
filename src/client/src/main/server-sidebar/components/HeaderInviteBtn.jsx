import React, { useState } from 'react';
import { IoPersonAdd } from 'react-icons/io5';

import HeaderModalButton from './HeaderModalButton';
import BackdropModal from '../../../common/components/BackdropModal';
import InviteModal from './InviteModal';

function HeaderInviteBtn() {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  return (
    <>
      <HeaderModalButton
        className="blue"
        onClick={() => {
          setIsInviteModalOpen(true);
        }}
      >
        <div className="label">초대하기</div>
        <div className="icon">
          <IoPersonAdd />
        </div>
      </HeaderModalButton>
      {isInviteModalOpen && (
        <BackdropModal open={isInviteModalOpen} setOpen={setIsInviteModalOpen}>
          <InviteModal />
        </BackdropModal>
      )}
    </>
  );
}

export default HeaderInviteBtn;
