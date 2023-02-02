import styled, { css } from 'styled-components';

export const DarkModalContainer = styled.div`
  width: 180px;
  padding: 6px 8px;

  visibility: visible;

  background-color: ${(props) => props.theme.color.darkModalBg};
  border-radius: 3px;
`;

export const DarkModalButton = styled.div`
  margin: 2px 0;
  padding: 6px 8px;

  font-size: 14px;
  color: ${(props) => props.theme.color.secondaryText};

  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.primaryText};
  }

  ${(props) =>
    props.strict &&
    css`
      color: ${props.theme.color.red};

      &:hover {
        background-color: ${props.theme.color.red};
      }
    `}
`;
