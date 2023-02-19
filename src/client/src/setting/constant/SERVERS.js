/* eslint-disable */
import ServerRoleContainer from '../server/role/ServerRoleContainer';
import ServerMemberContainer from '../server/server-member/ServerMemberContainer';

const SERVERS = 'SERVER';

const SIDEBAR = {
  name: 'server name',
  categories: [
    {
      title: '일반',
      list: [
        {
          title: '일반',
          content: <div>일반</div>,
        },
        {
          title: '역할',
          content: <ServerRoleContainer />
        },
      ],
    },
    {
      title: '사용자 관리',
      list: [
        {
          title: '멤버',
          content: <ServerMemberContainer />,
        },
        {
          title: '초대',
          content: <div>초대</div>
        },
      ],
    },
  ],
};

Object.freeze(SIDEBAR);

export default {SERVER: SERVERS, SIDEBAR};
