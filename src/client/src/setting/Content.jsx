import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
`;

const Heading3 = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
`;

const Paragraph = styled.p`
  color: #939599;
`;

function Content() {
  return (
    <Container>
      <Heading3>title</Heading3>
      <Paragraph>This is Content.</Paragraph>
    </Container>
  );
}

export default Content;
