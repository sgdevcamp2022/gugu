import React from 'react';
import styled from 'styled-components';
import ContentCategory from './ContentCategory';

const Container = styled.div`
  padding: 0 12px;
  overflow-y: scroll;
`;

function ServerSideBarContent() {
  const categoryInfo = [
    {
      id: '1',
      name: '채팅 채널',
      channels: [
        {
          type: 'text',
          id: '11',
          name: '일반',
        },
      ],
    },
    {
      id: '2',
      name: '음성 채널',
      channels: [
        {
          type: 'voice',
          id: '21',
          name: 'GuGu 회의방',
        },
        {
          type: 'voice',
          id: '21',
          name: 'GuGu 놀이터',
        },
      ],
    },
    {
      id: '3',
      name: '나의 카테고리',
      channels: [
        {
          type: 'text',
          id: '31',
          name: '나만의 채널!!',
        },
      ],
    },
  ];

  console.log(categoryInfo);

  return (
    <Container>
      {categoryInfo.map((category) => (
        <ContentCategory
          key={category.id}
          name={category.name}
          channels={category.channels}
        />
      ))}
    </Container>
  );
}

export default ServerSideBarContent;
