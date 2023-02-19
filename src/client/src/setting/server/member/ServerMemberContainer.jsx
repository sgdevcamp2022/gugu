import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import MemberInfoContainer from './components/MemberInfoContainer';
import Heading3 from '../../common/components/Heading3';
import Content from '../../common/components/Content';

const Divider = styled.div`
  margin-top: 20px;
  border-top: ${(props) => props.theme.border.primary};
`;

function ServerMemberContainer() {
  const memberInfoArray = [
    {
      src: null,
      name: 'blackbean99',
      id: '@blackbean99#1231',
      roleArray: [{ name: '백엔드', color: 'orange' }],
    },
    {
      src: null,
      name: '경주원',
      id: '@경주원#1231',
      roleArray: [{ name: '프론트엔드', color: 'green' }],
    },
    {
      src: null,
      name: '김정인',
      id: '@주머니알#1231',
      roleArray: [{ name: '백엔드', color: 'orange' }],
    },
    {
      src: null,
      name: '이윤성',
      id: '@이윤성#1231',
      roleArray: null,
    },
  ];

  return (
    <Content>
      <Heading3>서버 멤버</Heading3>
      <NavBar />
      <Divider />
      {memberInfoArray.map((info) => (
        <MemberInfoContainer
          key={info.name}
          src={info.src}
          name={info.name}
          id={info.id}
          roleArray={info.roleArray}
        />
      ))}
    </Content>
  );
}

export default ServerMemberContainer;
