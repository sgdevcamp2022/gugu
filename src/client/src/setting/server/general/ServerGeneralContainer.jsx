import React from 'react';
import styled from 'styled-components';
import Content from '../../common/components/Content';
import Heading3 from '../../../layout/Heading3';
import ImageContainer from './components/ImageContainer';
import Label from '../../../layout/Label';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ServerNameBox = styled.div`
  width: 100%;
  margin: 0 0 20px 20px;
`;

const NameInput = styled.input`
  width: calc(100% - 30px);
  height: 20px;
  padding: 10px;

  background-color: ${(props) => props.theme.color.inputBg};
  color: ${(props) => props.theme.color.primaryText};
  font-size: 16px;

  border-radius: 3px;
`;

function ServerGeneralContainer() {
  return (
    <Content>
      <Heading3>서버 개요</Heading3>
      <Container>
        <ImageContainer />
        <ServerNameBox>
          <Label>서버 이름</Label>
          <NameInput />
        </ServerNameBox>
      </Container>
    </Content>
  );
}

export default ServerGeneralContainer;
