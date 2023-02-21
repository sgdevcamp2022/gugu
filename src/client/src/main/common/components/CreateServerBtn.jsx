import React, { useState } from 'react';
import styled from 'styled-components';
import { IoAdd } from 'react-icons/io5';
import UserSideBarIcon from './UserSideBarIcon';
import BackdropModal from '../../../common/components/BackdropModal';
import CreateServerModal from './CreateServerModal';

const Container = styled.div``;

const Button = styled(UserSideBarIcon)`
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
    <Container>
      <Button
        onClick={() => {
          setIsCreateModalOpen(true);
        }}
      >
        <IoAdd />
      </Button>

      <BackdropModal open={isCreateModalOpen} setOpen={setIsCreateModalOpen}>
        <CreateServerModal isOpen={isCreateModalOpen} />
      </BackdropModal>
    </Container>
  );
}

export default React.memo(CreateServerBtn);
