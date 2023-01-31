import React, { useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import MemberRoleBtn from './MemberRoleBtn';
import AddRoleButton from './AddRoleButton';
import MemberManageBtn from './MemberManageBtn';

const Container = styled.div`
  height: 40px;
  padding: 16px 0;

  display: grid;
  grid-template-columns: 40px 200px 1fr 20px;
  align-items: center;

  border-bottom: ${(props) => props.theme.border.primary};
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 10000px;
`;

const TextInfo = styled.div`
  padding: 0 10px;
  font-size: 14px;

  .name {
    color: ${(props) => props.theme.color.primaryText};
  }

  .id {
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

const RoleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

function MemberInfoContainer({ src, name, id, roleArray }) {
  const [isInfoHover, setIsInfoHover] = useState(false);

  return (
    <Container
      onMouseOver={() => {
        setIsInfoHover(true);
      }}
      onMouseOut={() => {
        setIsInfoHover(false);
      }}
    >
      <Profile
        src={
          src ||
          'https://koreanbots.dev/api/image/discord/avatars/729895586840707213.webp?size=256'
        }
      />
      <TextInfo>
        <div className="name" style={{ color: 'skyblue' }}>
          {name}
        </div>
        <div className="id">{id}</div>
      </TextInfo>
      <RoleContainer>
        {roleArray?.map((role) => (
          <MemberRoleBtn
            key={role.name}
            roleName={role.name}
            color={role.color}
          />
        ))}
        <AddRoleButton />
      </RoleContainer>
      <MemberManageBtn isInfoHover={isInfoHover} />
    </Container>
  );
}

MemberInfoContainer.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  roleArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};

MemberInfoContainer.defaultProps = {
  src: undefined,
  name: '',
  id: '',
  roleArray: [],
};

export default React.memo(MemberInfoContainer);
