import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  margin: 10px 0;
  background: #3a3c41;
  border-radius: 70px;
  cursor: pointer;
  transition: ease-out 250ms;
  &:hover {
    background: #5c65ee;
    border-radius: 20px;
    transition: ease-out 250ms;
  }
`;

const ServerName = styled.div`
  color: #fff;
  font-size: 0.7rem;
`;

function Server() {
  return (
    <Element>
      <ServerName>GuGu</ServerName>
    </Element>
  );
}

export default Server;
