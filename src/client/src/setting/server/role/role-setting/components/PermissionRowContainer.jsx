import React, { useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import SwitchBtn from './SwitchBtn';

const Container = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;

  border-bottom: ${(props) => props.theme.border.primary};
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 16px;
    color: ${(props) => props.theme.color.primaryText};
  }
`;

const Note = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: ${(props) => props.theme.color.secondaryText};
`;

function PermissionRowContainer({ title, note }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Container>
      <LabelRow>
        <span className="title">{title}</span>
        <SwitchBtn
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
      </LabelRow>
      <Note>{note}</Note>
    </Container>
  );
}

PermissionRowContainer.propTypes = {
  title: PropTypes.string,
  note: PropTypes.string,
};

PermissionRowContainer.defaultProps = {
  title: '',
  note: '',
};

export default PermissionRowContainer;
