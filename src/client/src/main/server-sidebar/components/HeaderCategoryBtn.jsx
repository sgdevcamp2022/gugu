import React, { useState } from 'react';
import { MdCreateNewFolder } from 'react-icons/md';

import HeaderModalButton from './HeaderModalButton';
import BackdropModal from '../../../common/components/BackdropModal';
import CreateCategoryModal from './CreateCategoryModal';

function HeaderCategoryBtn() {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  return (
    <>
      <HeaderModalButton
        onClick={() => {
          setIsCategoryModalOpen(true);
        }}
      >
        <div className="label">카테고리 만들기</div>
        <div className="icon">
          <MdCreateNewFolder />
        </div>
      </HeaderModalButton>

      {isCategoryModalOpen && (
        <BackdropModal
          open={isCategoryModalOpen}
          setOpen={setIsCategoryModalOpen}
        >
          <CreateCategoryModal setIsModalOpen={setIsCategoryModalOpen} />
        </BackdropModal>
      )}
    </>
  );
}

export default HeaderCategoryBtn;
