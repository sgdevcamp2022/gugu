import React from 'react';
import styled from 'styled-components';
import Label from '../../../layout/Label';

const ModalLayout = styled.div`
  padding: 16px;
`;

const InputWrapper = styled.div`
  height: 40px;

  display: grid;
  grid-template-columns: 1fr 75px;
  align-items: center;

  background-color: ${(props) => props.theme.color.inputBg};
  border-radius: 3px;

  input {
    padding: 10px;
    background-color: ${(props) => props.theme.color.inputBg};
    border-radius: 3px;
    color: ${(props) => props.theme.color.primaryText};
  }

  button {
    height: 32px;
    margin-right: 4px;
    padding: 2px 16px;
    background-color: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.primaryText};
    font-size: 14px;
    font-weight: 400;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    :hover {
      background-color: ${(props) => props.theme.color.darkBlue};
    }
  }
`;

function InviteModal() {
  return (
    <ModalLayout>
      <Label>친구에게 서버 초대 링크 전송하기</Label>
      <InputWrapper>
        <input type="text" readOnly value="EG3tr5mRh" />
        <button type="button">복사</button>
      </InputWrapper>
    </ModalLayout>
  );
}

export default InviteModal;
