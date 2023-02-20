import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdLock } from 'react-icons/io';
import { IoAlertCircle } from 'react-icons/io5';
import SettingSwitchBtn from '../../../common/components/SettingSwitchBtn';
import FolderCard from './FolderCard';

const Container = styled.div`
  margin-top: 16px;
  background-color: ${(props) => props.theme.color.secondaryBg};
  border-radius: 5px;
`;

const CardContent = styled.div`
  padding: 16px;
  color: ${(props) => props.theme.color.secondaryText};
  border-radius: 5px 5px 0 0;
  transition: background-color 0.5s;

  &.dark {
    background-color: ${(props) => props.theme.color.inputBg};
  }

  .card-content-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .label {
      margin: 0 10px;
      flex: 1 1 auto;
      font-size: 16px;
      font-weight: 600;
      color: ${(props) => props.theme.color.primaryText};
    }
  }

  .card-description {
    padding: 8px 0 0 4px;
    font-size: 12px;
  }
`;

const CardFolder = styled.div``;

const AdminWarning = styled.div`
  padding: 16px;
  box-sizing: border-box;

  .container {
    padding: 8px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    border: 1px solid ${(props) => props.theme.color.yellow};
    border-radius: 3px;
    background-color: #3f3a33;

    .icon {
      font-size: 24px;
      color: ${(props) => props.theme.color.yellow};
    }

    .text {
      margin-left: 10px;
      color: ${(props) => props.theme.color.primaryText};
      font-size: 14px;
    }
  }
`;

function SettingCard() {
  const [isPrivate, setIsPrivate] = useState(false);
  return (
    <Container>
      <CardContent className={isPrivate && 'dark'}>
        <div className="card-content-row">
          <IoMdLock />
          <div className="label">비공개 채널</div>
          <SettingSwitchBtn
            checked={isPrivate}
            onChange={() => {
              setIsPrivate(!isPrivate);
            }}
          />
        </div>
        <div className="card-description">
          채널을 비공개로 만들면 선택한 멤버들과 역할만 이 채널을 볼 수 있어요.
        </div>
      </CardContent>

      <CardFolder>
        <AdminWarning>
          <div className="container">
            <div className="icon">
              <IoAlertCircle />
            </div>
            <div className="text">
              @everyone에게 관리자 권한이 부여되어 있으므로, 모든 멤버가 이
              채널을 볼 수 있어요. 이 설정은 서버 설정의 역할에서 바꿀 수
              있어요.
            </div>
          </div>
        </AdminWarning>

        {isPrivate && <FolderCard />}
      </CardFolder>
    </Container>
  );
}

export default SettingCard;
