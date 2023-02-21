import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IoChevronDown, IoClose } from 'react-icons/io5';

import useOutsideClick from '../../../hooks/useOutsideClick';
import ServerSideBarInviteBtn from './ServerSideBarInviteBtn';
import ServerSideBarSettingBtn from './ServerSideBarSettingBtn';
import ServerSideBarChannelBtn from './ServerSideBarChannelBtn';
import ServerSideBarCategoryBtn from './ServerSideBarCategoryBtn';

const Container = styled.div``;

const Header = styled.div`
  height: 24px;
  padding: 12px 16px;

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
    font-size: 18px;
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

const DarkModal = styled.div`
  width: 204px;
  padding: 6px 8px;

  position: relative;
  top: 10px;
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
          <ServerSideBarInviteBtn />
          <ServerSideBarSettingBtn
            setIsServerModalOpen={setIsServerModalOpen}
          />
          <ServerSideBarChannelBtn />
          <ServerSideBarCategoryBtn />
        </DarkModal>
      )}
    </Container>
  );
}

export default ServerSideBarHeader;
