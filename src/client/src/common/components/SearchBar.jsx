import React from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import { PropTypes } from 'prop-types';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  background-color: ${(props) => props.theme.color.inputBg};
  border-radius: 3px;
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.color.inputBg};

  font-size: 1em;
  border-radius: 3px;

  color: ${(props) => props.theme.color.primaryText};
  cursor: pointer;

  &::placeholder {
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

const Icon = styled(IoSearch)`
  padding: 0 0.2em;
  font-size: 1.5em;
  color: ${(props) => props.theme.color.secondaryText};
`;

function SearchBar({ containerStyle, inputStyle, fontSize, placeholder }) {
  return (
    <Container style={{ fontSize, ...containerStyle }}>
      <Input style={inputStyle} placeholder={placeholder} />
      <Icon />
    </Container>
  );
}

SearchBar.propTypes = {
  containerStyle: PropTypes.objectOf(PropTypes.string),
  inputStyle: PropTypes.objectOf(PropTypes.string),
  fontSize: PropTypes.string,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  containerStyle: {},
  inputStyle: {},
  fontSize: '14px',
  placeholder: '',
};

export default SearchBar;
