import React from 'react';
import styled from 'styled-components';
import { BsCheck2 } from 'react-icons/bs';

const Container = styled.div`
  padding: 8px 6px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 3px;

  &:hover {
    background-color: ${(props) => props.theme.color.hoverBg};
  }

  cursor: pointer;
`;

const Checkbox = styled.div`
  width: 18px;
  height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${(props) => props.theme.color.secondaryText};
  border-radius: 3px;
  font-size: 18px;

  background-color: ${(props) => props.theme.color.blue};
`;

const Label = styled.div`
  padding-left: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;

  .member-profile {
    width: 24px;
    height: 24px;
    object-fit: cover;
    border-radius: 1000px;
  }

  .member-name {
    margin-left: 8px;
    margin-right: 4px;
    color: ${(props) => props.theme.color.primaryText};
  }

  .member-id {
    margin-left: 4px;
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

function AddMemberRow() {
  return (
    <Container>
      <Checkbox>
        <BsCheck2 />
      </Checkbox>
      <Label>
        <img
          className="member-profile"
          src="https://image.petmd.com/files/styles/863x625/public/2023-01/toy-poodle.jpg"
          alt="member-profile"
        />
        <span className="member-name">이윤성</span>
        <span className="member-id">이윤성#1111</span>
      </Label>
    </Container>
  );
}

export default React.memo(AddMemberRow);
