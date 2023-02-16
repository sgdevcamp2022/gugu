const GENERAL_KEY = ['VIEW_CHANNEL', 'MANAGE_CHANNEL', 'MANAGE_SERVER'];
const MEMBERSHIP_KEY = ['CREATE_INVITE_CODE', 'EXPEL_MEMBER', 'BLOCK_MEMBER'];
const CHAT_KEY = ['SEND_MESSAGE', 'ATTACH_LINK', 'MANAGE_MESSAGE'];
const VOICE_KEY = ['CONNECT', 'VIDEO'];
const ADVANCED_KEY = ['MANAGER'];

const GENERAL = {
  VIEW_CHANNEL: {
    title: '채널 보기',
    note: '멤버들이 기본값으로 채널을 볼 수 있도록 허용합니다.',
  },
  MANAGE_CHANNEL: {
    title: '채널 관리하기',
    note: '멤버들이 채널을 생성, 수정 혹은 삭제할 수 있도록 허용합니다.',
  },
  MANAGE_SERVER: {
    title: '서버 관리하기',
    note: '멤버들이 이 서버의 이름을 변경하고, 지역을 바꾸고, 모든 채널을 확인할 수 있도록 허용합니다.',
  },
};

const MEMBERSHIP = {
  CREATE_INVITE_CODE: {
    title: '초대 코드 만들기',
    note: '멤버들이 이 서버에 새로운 친구를 초대할 수 있도록 허용합니다.',
  },
  EXPEL_MEMBER: {
    title: '멤버 추방하기',
    note: '멤버들이 이 서버에서 다른 멤버를 추방할 수 있도록 허용합니다. 추방된 멤버들도 초대를 받는다면 다시 이 서버에 가입할 수 있습니다.',
  },
  BLOCK_MEMBER: {
    title: '멤버 차단하기',
    note: '멤버들이 이 서버에서 다른 멤버를 영구적으로 차단할 수 있도록 허용합니다.',
  },
};

const CHAT = {
  SEND_MESSAGE: {
    title: '메시지 보내기',
    note: '멤버들이 채팅 채널에서 메시지를 보낼 수 있도록 허용합니다.',
  },
  ATTACH_LINK: {
    title: '링크 첨부',
    note: '멤버들이 이 채팅 채널에서 임베드된 콘텐츠의 링크를 공유할 수 있도록 허용합니다.',
  },
  MANAGE_MESSAGE: {
    title: '메시지 관리',
    note: '멤버들이 다른 멤버의 메시지를 삭제하거나 고정할 수 있도록 허용합니다.',
  },
};

const VOICE = {
  CONNECT: {
    title: '연결',
    note: '멤버들이 음성 채널에 참가해 다른 사람을 들을 수 있도록 허용합니다.',
  },
  VIDEO: {
    title: '영상',
    note: '멤버들이 이 서버에서 동영상을 공유하고, 화면 공유 및 게임 방송 기능을 사용할 수 있도록 허용합니다.',
  },
};

const ADVANCED = {
  MANAGER: {
    title: '관리자',
    note: '이 권한을 가진 멤버는 모든 권한을 가지게 되며 모든 채널 관련 권한이나 제한을 무시할 수 있게 돼요. (예컨대, 이 권한을 가진 멤버는 모든 비공개 채널에 입장할 수 있게 돼요.) 위험한 기능이므로 신중히 사용해주세요.',
  },
};

Object.freeze(GENERAL);
Object.freeze(MEMBERSHIP);
Object.freeze(CHAT);
Object.freeze(VOICE);
Object.freeze(ADVANCED);

const PERMISSIONS = {
  GENERAL_KEY,
  GENERAL,
  MEMBERSHIP_KEY,
  MEMBERSHIP,
  CHAT_KEY,
  CHAT,
  VOICE_KEY,
  VOICE,
  ADVANCED_KEY,
  ADVANCED,
};

Object.freeze(PERMISSIONS);

export default PERMISSIONS;
