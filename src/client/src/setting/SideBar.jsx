import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { useSetRecoilState } from 'recoil';
import settingMainContentState from '../recoil/setting/common/settingMainContentState';

const OptionList = styled.div`
  width: 20%;
  max-width: 250px;
  padding: 20px;
  background-color: ${props => props.theme.color.secondaryBg};
  color: #b8babd;
  overflow-y: scroll;
`;

const SettingType = styled.div`
  margin: 2rem 0;
  font-size: 0.9rem;
`;

const OptionTitle = styled.div`
  font-size: 0.7rem;
  padding: 0.2rem 0;
`;

const Item = styled.li`
  padding: 6px 10px;
  list-style: none;
  margin: 0.2rem 0;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.color.hoverBg};
    color: ${props => props.theme.color.hoverText};
  }
`;

const Seperator = styled.hr`
  border-color: rgba(184, 186, 189, 0.25);
`;

const Category = styled.div``;

export default function SideBar({ sidebar }) {
  const setMainContent = useSetRecoilState(settingMainContentState);
  return (
    <OptionList>
      <SettingType>{sidebar.name}</SettingType>
      {sidebar.categories.map((category) => (
        <Category>
          <OptionTitle>{category.title}</OptionTitle>
          <ul>
            {category.list.map((e) => (
              <Item onClick={() => {setMainContent(e.content)}}>{e.title}</Item>
            ))}
          </ul>
          <Seperator />
        </Category>
      ))}
    </OptionList>
  );
}

SideBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  sidebar: PropTypes.object,
};

SideBar.defaultProps = {
  sidebar: {},
};
