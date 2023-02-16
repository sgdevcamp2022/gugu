import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import SearchBar from '../../../../../common/components/SearchBar';
import isRoleSettingModeState from '../../../../../recoil/setting/server/isRoleSettingModeState';

const Container = styled.div`
  width: 100%;
  height: 34px;
  margin-top: 32px;

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

const MakeRoleButton = styled.div`
  width: 66px;
  height: 100%;
  margin-left: 16px;
  padding: 2px 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.color.blue};
  border-radius: 3px;

  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.color.primaryText};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.darkBlue};
  }
`;

function SearchNavBar() {
  const setIsRoleSettingMode = useSetRecoilState(isRoleSettingModeState);

  return (
    <Container>
      <SearchBar
        inputStyle={{ margin: '1px', padding: '0px 8px' }}
        containerStyle={{ height: '100%' }}
        fontSize="16px"
        placeholder="역할 검색"
      />
      <MakeRoleButton
        onClick={() => {
          setIsRoleSettingMode(true);
        }}
      >
        역할 만들기
      </MakeRoleButton>
    </Container>
  );
}

export default SearchNavBar;
