import { atom } from 'recoil';
import SETTING_TYPES from '../../../setting/constant/SETTING_TYPES';

const settingTypeState = atom({
  key: 'settingType',
  default: SETTING_TYPES.CHANNEL,
});

export default settingTypeState;
