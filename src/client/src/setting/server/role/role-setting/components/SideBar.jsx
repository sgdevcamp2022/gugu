import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { MdArrowBack } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

import SideBarRoleBtn from './SideBarRoleBtn';
import isRoleSettingModeState from '../../../../../recoil/atom/setting/server/isRoleSettingModeState';
import roleListState from '../../../../../recoil/atom/setting/server/roleListState';
import EVERYONE from '../../../../constant/EVERYONE';

const Container = styled.div`
  height: calc(100% + 120px);

  position: relative;
  top: -60px;

  border-right: ${(props) => props.theme.border.primary};
`;

const TopBar = styled.div`
  width: 100%;
  padding: 60px 8px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  left: -24px;

  color: ${(props) => props.theme.color.secondaryText};
`;

const BackButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.primaryText};
  }

  .icon {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }

  p {
    height: 100%;
    margin-left: 8px;
    font-size: 16px;
    font-weight: 600;
  }
`;

const PlusButton = styled.div`
  width: 20px;
  height: 20px;

  font-size: 20px;
  color: ${(props) => props.theme.color.primaryText};
  cursor: pointer;
`;

function SideBar() {
  const setIsRoleSettingMode = useSetRecoilState(isRoleSettingModeState);
  const roleList = useRecoilValue(roleListState);

  return (
    <Container>
      <TopBar>
        <BackButton
          onClick={() => {
            setIsRoleSettingMode(false);
          }}
        >
          <div className="icon">
            <MdArrowBack />
          </div>
          <p>뒤로 가기</p>
        </BackButton>
        <PlusButton>
          <AiOutlinePlus />
        </PlusButton>
      </TopBar>

      {roleList.map((role) => (
        <SideBarRoleBtn id={role.id} color={role.color} name={role.name} />
      ))}
      <SideBarRoleBtn id={EVERYONE.ID} color="#99aab5" name="@everyone" />
    </Container>
  );
}

export default React.memo(SideBar);
