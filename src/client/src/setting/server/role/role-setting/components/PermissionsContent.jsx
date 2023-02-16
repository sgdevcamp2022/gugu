import React from 'react';
import styled from 'styled-components';
import Label from '../layout/Label';
import SearchBar from '../../../../../common/components/SearchBar';
import PermissionRowContainer from './PermissionRowContainer';
import PERMISSIONS from '../constant/PERMISSIONS';

const Container = styled.div`
  width: 100%;
`;

const LabelContainer = styled.div`
  width: 100%;
  margin-bottom: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClearButton = styled.div`
  margin-bottom: 8px;
  color: #00aff4;
  font-size: 14px;
`;

const ScrollableBox = styled.div`
  width: 100%;
  height: calc(100vh - 120px - 123px - 32px);
  overflow-y: scroll;
`;

function PermissionsContent() {
  return (
    <Container>
      <SearchBar
        containerStyle={{ width: '100%', marginBottom: '32px' }}
        inputStyle={{
          width: '100%',
          height: '30px',
          margin: '1px',
          padding: '0 8px',
        }}
        fontSize="16px"
        placeholder="권한 검색"
      />

      <ScrollableBox>
        <LabelContainer>
          <Label>서버 일반 권한</Label>
          <ClearButton type="button">권한 지우기</ClearButton>
        </LabelContainer>

        {PERMISSIONS.GENERAL_KEY.map((key) => (
          <PermissionRowContainer
            key={key}
            title={PERMISSIONS.GENERAL[key].title}
            note={PERMISSIONS.GENERAL[key].note}
          />
        ))}

        <Label>멤버쉽 권한</Label>

        {PERMISSIONS.MEMBERSHIP_KEY.map((key) => (
          <PermissionRowContainer
            key={key}
            title={PERMISSIONS.MEMBERSHIP[key].title}
            note={PERMISSIONS.MEMBERSHIP[key].note}
          />
        ))}

        <Label>채팅 채널 권한</Label>

        {PERMISSIONS.CHAT_KEY.map((key) => (
          <PermissionRowContainer
            key={key}
            title={PERMISSIONS.CHAT[key].title}
            note={PERMISSIONS.CHAT[key].note}
          />
        ))}

        <Label>음성 채널 권한</Label>

        {PERMISSIONS.VOICE_KEY.map((key) => (
          <PermissionRowContainer
            key={key}
            title={PERMISSIONS.VOICE[key].title}
            note={PERMISSIONS.VOICE[key].note}
          />
        ))}

        <Label>고급 권한</Label>

        {PERMISSIONS.ADVANCED_KEY.map((key) => (
          <PermissionRowContainer
            key={key}
            title={PERMISSIONS.ADVANCED[key].title}
            note={PERMISSIONS.ADVANCED[key].note}
          />
        ))}
      </ScrollableBox>
    </Container>
  );
}

export default PermissionsContent;
