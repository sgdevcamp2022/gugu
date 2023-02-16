import React from 'react';
import styled from 'styled-components';
import { IoCloseCircle } from 'react-icons/io5';
import { PropTypes } from 'prop-types';

const Container = styled.div`
  height: 40px;
  padding: 4px 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.color.hoverBg};
    border-radius: 3px;
  }
`;

const MemberDetails = styled.div`
  display: flex;
  justify-content: flex-start;
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
    color: ${(props) => props.theme.color.primaryText};
    font-weight: 600;
  }

  .member-id {
    margin-left: 4px;
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

const RemoveButtonContainer = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.secondaryText};
  font-size: 20px;
`;

function MemberRow({ name, id }) {
  return (
    <Container>
      <MemberDetails>
        <img
          className="member-profile"
          src="https://image.petmd.com/files/styles/863x625/public/2023-01/toy-poodle.jpg"
          alt="profile"
        />
        <span className="member-name">{name}</span>
        <span className="member-id">{id}</span>
      </MemberDetails>
      <RemoveButtonContainer>
        <IoCloseCircle
          onClick={() => {
            // remove member
          }}
        />
      </RemoveButtonContainer>
    </Container>
  );
}

MemberRow.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};

MemberRow.defaultProps = {
  name: '',
  id: '',
};

export default React.memo(MemberRow);
