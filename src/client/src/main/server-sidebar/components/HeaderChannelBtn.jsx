import React, { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';

import HeaderModalButton from './HeaderModalButton';
import BackdropModal from '../../../common/components/BackdropModal';
import CreateChannelModal from './CreateChannelModal';

function HeaderChannelBtn() {
  const [isChannelModalOpen, setIsChannelModalOpen] = useState(false);
  return (
    <>
      <HeaderModalButton
        onClick={() => {
          setIsChannelModalOpen(true);
        }}
      >
        <div className="label">채널 만들기</div>
        <div className="icon">
          <IoMdAddCircle />
        </div>
      </HeaderModalButton>

      {isChannelModalOpen && (
        <BackdropModal
          open={isChannelModalOpen}
          setOpen={setIsChannelModalOpen}
        >
          <CreateChannelModal setIsModalOpen={setIsChannelModalOpen} />
        </BackdropModal>
      )}
    </>
  );
}

export default HeaderChannelBtn;
