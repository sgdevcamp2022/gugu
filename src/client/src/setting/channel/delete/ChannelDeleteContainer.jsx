import React from 'react';
import styled from 'styled-components';

import Content from '../../common/components/Content';
import Heading3 from '../../common/components/Heading3';

const Warning = styled.div`
  color: ${(props) => props.theme.color.secondaryText};
  font-size: 14px;
`;

const Button = styled.div`
  width: 100px;
  height: 34px;
  padding: 2px 16px;
  margin-top: 16px;

  float: right;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.color.red};
  color: ${(props) => props.theme.color.primaryText};
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  :hover {
    background-color: ${(props) => props.theme.color.darkRed};
  }
`;

function ChannelDeleteContainer() {
  return (
    <Content>
      <Heading3>채널 삭제하기</Heading3>
      <Warning>정말 채널을 삭제할까요? 삭제하면 되돌릴 수 없어요.</Warning>
      <Button>채널 삭제하기</Button>
    </Content>
  );
}

export default ChannelDeleteContainer;
