import React from 'react';
import styled from 'styled-components';
import Content from '../../common/components/Content';
import Heading3 from '../../../layout/Heading3';
import InviteRow from './components/InviteRow';

const Description = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  color: ${(props) => props.theme.color.secondaryText};
  border-bottom: ${(props) => props.theme.border.primary};
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 2fr;
  align-items: center;

  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.color.secondaryText};

  .text-align-left {
    text-align: left;
  }

  .text-align-right {
    text-align: right;
  }
`;

function ServerInvitationContainer() {
  const invitations = [
    {
      inviterName: '경주원',
      inviterCode: '#1111',
      invitationCode: 'df2mfi1y',
      numInvitationUses: '0',
      invitationEndTime: new Date('2023-03-01'),
    },
    {
      inviterName: '김정인',
      inviterCode: '#2222',
      invitationCode: 'df2ds1y',
      numInvitationUses: '0',
      invitationEndTime: new Date('2023-04-01'),
    },
  ];
  return (
    <Content>
      <Heading3>초대</Heading3>
      <Description>
        활성화된 모든 초대 링크 목록이에요. 이 중에서 취소할 수 있어요.
      </Description>
      <TableHeader>
        <div className="label text-align-left">초대자</div>
        <div className="label text-align-left">초대 코드</div>
        <div className="label text-align-right">사용 횟수</div>
        <div className="label text-align-right">남은 시간</div>
      </TableHeader>

      {invitations.map((invite) => (
        <InviteRow
          key={invite.invitationCode}
          inviterName={invite.inviterName}
          inviterCode={invite.inviterCode}
          invitationCode={invite.invitationCode}
          numInvitationUses={invite.numInvitationUses}
          invitationEndTime={invite.invitationEndTime}
        />
      ))}
    </Content>
  );
}

export default ServerInvitationContainer;
