import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { RiShieldUserFill } from 'react-icons/ri';
import { BsCheck2 } from 'react-icons/bs';

import BackdropModal from '../../../../../common/components/BackdropModal';
import selectedRoleState from '../../../recoil/atom/selectedRoleState';
import SearchBar from '../../../../../common/components/SearchBar';
import Label from '../layout/Label';

const Container = styled.div`
  position: relative;
`;

const Button = styled.div`
  height: 30px;
  margin-left: 16px;
  padding: 2px 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.color.blue};
  border-radius: 3px;

  color: ${(props) => props.theme.color.primaryText};
  font-size: 14px;
`;

const AddModal = styled.div`
  width: 440px;
`;

const ModalHeader = styled.div`
  width: 408px;
  height: 50px;
  padding: 32px 16px;

  text-align: center;

  .title {
    font-size: 24px;
    font-weight: 600;
  }

  .role-container {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
  }

  .role-container > .role-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .role-container > .role-name {
    margin-left: 4px;
  }
`;

const SearchBarHolder = styled.div`
  padding: 0 16px 12px 16px;
`;

const MemberList = styled.div`
  height: 260px;
  padding: 8px 8px 0 16px;
  overflow-y: scroll;
`;

const AddMemberRow = styled.div`
  padding: 8px 6px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 3px;

  &:hover {
    background-color: ${(props) => props.theme.color.hoverBg};
  }

  .checkbox {
    width: 18px;
    height: 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${(props) => props.theme.color.secondaryText};
    border-radius: 3px;
    font-size: 18px;

    background-color: ${(props) => props.theme.color.blue};
  }

  .label {
    padding-left: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 14px;
  }

  .member-profile {
    width: 24px;
    height: 24px;
    object-fit: cover;
    border-radius: 1000px;
  }

  .member-name {
    margin-left: 8px;
    margin-right: 4px;
    color: ${(props) => props.theme.color.primaryText};
  }

  .member-id {
    margin-left: 4px;
    color: ${(props) => props.theme.color.secondaryText};
  }
`;

const BottomBar = styled.div`
  height: 38px;
  padding: 16px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: ${(props) => props.theme.color.secondaryBg};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.color.primaryText};
    text-align: center;
  }

  .cancel-button {
    width: 60px;
    height: 32px;
    padding: 2px 16px;
    background-color: ${(props) => props.theme.color.secondaryBg};
    &:hover {
      text-decoration: underline;
    }
  }

  .add-button {
    width: 96px;
    height: 38px;
    padding: 2px 16px;

    background-color: ${(props) => props.theme.color.blue};
    border-radius: 3px;

    font-size: 14px;
  }
`;

function AddMemberBtn() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const selectedRole = useRecoilValue(selectedRoleState);

  return (
    <Container>
      <Button
        onClick={() => {
          setIsAddModalOpen(true);
        }}
      >
        멤버 추가
      </Button>

      <BackdropModal open={isAddModalOpen} setOpen={setIsAddModalOpen}>
        <AddModal>
          <ModalHeader>
            <h1 className="title">멤버 추가</h1>
            <div className="role-container">
              <div className="role-icon" style={{ color: 'green' }}>
                <RiShieldUserFill />
              </div>
              <div className="role-name">{selectedRole.name}</div>
            </div>
          </ModalHeader>

          <SearchBarHolder>
            <SearchBar
              containerStyle={{
                height: '34px',
                marginBottom: '8px',
                border: '1px solid #18191C',
              }}
              inputStyle={{
                padding: '0 8px',
              }}
              fontSize="16px"
              placeholder="멤버 검색"
            />
          </SearchBarHolder>

          <MemberList>
            <Label>멤버</Label>

            <AddMemberRow>
              <div className="checkbox">
                <BsCheck2 />
              </div>
              <div className="label">
                <img
                  className="member-profile"
                  src="https://image.petmd.com/files/styles/863x625/public/2023-01/toy-poodle.jpg"
                  alt="member-profile"
                />
                <span className="member-name">이윤성</span>
                <span className="member-id">이윤성#1111</span>
              </div>
            </AddMemberRow>
          </MemberList>

          <BottomBar>
            <button
              className="button cancel-button"
              type="button"
              onClick={() => {
                setIsAddModalOpen(false);
              }}
            >
              취소
            </button>
            <button className="button add-button" type="button">
              추가하기
            </button>
          </BottomBar>
        </AddModal>
      </BackdropModal>
    </Container>
  );
}

export default AddMemberBtn;
