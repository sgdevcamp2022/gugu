import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { HiChevronDown } from 'react-icons/hi';
import { AiFillCheckCircle } from 'react-icons/ai';
import useOutsideClick from '../../../hooks/useOutsideClick';
import SearchBar from '../../../layout/SearchBar';

const Container = styled.div`
  width: 100%;
  margin: 30px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.theme.color.secondaryText};
  font-size: 14px;
`;

const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoleBox = styled.div`
  margin-right: 5px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectedRole = styled.div`
  margin-left: 10px;
`;

const RoleSelectOpenBtn = styled(HiChevronDown)`
  margin: 0 2px;
  cursor: pointer;
`;

const RoleModal = styled.div`
  width: 240px;
  height: 290px;
  padding: 8px;

  position: absolute;
  z-index: 1;
  top: calc(100% + 8px);
  left: 0;

  box-shadow: ${(props) => props.theme.boxShadow.dark};
  background-color: ${(props) => props.theme.color.primaryBg};
  border-radius: 3px;
`;

const RoleList = styled.div`
  width: 100%;
  padding: 8px 0;
`;

const Role = styled.div`
  margin-bottom: 4px;
  padding: 10px 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  border-radius: 3px;

  &:hover {
    background-color: ${(props) => props.theme.color.inputHoverBg};
  }
`;

const RoleIcon = styled(AiFillCheckCircle)`
  visibility: ${(props) => (props.value === 'selected' ? 'visible' : 'hidden')};
  color: rgb(185, 187, 190);
`;

function NavBar() {
  const roleModalRef = useRef();
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

  const roleArray = [
    { name: '@everyone', color: 'yellow' },
    { name: '프론트엔드', color: 'green' },
    { name: '백엔드', color: 'orange' },
  ];

  useOutsideClick(roleModalRef, () => {
    setIsRoleModalOpen(false);
  });

  return (
    <Container>
      <div>멤버 4명</div>
      <RightBox>
        <RoleBox>
          <span>역할 표시:</span>
          <SelectedRole>@everyone</SelectedRole>
          <RoleSelectOpenBtn
            onClick={() => {
              setIsRoleModalOpen(true);
            }}
          />
          {isRoleModalOpen && (
            <RoleModal ref={roleModalRef}>
              <SearchBar
                sx={{ margin: '1px', padding: '8px' }}
                fontSize="16px"
                placeholder="역할 검색"
              />
              <RoleList>
                {roleArray.map((role) => (
                  <Role style={{ color: role.color }}>
                    <p>{role.name}</p>
                    <RoleIcon value="selected" />
                  </Role>
                ))}
              </RoleList>
            </RoleModal>
          )}
        </RoleBox>
        <SearchBar
          sx={{ margin: '1px', padding: '4px' }}
          fontSize="14px"
          placeholder="검색하기"
        />
      </RightBox>
    </Container>
  );
}

export default NavBar;
