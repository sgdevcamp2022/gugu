import styled from 'styled-components';

const Label = styled.div`
  margin-bottom: 8px;

  color: ${(props) => props.theme.color.primaryText};
  font-size: 12px;
  font-weight: 700;

  span {
    color: ${(props) => props.theme.color.red};
  }
`;

export default Label;
