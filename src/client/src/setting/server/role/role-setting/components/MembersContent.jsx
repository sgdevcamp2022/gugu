import React from 'react';
import styled from 'styled-components';
import SearchBar from '../../../../../common/components/SearchBar';
import AddMemberBtn from './AddMemberBtn';
import MemberRow from './MemberRow';

const SearchContainer = styled.div`
  height: 34px;
  padding-bottom: 16px;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`;

function MembersContent() {
  const members = [
    { name: '경주원', id: '경주원#1111' },
    { name: '경주원', id: '경주원#1111' },
    { name: '경주원', id: '경주원#1111' },
    { name: '경주원', id: '경주원#1111' },
  ];

  return (
    <>
      <SearchContainer>
        <SearchBar
          containerStyle={{ padding: '1px' }}
          inputStyle={{ padding: '8px' }}
          fontSize="16px"
          placeholder="멤버 검색하기"
        />
        <AddMemberBtn />
      </SearchContainer>

      {members.map((member) => (
        <MemberRow key={member.id} name={member.name} id={member.id} />
      ))}
    </>
  );
}

export default MembersContent;
