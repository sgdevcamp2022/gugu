import React, { useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';
import { HiVolumeUp } from 'react-icons/hi';
import { BiHash } from 'react-icons/bi';

import Heading3 from '../../../layout/Heading3';
import Label from '../../../layout/Label';

const ModalLayout = styled.div`
  padding: 16px;
`;

const ChannelTypeButton = styled.div`
  height: 42px;
  padding: 10px 12px;
  margin: 15px 0;

  display: grid;
  grid-template-columns: 36px 1fr 24px;
  align-items: center;

  background-color: ${(props) => props.theme.color.secondaryBg};
  color: ${(props) => props.theme.color.secondaryText};
  border-radius: 3px;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #383c41;
  }

  &.selected {
    background-color: #42454b;
  }

  .icon {
    font-size: 24px;
  }

  .radio-label {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.color.primaryText};
  }

  .radio-label-description {
    margin-top: 4px;
    font-size: 14px;
  }

  .radio-bar-icon {
    font-size: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.selected .radio-bar-icon {
    color: ${(props) => props.theme.color.primaryText};
  }
`;

const NameInput = styled.input`
  width: calc(100% - 20px);
  height: 20px;
  padding: 10px;
  background-color: ${(props) => props.theme.color.inputBg};
  border-radius: 3px;
  font-size: 16px;
  color: ${(props) => props.theme.color.primaryText};
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
    width: 65px;
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

function CreateChannelModal({ setIsModalOpen }) {
  const [isTextType, setIsTextType] = useState(true);

  return (
    <>
      <ModalLayout>
        <Heading3>채널 만들기</Heading3>
        <Label>채널 유형</Label>

        <ChannelTypeButton
          className={isTextType && 'selected'}
          onClick={() => setIsTextType(true)}
        >
          <div className="icon">
            <BiHash />
          </div>
          <div>
            <div className="radio-label">Text</div>
            <div className="radio-label-description">
              메시지, 이미지, GIF, 이모지, 의견, 농담을 전송하세요
            </div>
          </div>
          <div className="radio-bar-icon">
            {isTextType ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
          </div>
        </ChannelTypeButton>

        <ChannelTypeButton
          className={!isTextType && 'selected'}
          onClick={() => setIsTextType(false)}
        >
          <div className="icon">
            <HiVolumeUp />
          </div>
          <div>
            <div className="radio-label">Voice</div>
            <div className="radio-label-description">
              메시지, 이미지, GIF, 이모지, 의견, 농담을 전송하세요
            </div>
          </div>
          <div className="radio-bar-icon">
            {!isTextType ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
          </div>
        </ChannelTypeButton>

        <Label>채널 이름</Label>
        <NameInput placeholder="새로운 채널" />
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
          채널 만들기
        </div>
      </Footer>
    </>
  );
}

CreateChannelModal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};

export default CreateChannelModal;
