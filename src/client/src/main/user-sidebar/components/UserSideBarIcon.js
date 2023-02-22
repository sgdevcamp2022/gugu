import styled from 'styled-components';

const UserSideBarIcon = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 8px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.color.primaryText};
  background-color: ${(props) => props.theme.color.secondaryBg};
  border-radius: 1000px;

  overflow: hidden;
  cursor: pointer;

  :hover {
    border-radius: 15px;
    transition: all 0.2s linear;
  }
`;

export default UserSideBarIcon;
