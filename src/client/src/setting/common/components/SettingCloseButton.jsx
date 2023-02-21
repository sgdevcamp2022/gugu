import React from 'react';
import styled from 'styled-components';
import { SlClose } from 'react-icons/sl';
import { useSetRecoilState } from 'recoil';
import privatePageTypeState from '../../../recoil/common/privatePageTypeState';
import PRIVATE_PAGE_TYPES from '../../../common/constant/PRIVATE_PAGE_TYPES';

const Box = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  color: ${(props) => props.theme.color.secondaryText};
`;

const Button = styled(SlClose)`
  font-size: 30px;
  cursor: pointer;
`;

const Text = styled.div`
  padding-top: 10px;
`;

function SettingCloseButton() {
  const setPrivatePageType = useSetRecoilState(privatePageTypeState);
  return (
    <Box>
      <Button
        onClick={() => {
          setPrivatePageType(PRIVATE_PAGE_TYPES.MAIN);
        }}
      />
      <Text>ESC</Text>
    </Box>
  );
}

export default React.memo(SettingCloseButton);
