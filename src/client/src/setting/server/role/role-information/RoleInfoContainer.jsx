import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import Content from '../../../common/components/Content';
import Heading3 from '../../../common/components/Heading3';
import DefaultRoleButton from './components/DefaultRoleButton';
import RoleInfo from './components/RoleInfo';
import roleListState from '../../recoil/atom/roleListState';
import SearchNavBar from './components/SearchNavBar';

const Description = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  color: ${(props) => props.theme.color.secondaryText};
`;

const Notification = styled.div`
  margin-top: 8px;
  color: ${(props) => props.theme.color.secondaryText};
  font-size: 14px;
`;

const RoleInfoTableHeader = styled.div`
  margin-top: 32px;
  padding-bottom: 8px;

  display: grid;
  grid-template-columns: 5fr 112px 4fr;

  font-size: 12px;
  color: ${(props) => props.theme.color.secondaryText};

  border-bottom: ${(props) => props.theme.border.primary};

  .member {
    margin-left: auto;
  }
`;

function RoleInfoContainer() {
  const roleList = useRecoilValue(roleListState);

  return (
    <Content>
      <Heading3>역할</Heading3>
      <Description>
        역할을 사용하면 서버 멤버를 그룹화하고 권한을 지정할 수 있어요.
      </Description>

      <DefaultRoleButton />

      <SearchNavBar />
      <Notification>멤버는 하나의 역할에만 속할 수 있어요.</Notification>

      <RoleInfoTableHeader>
        <div className="role">역할 - {roleList.length}</div>
        <div className="member">멤버</div>
        <div className="button-space" />
      </RoleInfoTableHeader>

      {roleList.map(
        (role) =>
          role.id !== '0' && (
            <RoleInfo
              key={role.id}
              id={role.id}
              name={role.name}
              color={role.color}
              numMember={role.numMember}
            />
          )
      )}
    </Content>
  );
}

export default RoleInfoContainer;
