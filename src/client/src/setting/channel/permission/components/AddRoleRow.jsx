import React, { useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { BsCheck2 } from 'react-icons/bs';
import { RiShieldUserFill } from 'react-icons/ri';

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
  width: 100%;
  padding-left: 16px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 14px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
  }

  .role-name {
    margin-left: 8px;
    margin-right: 4px;
    color: ${(props) => props.theme.color.primaryText};
  }

  .description {
    margin-left: auto;
    font-size: 12px;
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

function AddRoleRow({ color, name }) {
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
        <div className="icon" style={{ color }}>
          <RiShieldUserFill />
        </div>
        <div className="role-name">{name}</div>
        <div className="description">역할</div>
      </Label>
    </Container>
  );
}

AddRoleRow.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
};

AddRoleRow.defaultProps = {
  color: 'grey',
  name: '새 역할',
};

export default AddRoleRow;
