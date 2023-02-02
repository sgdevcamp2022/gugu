import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import { useRecoilState } from 'recoil';
import selectedRoleState from '../../../recoil/atom/selectedRoleState';

const RoleButton = styled.div`
  height: 22px;
  margin-right: 16px;
  padding: 6px 10px;
  color: ${(props) => props.theme.color.primaryText};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-radius: 3px;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      background-color: #4f545c99;
    `}

  .name {
    font-size: 14px;
  }
`;

const Icon = styled.div`
  width: 12px;
  height: 12px;
  margin: 0 4px;
  border-radius: 1000px;
`;

const RoleName = styled.div`
  padding-left: 4px;
  font-size: 14px;
`;

function SideBarRoleBtn({ id, color, name }) {
  const [selectedRole, setSelectedRole] = useRecoilState(selectedRoleState);

  return (
    <RoleButton
      selected={id === selectedRole.id}
      onClick={useCallback(() => {
        setSelectedRole({ id, name });
      }, [id])}
    >
      <Icon style={{ backgroundColor: color }} />
      <RoleName>{name}</RoleName>
    </RoleButton>
  );
}

SideBarRoleBtn.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
};

SideBarRoleBtn.defaultProps = {
  id: '',
  name: '',
  color: '',
};

export default React.memo(SideBarRoleBtn);
