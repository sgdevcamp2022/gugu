import React from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import { PropTypes } from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #202225;
  border-radius: 3px;
`;

const Input = styled.input`
  background-color: #202225;

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

function SearchBar({ sx, fontSize, placeholder }) {
  return (
    <Container style={{ fontSize }}>
      <Input style={sx} placeholder={placeholder} />
      <Icon />
    </Container>
  );
}

SearchBar.propTypes = {
  sx: PropTypes.objectOf,
  fontSize: PropTypes.string,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  sx: {},
  fontSize: '14px',
  placeholder: '',
};

export default SearchBar;
