import React, { useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
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

  &.checked {
    background-color: ${(props) => props.theme.color.blue};
  }
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

function AddMemberRow({ profile, name, code }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <Checkbox
        className={isChecked && 'checked'}
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      >
        {isChecked && <BsCheck2 />}
      </Checkbox>
      <Label>
        <img
          className="member-profile"
          src={
            profile ||
            'data:image/png;base64,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'
          }
          alt="member-profile"
        />
        <span className="member-name">{name}</span>
        <span className="member-id">{code}</span>
      </Label>
    </Container>
  );
}

AddMemberRow.propTypes = {
  profile: PropTypes.string,
  name: PropTypes.string,
  code: PropTypes.string,
};

AddMemberRow.defaultProps = {
  profile: null,
  name: '',
  code: '',
};

export default React.memo(AddMemberRow);
