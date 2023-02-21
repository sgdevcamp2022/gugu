import React from 'react';
import styled from 'styled-components';
import ServerIcon from './ServerIcon';
import CreateServerBtn from './CreateServerBtn';

const Container = styled.div`
  padding-top: 12px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: ${(props) => props.theme.color.inputBg};
`;

function UserSideBar() {
  const serverList = [
    { src: null, name: '규봉이', id: '1' },
    {
      src: 'https://images.unsplash.com/photo-1605244863941-3a3ed921c60d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vZGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      name: '규순이',
      id: '2',
    },
  ];

  return (
    <Container>
      {serverList.map((server) => (
        <ServerIcon
          key={server.id}
          src={server.src}
          serverName={server.name}
          serverId={server.id}
        />
      ))}
      <CreateServerBtn />
    </Container>
  );
}

export default UserSideBar;
