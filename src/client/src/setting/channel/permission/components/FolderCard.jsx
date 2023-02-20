import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import FolderHeader from './FolderHeader';
import Label from '../../../common/components/Label';
import roleListState from '../../../../recoil/setting/common/roleListState';
import FolderRoleRow from './FolderRoleRow';
import FolderMemberRow from './FolderMemberRow';

const RoleMemberList = styled.div`
  padding: 0 16px 8px;
`;

const RoleList = styled.div`
  margin: 16px 0;
  border-bottom: ${(props) => props.theme.border.primary};
`;

function FolderCard() {
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

  return (
    <>
      <FolderHeader />
      <RoleMemberList>
        <RoleList>
          <Label>역할</Label>
          {roleList.map((role) => (
            <FolderRoleRow name={role.name} color={role.color} />
          ))}
        </RoleList>
        <Label>멤버</Label>
        {memberInfoArray.map((member) => (
          <FolderMemberRow
            name={member.name}
            code={member.id}
            profile={member.src}
          />
        ))}
      </RoleMemberList>
    </>
  );
}

export default FolderCard;
