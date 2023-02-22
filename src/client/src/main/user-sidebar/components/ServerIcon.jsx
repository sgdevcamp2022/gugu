import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import UserSideBarIcon from './UserSideBarIcon';

const TextIcon = styled.div`
  position: absolute;
  color: white;
`;

const ImgIcon = styled.img`
  object-fit: contain;
`;

function ServerIcon({ src, serverId, serverName }) {
  return (
    <UserSideBarIcon
      onClick={() => {
        console.log(serverName + serverId);
      }}
    >
      {!src ? (
        <TextIcon>{serverName}</TextIcon>
      ) : (
        <ImgIcon src={src} alt="server-profile" />
      )}
    </UserSideBarIcon>
  );
}

ServerIcon.propTypes = {
  src: PropTypes.string,
  serverId: PropTypes.string.isRequired,
  serverName: PropTypes.string,
};

ServerIcon.defaultProps = {
  src: undefined,
  serverName: '',
};

export default ServerIcon;
