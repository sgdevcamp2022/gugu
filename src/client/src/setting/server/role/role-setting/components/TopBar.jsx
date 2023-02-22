import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RiMoreFill } from 'react-icons/ri';

import Heading3 from '../../../../../layout/Heading3';
import selectedRoleState from '../../../../../recoil/setting/server/selectedRoleState';
import RoleDeleteBtn from '../../common/components/RoleDeleteBtn';
import ROLE_SETTING_TYPES from '../../../../constant/ROLE_SETTING_TYPES';
import roleSettingTypeState from '../../../../../recoil/setting/server/roleSettingTypeState';
import EVERYONE from '../../../../constant/EVERYONE';

const Container = styled.div`
  margin-bottom: 16px;
  padding-bottom: 16px;
`;

const HeadingBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  visibility: ${(props) => (props.isEveryone ? 'hidden' : 'visible')};
`;

const DeleteIcon = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TapBar = styled.div`
  margin: 16px 0 -2px 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-bottom: 2px solid ${(props) => props.theme.color.border};
`;

const TapBarItem = styled.div`
  margin: 0 32px -2px 0;
  padding-bottom: 16px;

  position: relative;

  font-weight: 500;
  color: ${(props) => props.theme.color.secondaryText};

  ${(props) =>
    props.selected
      ? css`
          color: ${props.theme.color.primaryText};
          border-bottom: 2px solid ${props.theme.color.lightBlue};
        `
      : css`
          cursor: pointer;
          &:hover {
            color: ${props.theme.color.hoverText};
            border-bottom: 2px solid ${props.theme.color.darkBlue};
          }
        `}

  ${(props) =>
    props.isEveryone &&
    css`
      &#DISPLAY,
      &#MEMBERS {
        color: #4f545c;
        border-color: #4f545c;
        cursor: not-allowed;
      }
    `}
`;

function TopBar() {
  const selectedRole = useRecoilValue(selectedRoleState);
  const [roleSettingType, setRoleSettingType] =
    useRecoilState(roleSettingTypeState);

  useEffect(() => {
    if (selectedRole.id === EVERYONE.ID) {
      setRoleSettingType(ROLE_SETTING_TYPES.PERMISSIONS);
    }
  }, [selectedRole]);

  return (
    <Container>
      <HeadingBox>
        <Heading3>역할 수정 - {selectedRole.name}</Heading3>

        <ButtonContainer isEveryone={selectedRole.id === EVERYONE.ID}>
          <RoleDeleteBtn>
            <DeleteIcon>
              <RiMoreFill />
            </DeleteIcon>
          </RoleDeleteBtn>
        </ButtonContainer>
      </HeadingBox>

      <TapBar>
        {ROLE_SETTING_TYPES.ARRAY.map((type) => (
          <TapBarItem
            id={type}
            key={type}
            selected={roleSettingType === type}
            onClick={() => {
              setRoleSettingType(type);
            }}
            isEveryone={selectedRole.id === EVERYONE.ID}
          >
            {ROLE_SETTING_TYPES.KOREAN[type]}
          </TapBarItem>
        ))}
      </TapBar>
    </Container>
  );
}

export default React.memo(TopBar);
