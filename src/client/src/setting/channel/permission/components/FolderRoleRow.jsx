import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { RiShieldUserFill } from 'react-icons/ri';

const Container = styled.div`
  padding: 0 4px 16px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .icon {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .role-name {
    margin-left: 8px;
    font-size: 14px;
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

function FolderRoleRow({ color, name }) {
  return (
    <Container>
      <div className="icon" style={{ color }}>
        <RiShieldUserFill />
      </div>
      <div className="role-name">{name}</div>
    </Container>
  );
}

FolderRoleRow.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
};

FolderRoleRow.defaultProps = {
  color: 'grey',
  name: '새 역할',
};

export default React.memo(FolderRoleRow);
