import { atom } from 'recoil';

const roleListState = atom({
  key: 'roleListState',
  default: [],
});

export default roleListState;
