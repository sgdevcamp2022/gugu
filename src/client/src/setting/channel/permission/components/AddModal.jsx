import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import SearchBar from '../../../../common/components/SearchBar';
import Label from '../../../../layout/Label';
import AddRoleRow from './AddRoleRow';
import AddMemberRow from '../../../common/components/AddMemberRow';
import roleListState from '../../../../recoil/setting/common/roleListState';

const AddModalHeader = styled.div`
  margin-top: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.color.primaryText};
  }
  .channel-name {
    font-size: 16px;
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

const AddModalContent = styled.div`
  .search-box {
    padding: 0 16px 12px;

    .description {
      font-size: 12px;
      color: ${(props) => props.theme.color.secondaryText};
    }
  }
`;

const RoleMemberList = styled.div`
  height: 244px;
  padding: 0 12px;
  overflow-y: scroll;
`;

const AddModalFooter = styled.div`
  height: 32px;
  padding: 16px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: ${(props) => props.theme.color.secondaryBg};
  border-radius: 0 0 5px 5px;

  .cancel-button,
  .add-button {
    width: 28px;
    height: 100%;
    padding: 2px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  }

  .cancel-button {
    :hover {
      text-decoration: underline;
    }
  }

  .add-button {
    margin-left: 8px;
    background-color: ${(props) => props.theme.color.blue};
    border-radius: 3px;
    transition: background-color 0.2s ease-in-out;

    :hover {
      background-color: ${(props) => props.theme.color.darkBlue};
    }
  }
`;

function AddModal({ setIsAddModalOpen }) {
  const [memberList, setMemberList] = useState([]);
  const roleList = useRecoilValue(roleListState);

  const memberInfoArray = [
    {
      src: null,
      name: '이서현',
      id: '@이서현#1111',
      roleArray: [{ name: '백엔드', color: 'orange' }],
    },
    {
      src: null,
      name: '경주원',
      id: '@경주원#1112',
      roleArray: [{ name: '프론트엔드', color: 'green' }],
    },
    {
      src: null,
      name: '김정인',
      id: '@김정인#1113',
      roleArray: [{ name: '백엔드', color: 'orange' }],
    },
    {
      src: null,
      name: '이윤성',
      id: '@이윤성#1114',
      roleArray: null,
    },
  ];

  useEffect(() => {
    setMemberList([...memberInfoArray]);
  }, []);
  return (
    <>
      <AddModalHeader>
        <h1>멤버 또는 역할 추가</h1>
        <div className="channel-name">#일반</div>
      </AddModalHeader>

      <AddModalContent>
        <div className="search-box">
          <SearchBar
            placeholder="예. 관리자, @wumpus"
            containerStyle={{
              height: '34px',
              marginBottom: '8px',
              padding: '1px',
            }}
            inputStyle={{
              margin: '1px',
              padding: ' 0 8px',
            }}
            fontSize="16px"
          />
          <div className="description">
            개별 멤버를 @ 뒤에 추가하거나 역할 이름을 입력하세요.
          </div>
        </div>

        <RoleMemberList>
          {roleList.length !== 0 && (
            <div className="role-list">
              <Label>역할</Label>
              {roleList.map((role) => (
                <AddRoleRow
                  key={role.name}
                  color={role.color}
                  name={role.name}
                />
              ))}
            </div>
          )}
          {memberList.length !== 0 && (
            <div className="member-list">
              <Label>멤버</Label>
              {memberList.map((member) => (
                <AddMemberRow
                  key={member.name}
                  profile={member.src}
                  name={member.name}
                  code={member.id}
                />
              ))}
            </div>
          )}
        </RoleMemberList>
      </AddModalContent>

      <AddModalFooter>
        <div
          role="presentation"
          className="cancel-button"
          onClick={() => {
            setIsAddModalOpen(false);
          }}
        >
          취소
        </div>
        <div role="presentation" className="add-button">
          추가
        </div>
      </AddModalFooter>
    </>
  );
}

AddModal.propTypes = {
  setIsAddModalOpen: PropTypes.func,
};

AddModal.defaultProps = {
  setIsAddModalOpen: () => {},
};

export default React.memo(AddModal);
