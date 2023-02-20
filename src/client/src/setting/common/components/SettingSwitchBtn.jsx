import React from 'react';
import { styled, Switch } from '@mui/material';
import { PropTypes } from 'prop-types';

const DiscordSwitch = styled((props) => (
  // eslint-disable-next-line
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 40,
  height: 24,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#3ba55c',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 20,
    height: 20,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#72767d',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

function SettingSwitchBtn({ checked, onChange }) {
  return (
    <div>
      <DiscordSwitch
        sx={{ m: 1 }}
        checked={checked}
        onChange={onChange}
        inputProps={{ 'aria-label': 'switch' }}
      />
    </div>
  );
}

SettingSwitchBtn.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

SettingSwitchBtn.defaultProps = {
  checked: false,
  onChange: () => {},
};

export default SettingSwitchBtn;
