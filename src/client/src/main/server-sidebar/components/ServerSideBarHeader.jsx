import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IoChevronDown, IoClose } from 'react-icons/io5';

import useOutsideClick from '../../../hooks/useOutsideClick';
import HeaderInviteBtn from './HeaderInviteBtn';
import ServerSideBarSettingBtn from './ServerSideBarSettingBtn';
import HeaderChannelBtn from './HeaderChannelBtn';
import HeaderCategoryBtn from './HeaderCategoryBtn';

const Container = styled.div`
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;

  :hover {
    background-color: rgba(78, 80, 88, 0.298);
  }

  .server-name {
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.color.primaryText};
  }

  .icon {
    margin-left: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

const DarkModal = styled.div`
  width: 204px;
  padding: 6px 8px;

  position: absolute;
  top: 55px;
  left: 10px;
  z-index: 1;

  background-color: ${(props) => props.theme.color.darkModalBg};
  border-radius: 4px;
`;

function ServerSideBarHeader() {
  const serverModalRef = useRef();
  const [isServerModalOpen, setIsServerModalOpen] = useState(false);

  useOutsideClick(serverModalRef, () => {
    setIsServerModalOpen(false);
  });

  return (
    <Container>
      <Header
        onClick={() => {
          setIsServerModalOpen(true);
        }}
      >
        <span className="server-name">GuGu</span>
        <div className="icon">
          {!isServerModalOpen ? <IoChevronDown /> : <IoClose />}
        </div>
      </Header>

      {isServerModalOpen && (
        <DarkModal ref={serverModalRef}>
          <HeaderInviteBtn />
          <ServerSideBarSettingBtn
            setIsServerModalOpen={setIsServerModalOpen}
          />
          <HeaderChannelBtn />
          <HeaderCategoryBtn />
        </DarkModal>
      )}
    </Container>
  );
}

export default ServerSideBarHeader;
