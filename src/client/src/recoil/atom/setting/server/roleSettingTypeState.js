import { atom } from 'recoil';
import ROLE_SETTING_TYPES from '../../../../setting/constant/ROLE_SETTING_TYPES';

const roleSettingTypeState = atom({
  key: 'roleSettingType',
  default: ROLE_SETTING_TYPES.DISPLAY,
});

export default roleSettingTypeState;
