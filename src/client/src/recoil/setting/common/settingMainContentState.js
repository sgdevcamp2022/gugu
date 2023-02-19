/*eslint-disable*/
import {atom} from 'recoil';
import ServerRoleContainer from '../../../setting/server/role/ServerRoleContainer';

const settingMainContentState = atom({
  key: 'settingMainContentState',
  default: <ServerRoleContainer />
})

export default settingMainContentState;
