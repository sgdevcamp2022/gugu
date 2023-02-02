import React from 'react';
import styled from 'styled-components';

import Content from '../../../common/components/Content';
import Heading3 from '../../../common/components/Heading3';
import DefaultRoleButton from './components/DefaultRoleButton';
import SearchBar from '../../../../common/components/SearchBar';
import RoleInfo from './components/RoleInfo';

const Description = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  color: ${(props) => props.theme.color.secondaryText};
`;

const SearchNavBar = styled.div`
  width: 100%;
  height: 34px;
  margin-top: 32px;

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

const MakeRoleButton = styled.div`
  width: 66px;
  height: 100%;
  margin-left: 16px;
  padding: 2px 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.color.blue};
  border-radius: 3px;

  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.color.primaryText};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.darkBlue};
  }
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
  const roleInfo = [
    {
      color: 'green',
      name: '프론트엔드',
      numMember: 2,
    },
    {
      color: 'orange',
      name: '백엔드',
      numMember: 2,
    },
  ];
  return (
    <Content>
      <Heading3>역할</Heading3>
      <Description>
        역할을 사용하면 서버 멤버를 그룹화하고 권한을 지정할 수 있어요.
      </Description>
      <DefaultRoleButton />
      <SearchNavBar>
        <SearchBar
          inputStyle={{ margin: '1px', padding: '0px 8px' }}
          containerStyle={{ height: '100%' }}
          fontSize="16px"
          placeholder="역할 검색"
        />
        <MakeRoleButton>역할 만들기</MakeRoleButton>
      </SearchNavBar>
      <Notification>
        멤버의 이름은 가장 높은 역할의 색상으로 표시돼요.
      </Notification>
      <RoleInfoTableHeader>
        <div className="role">역할 - 2</div>
        <div className="member">멤버</div>
        <div className="button-space" />
      </RoleInfoTableHeader>
      {roleInfo.map((info) => (
        <RoleInfo
          key={info.name}
          name={info.name}
          color={info.color}
          numMember={info.numMember}
        />
      ))}
    </Content>
  );
}

export default RoleInfoContainer;
