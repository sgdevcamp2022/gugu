import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const OptionList = styled.div`
  width: 20%;
  background-color: #333439;
  color: #b8babd;
  padding: 1.2rem;
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
  list-style: none;
  padding: 0.2rem 0;
  margin: 0.2rem 0;
  border-radius: 5px;
  &:hover {
    background-color: #45484e;
    color: #fff;
  }
`;

const Seperator = styled.hr`
  border-color: rgba(184, 186, 189, 0.25);
`;
const Category = styled.div``;

export default function SideBar({ settingTypes }) {
  return (
    <OptionList>
      <SettingType>{settingTypes.name}</SettingType>
      {settingTypes.categorys.map((category) => (
        <Category>
          <OptionTitle>{category.title}</OptionTitle>
          <ul>
            {category.list.map((e) => (
              <Item>{e.title}</Item>
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
  settingTypes: PropTypes.object,
};

SideBar.defaultProps = {
  settingTypes: {},
};
