import styled from 'styled-components';

const ServerSideBarModalButton = styled.div`
  width: 188px;
  height: 20px;
  margin: 2px 0;
  padding: 6px 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 3px;
  color: ${(props) => props.theme.color.secondaryText};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.color.primaryText};
    background-color: ${(props) => props.theme.color.blue};
  }

  &.blue {
    color: ${(props) => props.theme.color.blue};
    :hover {
      color: ${(props) => props.theme.color.primaryText};
    }
  }

  .label {
    font-size: 14px;
    font-weight: 500;
  }

  .icon {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default ServerSideBarModalButton;
