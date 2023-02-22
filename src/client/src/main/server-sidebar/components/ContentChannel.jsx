import React, { useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { useSetRecoilState } from 'recoil';
import { HiVolumeUp } from 'react-icons/hi';
import { BiHash } from 'react-icons/bi';
import { BsPersonPlusFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';

import BackdropModal from '../../../common/components/BackdropModal';
import InviteModal from './InviteModal';
import privatePageType from '../../../recoil/common/privatePageType';
import settingTypeState from '../../../recoil/setting/common/settingTypeState';
import PRIVATE_PAGE_TYPES from '../../../common/constant/PRIVATE_PAGE_TYPES';
import SETTING_TYPES from '../../../setting/constant/SETTING_TYPES';

const Container = styled.div`
  height: 34px;
  margin-top: 5px;
  padding: 0 8px;

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  color: ${(props) => props.theme.color.secondaryText};

  border-radius: 3px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.color.primaryBg};
  }

  :hover .channel-name {
    color: ${(props) => props.theme.color.primaryText};
  }
`;

const LabelBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .type-icon {
    margin-right: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  .channel-name {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .button {
    margin-left: 6px;
    padding: 6px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;

    :hover {
      color: ${(props) => props.theme.color.primaryText};
    }
  }
`;

function ContentChannel({ type, name }) {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const setPrivatePageType = useSetRecoilState(privatePageType);
  const setSettingsType = useSetRecoilState(settingTypeState);
  return (
    <>
      <Container>
        <LabelBox>
          <div className="type-icon">
            {type === 'voice' ? <HiVolumeUp /> : <BiHash />}
          </div>
          <div className="channel-name">{name}</div>
        </LabelBox>
        <ButtonBox>
          <div
            className="create-invite-code button"
            role="presentation"
            onClick={() => {
              setIsInviteModalOpen(true);
            }}
          >
            <BsPersonPlusFill />
          </div>
          <div
            className="channel-settings button"
            role="presentation"
            onClick={() => {
              setPrivatePageType(PRIVATE_PAGE_TYPES.SETTING);
              setSettingsType(SETTING_TYPES.CHANNEL);
            }}
          >
            <IoMdSettings />
          </div>
        </ButtonBox>
      </Container>

      <BackdropModal open={isInviteModalOpen} setOpen={setIsInviteModalOpen}>
        <InviteModal />
      </BackdropModal>
    </>
  );
}

ContentChannel.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContentChannel;
