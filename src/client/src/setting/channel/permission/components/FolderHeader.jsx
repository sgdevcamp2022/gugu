import React, { useState } from 'react';
import styled from 'styled-components';

import BackdropModal from '../../../../common/components/BackdropModal';
import AddModal from './AddModal';

const Header = styled.div`
  margin: 16px;
  padding: 16px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: ${(props) => props.theme.border.primary};

  .title {
    color: ${(props) => props.theme.color.primaryText};
    font-size: 12px;
    font-weight: 700;
  }
`;

const OpenAddModalBtn = styled.div`
  height: 28px;
  padding: 2px 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.color.blue};
  border-radius: 3px;
  font-size: 14px;
  color: ${(props) => props.theme.color.primaryText};
  cursor: pointer;
`;

function FolderHeader() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <>
      <Header>
        <h2 className="title">누가 이 채널 이용이 가능한가요?</h2>
        <OpenAddModalBtn
          onClick={() => {
            setIsAddModalOpen(true);
          }}
        >
          멤버 또는 역할 추가
        </OpenAddModalBtn>
      </Header>

      <BackdropModal open={isAddModalOpen} setOpen={setIsAddModalOpen}>
        <AddModal setIsAddModalOpen={setIsAddModalOpen} />
      </BackdropModal>
    </>
  );
}

export default React.memo(FolderHeader);
