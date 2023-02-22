import React from 'react';
import styled from 'styled-components';
import { HiOutlineRefresh } from 'react-icons/hi';

import Content from '../../common/components/Content';
import Heading3 from '../../../layout/Heading3';
import SettingCard from './components/SettingCard';

const Description = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.color.secondaryText};
`;

const CategoryCard = styled.div`
  height: 20px;
  margin-top: 16px;
  padding: 16px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${(props) => props.theme.color.secondaryBg};
  border-radius: 5px;

  .icon {
    font-size: 20px;
    color: ${(props) => props.theme.color.yellow};

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label {
    margin: 0 10px;
    color: ${(props) => props.theme.color.primaryText};
    font-size: 16px;

    strong {
      font-weight: 500;
    }
  }
`;

function ChannelPermissionContainer() {
  return (
    <Content>
      <Heading3>채널 권한</Heading3>
      <Description>
        다양한 권한을 통해 이 채널에서 누가 무엇을 할 수 있는지 설정할 수
        있어요.
      </Description>

      <CategoryCard>
        <div className="icon">
          <HiOutlineRefresh />
        </div>
        <div className="label">
          <strong>채팅 채널</strong> 카테고리와 동기화된 권한
        </div>
      </CategoryCard>

      <SettingCard />
    </Content>
  );
}

export default ChannelPermissionContainer;
