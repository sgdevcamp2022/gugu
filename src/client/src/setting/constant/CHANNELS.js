/* eslint-disable */

import ChannelGeneralContainer from '../channel/general/ChannelGeneralContainer';
import ChannelPermissionContainer from '../channel/permission/ChannelPermissionContainer';

const SIDEBAR = {
  name: '채널 명',
  categories: [
    {
      title: '채널 설정',
      list: [
        {
          title: '일반',
          content: <ChannelGeneralContainer />,
        },
        {
          title: '권한',
          content: <ChannelPermissionContainer />,
        },
      ],
    },
    {
      title: undefined,
      list: [
        {
          title: '채널 삭제하기',
          content: '',
        },
      ],
    },
  ],
};

Object.freeze(SIDEBAR);

export default { SIDEBAR };
