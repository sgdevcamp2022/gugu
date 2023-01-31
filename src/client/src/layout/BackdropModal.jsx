import React, { useRef } from 'react';
import { Backdrop } from '@mui/material';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import useOutsideClick from '../hooks/useOutsideClick';

const ModalSection = styled.div`
  position: relative;
  z-index: 1;

  background-color: ${(props) => props.theme.color.primaryBg};
  border-radius: 5px;
`;

function BackdropModal({ open, setOpen, children, sx }) {
  const modalRef = useRef();

  useOutsideClick(modalRef, () => {
    setOpen(false);
  });

  return (
    <Backdrop sx={{ color: '#fff' }} open={open}>
      <ModalSection style={sx} ref={modalRef}>
        {children}
      </ModalSection>
    </Backdrop>
  );
}

BackdropModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  children: PropTypes.element,
  sx: PropTypes.objectOf,
};

BackdropModal.defaultProps = {
  open: false,
  setOpen: () => {},
  children: undefined,
  sx: {},
};

export default BackdropModal;
