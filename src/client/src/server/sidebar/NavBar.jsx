import React from 'react';
import styled from 'styled-components';
import NavTitle from '../components/NavTitle';

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: #333439;
  border-bottom: 2px solid #2d2f33;
  cursor: pointer;
  transition: ease-in-out 250ms;
  &:hover {
    background: #3f4146;
    transition: ease-in-out 250ms;
  }
`;

const ServerName = styled(NavTitle)`
  margin: 0 20px;
`;

function NavBar() {
  return (
    <Nav>
      <ServerName>GuGu</ServerName>
    </Nav>
  );
}

export default NavBar;
