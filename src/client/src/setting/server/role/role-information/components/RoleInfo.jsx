import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { useSetRecoilState } from 'recoil';
import {
  RiShieldUserFill,
  RiPencilFill,
  RiMoreFill,
  RiDeleteBin6Fill,
} from 'react-icons/ri';
import { BsPersonFill } from 'react-icons/bs';

import {
  DarkModalButton,
  DarkModalContainer,
} from '../../../../../layout/DarkModal';
import useOutsideClick from '../../../../../hooks/useOutsideClick';
import isRoleSettingModeState from '../../../recoil/atom/isRoleSettingModeState';
import selectedRoleState from '../../../recoil/atom/selectedRoleState';

const Container = styled.div`
  height: 60px;
  padding-top: 1px;

  position: relative;

  display: grid;
  grid-template-columns: 5fr 112px 4fr;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.color.hoverBg};

    .button {
      visibility: visible;
      background-color: ${(props) => props.theme.color.inputBg};
    }
  }
`;

const Role = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const RoleIconHolder = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
`;

const RoleName = styled.div`
  margin-right: auto;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.color.primaryText};
`;

const NumMember = styled.div`
  margin-left: 16px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: ${(props) => props.theme.color.secondaryText};
  font-size: 16px;

  cursor: pointer;

  .text {
    height: 20px;
    padding-top: 3px;
  }

  &:hover {
    color: ${(props) => props.theme.color.primaryText};
  }
`;

const NumMemberIconHolder = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 4px;

  font-size: 20px;
`;

const ButtonContainer = styled.div`
  margin-left: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled.div`
  width: 36px;
  height: 36px;
  margin-left: 16px;

  background-color: ${(props) => props.theme.color.secondaryBg};

  color: ${(props) => props.theme.color.secondaryText};
  font-size: 20px;

  border-radius: 1000px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.primaryText};
  }

  &.edit-button {
    visibility: hidden;
  }
`;

const ButtonIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DarkModal = styled(DarkModalContainer)`
  position: relative;
  z-index: 1;
  bottom: 50%;
  right: 180px;
`;

const DeleteHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .delete-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
`;

function RoleInfo({ id, color, name, numMember }) {
  const moreModalRef = useRef();
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);
  const setIsRoleSettingMode = useSetRecoilState(isRoleSettingModeState);
  const setSelectedRole = useSetRecoilState(selectedRoleState);

  useOutsideClick(moreModalRef, () => {
    setIsMoreModalOpen(false);
  });

  return (
    <Container>
      <Role
        onClick={() => {
          setIsRoleSettingMode(true);
          setSelectedRole({ id, name });
        }}
      >
        <RoleIconHolder style={{ color }}>
          <RiShieldUserFill />
        </RoleIconHolder>
        <RoleName>{name}</RoleName>
      </Role>

      <NumMember
        onClick={() => {
          setIsRoleSettingMode(true);
          setSelectedRole({ id, name });
        }}
      >
        <div className="text">{numMember}</div>
        <NumMemberIconHolder>
          <BsPersonFill />
        </NumMemberIconHolder>
      </NumMember>

      <ButtonContainer>
        <Button
          className="edit-button button"
          onClick={() => {
            setIsRoleSettingMode(true);
            setSelectedRole({ id, name });
          }}
        >
          <ButtonIcon>
            <RiPencilFill />
          </ButtonIcon>
        </Button>

        <Button
          className="more-button button"
          onClick={() => {
            setIsMoreModalOpen(true);
          }}
        >
          <ButtonIcon>
            <RiMoreFill />
          </ButtonIcon>
          {isMoreModalOpen && (
            <DarkModal ref={moreModalRef}>
              <DarkModalButton strict>
                <DeleteHolder>
                  <p>삭제</p>
                  <div className="delete-icon">
                    <RiDeleteBin6Fill />
                  </div>
                </DeleteHolder>
              </DarkModalButton>
            </DarkModal>
          )}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

RoleInfo.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  numMember: PropTypes.number,
};

RoleInfo.defaultProps = {
  id: '',
  color: '#B9BBBE',
  name: '',
  numMember: 0,
};

export default RoleInfo;
