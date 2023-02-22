import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import Heading3 from '../../../layout/Heading3';
import Label from '../../../layout/Label';

const ModalLayout = styled.div`
  padding: 16px;
`;

const CategoryInput = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  background-color: ${(props) => props.theme.color.inputBg};
  color: ${(props) => props.theme.color.primaryText};
  font-size: 16px;
  border-radius: 3px;
`;

const Footer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${(props) => props.theme.color.secondaryBg};
  border-radius: 0 0 3px 3px;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  }

  .cancel {
    margin-right: 20px;
    &:hover {
      text-decoration: underline;
    }
  }

  .create {
    width: 90px;
    height: 34px;
    padding: 2px 16px;
    background-color: ${(props) => props.theme.color.blue};
    border-radius: 3px;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.color.darkBlue};
    }
  }
`;
function CreateCategoryModal({ setIsModalOpen }) {
  return (
    <>
      <ModalLayout>
        <Heading3>카테고리 만들기</Heading3>
        <Label>카테고리 이름</Label>
        <CategoryInput placeholder="새로운 카테고리" />
      </ModalLayout>
      <Footer>
        <div
          className="cancel button"
          role="presentation"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          취소
        </div>
        <div role="presentation" className="create button">
          카테고리 만들기
        </div>
      </Footer>
    </>
  );
}

CreateCategoryModal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};

export default CreateCategoryModal;
