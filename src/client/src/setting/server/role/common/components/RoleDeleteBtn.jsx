import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { PropTypes } from 'prop-types';

import {
  DarkModalButton,
  DarkModalContainer,
} from '../../../../../layout/DarkModal';
import BackdropModal from '../../../../../common/components/BackdropModal';
import selectedRoleState from '../../../../../recoil/atom/setting/server/selectedRoleState';
import useOutsideClick from '../../../../../hooks/useOutsideClick';

const Container = styled.div`
  width: 36px;
  height: 36px;
  margin-bottom: 20px;

  color: ${(props) => props.theme.color.secondaryText};
  font-size: 24px;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.primaryText};
  }
`;

const DarkModal = styled(DarkModalContainer)`
  position: relative;
  z-index: 1;
  bottom: 60%;
  right: 180px;
`;

const DeleteButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .delete-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
`;

const ModalLayout = styled.div`
  & > div {
    padding: 16px;
    font-size: 16px;
  }

  .content h2 {
    margin: 8px 0 20px;
    text-align: center;
    font-size: 16px;
  }

  .content .text {
    font-weight: 400;
    color: ${(props) => props.theme.color.secondaryText};
  }

  .button-bar {
    background-color: ${(props) => props.theme.color.secondaryBg};
    border-radius: 0 0 5px 5px;
  }

  button {
    width: calc((100% - 10px) / 2);
    height: 50px;

    font-size: 16px;
    color: ${(props) => props.theme.color.primaryText};

    border: none;
    border-radius: 3px;
    outline: none;
    cursor: pointer;

    transition: ${(props) => props.theme.transition.hover};
  }

  .cancel-button {
    background-color: #50545a;
    &:hover {
      background-color: #686d72;
    }
  }

  .confirm-button {
    margin-left: 10px;
    background-color: ${(props) => props.theme.color.blue};

    &:hover {
      background-color: ${(props) => props.theme.color.darkBlue};
    }
  }
`;

function RoleDeleteBtn({ children }) {
  const moreModalRef = useRef();
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const selectedRole = useRecoilValue(selectedRoleState);

  useOutsideClick(moreModalRef, () => {
    setIsMoreModalOpen(false);
  });

  return (
    <Container
      onClick={() => {
        setIsMoreModalOpen(true);
      }}
    >
      {children}

      {isMoreModalOpen && (
        <DarkModal ref={moreModalRef}>
          <DarkModalButton strict>
            <DeleteButton
              role="presentation"
              onClick={() => {
                setIsDeleteModalOpen(true);
              }}
            >
              <p>삭제하기</p>
              <div className="delete-icon">
                <RiDeleteBin6Fill />
              </div>
            </DeleteButton>

            <BackdropModal
              open={isDeleteModalOpen}
              setOpen={setIsDeleteModalOpen}
            >
              <ModalLayout>
                <div className="content">
                  <h2>역할 삭제하기</h2>
                  <div className="text">
                    정말로 <strong>{selectedRole.name}</strong> 역할을
                    삭제하시겠어요? 이 작업은 취소할 수 없어요.
                  </div>
                </div>

                <div className="button-bar">
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => {
                      setIsDeleteModalOpen(false);
                    }}
                  >
                    취소
                  </button>
                  <button type="button" className="confirm-button">
                    확인
                  </button>
                </div>
              </ModalLayout>
            </BackdropModal>
          </DarkModalButton>
        </DarkModal>
      )}
    </Container>
  );
}

RoleDeleteBtn.propTypes = {
  children: PropTypes.element,
};

RoleDeleteBtn.defaultProps = {
  children: undefined,
};

export default RoleDeleteBtn;
