import React, { useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { IoMdClose } from 'react-icons/io';
import RemainingTime from './RemainingTime';

const Container = styled.div`
  width: 100%;
  height: 62px;
  padding-right: 40px;

  position: relative;

  display: grid;
  grid-template-columns: 3fr 3fr 1fr 2fr;
  align-items: center;

  color: ${(props) => props.theme.color.secondaryText};
  font-size: 14px;

  .text-align-right {
    text-align: right;
  }
`;

const Inviter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .profile {
    width: 24px;
    height: 24px;
    object-fit: cover;
    border-radius: 1000px;
  }

  .username,
  .user-code {
    font-size: 16px;
  }

  .username {
    margin-left: 8px;
    color: ${(props) => props.theme.color.primaryText};
  }

  .user-code {
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

const DeleteBtn = styled.div`
  width: 24px;
  height: 24px;

  position: absolute;
  right: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.color.red};
  border-radius: 1000px;
  background-color: ${(props) => props.theme.color.primaryBg};
  box-shadow: ${(props) => props.theme.boxShadow.dark};

  cursor: pointer;
`;

function InviteRow({
  inviterName,
  inviterCode,
  invitationCode,
  numInvitationUses,
  invitationEndTime,
}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Inviter>
        <img
          className="profile"
          src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg"
          alt="profile"
        />
        <span className="username">{inviterName}</span>
        <span className="user-code">{inviterCode}</span>
      </Inviter>
      <div className="invite-code text-align-left">{invitationCode}</div>
      <div className="num-uses text-align-right">{numInvitationUses}</div>
      <RemainingTime invitationEndTime={invitationEndTime} />
      {isHover && (
        <DeleteBtn>
          <IoMdClose />
        </DeleteBtn>
      )}
    </Container>
  );
}

InviteRow.propTypes = {
  inviterName: PropTypes.string,
  inviterCode: PropTypes.string,
  invitationCode: PropTypes.string,
  numInvitationUses: PropTypes.string,
  invitationEndTime: PropTypes.object, // eslint-disable-line
};

InviteRow.defaultProps = {
  inviterName: '',
  inviterCode: '',
  invitationCode: '',
  numInvitationUses: '',
  invitationEndTime: new Date(),
};

export default React.memo(InviteRow);
