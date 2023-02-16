const ARRAY = ['DISPLAY', 'PERMISSIONS', 'MEMBERS'];

const ROLE_SETTING_INFO = {
  DISPLAY: 'DISPLAY',
  PERMISSIONS: 'PERMISSIONS',
  MEMBERS: 'MEMBERS',
};

const KOREAN = {
  DISPLAY: '표시하기',
  PERMISSIONS: '권한',
  MEMBERS: '멤버 관리',
};

Object.freeze(ARRAY);
Object.freeze(ROLE_SETTING_INFO);
Object.freeze(KOREAN);

export default { ...ROLE_SETTING_INFO, KOREAN, ARRAY };
