import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';
import styled from 'styled-components';

const Container = styled.div`
  height: 40px;
  padding: 16px 24px 16px 16px;

  display: grid;
  align-items: center;
  grid-template-columns: 32px 1fr 1fr;

  background-color: ${(props) => props.theme.color.secondaryBg};
  border-radius: 3px;

  color: ${(props) => props.theme.color.secondaryText};

  &:hover {
    background-color: rgba(79, 84, 92, 0.4);
  }
`;

const PeopleIconHolder = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  background-color: ${(props) => props.theme.color.primaryBg};
  border-radius: 10000px;
`;

const TextBox = styled.div`
  margin-left: 16px;

  div {
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 12px;
  }
`;

const ChevronHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 24px;
`;

function DefaultRoleButton() {
  return (
    <Container>
      <PeopleIconHolder>
        <BsFillPeopleFill />
      </PeopleIconHolder>
      <TextBox>
        <div>기본 권한</div>
        <p>@everyone · 모든 서버 멤버에 적용</p>
      </TextBox>
      <ChevronHolder>
        <BiChevronRight />
      </ChevronHolder>
    </Container>
  );
}

export default DefaultRoleButton;
