import { atom } from 'recoil';

const selectedRoleState = atom({
  key: 'selectedRoleState',
  default: {
    id: '',
    name: '',
  },
});

export default selectedRoleState;
