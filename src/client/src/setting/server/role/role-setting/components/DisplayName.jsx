import React from 'react';
import styled from 'styled-components';
import Label from '../layout/Label';

const NameBox = styled.div`
  width: 100%;
  padding-bottom: 24px;
  border-bottom: ${(props) => props.theme.border.primary};
`;

const RoleNameInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.color.inputBg};
  color: ${(props) => props.theme.color.primaryText};
  font-size: 16px;
  font-weight: 400;

  border-radius: 3px;
`;

function DisplayName() {
  return (
    <NameBox>
      <Label>
        역할 이름 <span>*</span>
      </Label>
      <RoleNameInput />
    </NameBox>
  );
}

export default React.memo(DisplayName);
