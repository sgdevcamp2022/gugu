import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

const Container = styled.div`
  width: fit-content;
  height: 14px;
  padding: 4px;
  margin-right: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.color.inputBg};
  border-radius: 3px;

  color: ${(props) => props.theme.color.primaryText};
  font-size: 12px;

  .role-name {
    padding-left: 5px;
  }
`;

const Button = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 10000px;
  cursor: pointer;
`;

const CloseIcon = styled(IoMdClose)``;

function MemberRoleBtn({ roleName, color }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <Button style={color && { backgroundColor: color }}>
        {isHover && <CloseIcon />}
      </Button>
      <div className="role-name">{roleName}</div>
    </Container>
  );
}

MemberRoleBtn.propTypes = {
  roleName: PropTypes.string,
  color: PropTypes.string,
};

MemberRoleBtn.defaultProps = {
  roleName: '',
  color: undefined,
};

export default MemberRoleBtn;
