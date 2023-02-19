import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { useSetRecoilState } from 'recoil';
import { RiShieldUserFill, RiPencilFill, RiMoreFill } from 'react-icons/ri';
import { BsPersonFill } from 'react-icons/bs';

import isRoleSettingModeState from '../../../../../recoil/setting/server/isRoleSettingModeState';
import selectedRoleState from '../../../../../recoil/setting/server/selectedRoleState';
import RoleDeleteBtn from '../../common/components/RoleDeleteBtn';
import roleSettingTypeState from '../../../../../recoil/setting/server/roleSettingTypeState';
import ROLE_SETTING_TYPES from '../../../../constant/ROLE_SETTING_TYPES';

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

  border-radius: 1000px;

  &:hover {
    color: ${(props) => props.theme.color.primaryText};
  }
`;

function RoleInfoRow({ id, color, name, numMember }) {
  const setIsRoleSettingMode = useSetRecoilState(isRoleSettingModeState);
  const setSelectedRole = useSetRecoilState(selectedRoleState);
  const setRoleSettingType = useSetRecoilState(roleSettingTypeState);

  return (
    <Container>
      <Role
        onClick={() => {
          setIsRoleSettingMode(true);
          setSelectedRole({ id, name });
          setRoleSettingType(ROLE_SETTING_TYPES.DISPLAY);
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
          setRoleSettingType(ROLE_SETTING_TYPES.MEMBERS);
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
            setRoleSettingType(ROLE_SETTING_TYPES.DISPLAY);
          }}
        >
          <ButtonIcon>
            <RiPencilFill />
          </ButtonIcon>
        </Button>

        <Button
          className="more-button button"
          onClick={() => {
            setSelectedRole({ id, name });
          }}
        >
          <RoleDeleteBtn>
            <ButtonIcon>
              <RiMoreFill />
            </ButtonIcon>
          </RoleDeleteBtn>
        </Button>
      </ButtonContainer>
    </Container>
  );
}

RoleInfoRow.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  numMember: PropTypes.number,
};

RoleInfoRow.defaultProps = {
  id: '',
  color: '#B9BBBE',
  name: '',
  numMember: 0,
};

export default RoleInfoRow;
