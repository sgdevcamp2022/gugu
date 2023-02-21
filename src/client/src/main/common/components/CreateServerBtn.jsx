import React, { useState } from 'react';
import styled from 'styled-components';
import { IoAdd } from 'react-icons/io5';
import UserSideBarIcon from './UserSideBarIcon';
import BackdropModal from '../../../common/components/BackdropModal';
import CreateServerModal from './CreateServerModal';

const Container = styled(UserSideBarIcon)`
  font-size: 24px;
  color: ${(props) => props.theme.color.green};

  :hover {
    background-color: ${(props) => props.theme.color.green};
    color: ${(props) => props.theme.color.primaryText};
  }
`;

function CreateServerBtn() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  return (
    <>
      <Container
        onClick={() => {
          setIsCreateModalOpen(true);
        }}
      >
        <IoAdd />
      </Container>

      <BackdropModal open={isCreateModalOpen} setOpen={setIsCreateModalOpen}>
        <CreateServerModal />
      </BackdropModal>
    </>
  );
}

export default CreateServerBtn;
