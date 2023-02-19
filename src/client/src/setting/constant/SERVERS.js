/* eslint-disable */
import ServerRoleContainer from '../server/role/ServerRoleContainer';
import ServerMemberContainer from '../server/member/ServerMemberContainer';
import ServerInvitationContainer from '../server/invitation/ServerInvitationContainer';
import ServerGeneralContainer from '../server/general/ServerGeneralContainer';

const SERVERS = 'SERVER';

const SIDEBAR = {
  name: 'server name',
  categories: [
    {
      title: '일반',
      list: [
        {
          title: '일반',
          content: <ServerGeneralContainer />,
        },
        {
          title: '역할',
          content: <ServerRoleContainer />,
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
          content: <ServerInvitationContainer />,
        },
      ],
    },
  ],
};

Object.freeze(SIDEBAR);

export default { SERVER: SERVERS, SIDEBAR };
