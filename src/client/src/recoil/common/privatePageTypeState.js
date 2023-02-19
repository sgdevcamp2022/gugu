import {atom} from 'recoil';
import PRIVATE_PAGE_TYPES from '../../common/constant/PRIVATE_PAGE_TYPES';

const privatePageTypeState = atom({
  key: 'pageType',
  default: PRIVATE_PAGE_TYPES.SETTING
})

export default privatePageTypeState;
