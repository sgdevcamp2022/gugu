import React from 'react';
import styled from 'styled-components';
import NavTitle from '../components/NavTitle';

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: #3a3c41;
  border-bottom: 2px solid #2d2f33;
`;
const HashTag = styled.div`
  color: #83868a;
  font-weight: 700;
  font-size: 1.7rem;
  margin: 0 10px;
`;

function NavBar() {
  return (
    <Nav>
      <HashTag>#</HashTag>
      <NavTitle>GuGu</NavTitle>
    </Nav>
  );
}

export default NavBar;
