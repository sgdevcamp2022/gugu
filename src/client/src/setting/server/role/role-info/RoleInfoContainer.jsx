import React from 'react';
import styled from 'styled-components';

import Content from '../../../common/components/Content';
import Heading3 from '../../../common/components/Heading3';
import DefaultRoleButton from './components/DefaultRoleButton';

const Description = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  color: ${(props) => props.theme.color.secondaryText};
`;

function RoleInfoContainer() {
  return (
    <Content>
      <Heading3>역할</Heading3>
      <Description>
        역할을 사용하면 서버 멤버를 그룹화하고 권한을 지정할 수 있어요.
      </Description>
      <DefaultRoleButton />
    </Content>
  );
}

export default RoleInfoContainer;
