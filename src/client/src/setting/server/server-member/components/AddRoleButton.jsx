import React, { useRef, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import styled from 'styled-components';
import SearchBar from '../../../../common/components/SearchBar';
import useOutsideClick from '../../../../hooks/useOutsideClick';

const Container = styled.div`
  width: 14px;
  height: 14px;
  padding: 4px 5px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.color.primaryText};
  background-color: ${(props) => props.theme.color.inputBg};
  border-radius: 3px;
  cursor: pointer;
`;

const RoleModal = styled.div`
  width: 250px;
  height: 290px;
  padding: 8px;
  visibility: visible;

  position: absolute;
  z-index: 1;
  top: calc(100% + 8px);

  background-color: ${(props) => props.theme.color.primaryBg};
  border: ${(props) => props.theme.border.primary};
  border-radius: 3px;
`;

const RoleList = styled.div`
  margin-top: 8px;
  padding: 8px 0;
`;

const Role = styled.div`
  height: 16px;
  margin-bottom: 4px;
  padding: 10px 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 16px;
  color: ${(props) => props.theme.color.secondaryText};
  border-radius: 3px;

  &:hover {
    background-color: ${(props) => props.theme.color.hoverBg};
    color: ${(props) => props.theme.color.primaryText};
  }

  div {
    width: 12px;
    height: 12px;
    margin: 0 8px 0 4px;
    border-radius: 1000px;
  }
`;

function AddRoleButton() {
  const roleModalRef = useRef();
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

  const searchRoleArray = [
    { name: '@everyone', color: 'yellow' },
    { name: '프론트엔드', color: 'green' },
    { name: '백엔드', color: 'orange' },
  ];

  useOutsideClick(roleModalRef, () => {
    setIsRoleModalOpen(false);
  });

  return (
    <Container
      onClick={() => {
        setIsRoleModalOpen(true);
      }}
    >
      <IoMdAdd />
      {isRoleModalOpen && (
        <RoleModal ref={roleModalRef}>
          <SearchBar
            inputStyle={{ margin: '1px', padding: '8px' }}
            fontSize="16px"
            placeholder="역할"
          />
          <RoleList>
            {searchRoleArray.map((role) => (
              <Role>
                <div style={{ backgroundColor: role.color }} />
                <p>{role.name}</p>
              </Role>
            ))}
          </RoleList>
        </RoleModal>
      )}
    </Container>
  );
}

export default AddRoleButton;
