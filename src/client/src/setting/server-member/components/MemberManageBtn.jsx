import React, { useRef, useState } from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import useOutSideClick from '../../../hooks/useOutSideClick';
import BackdropModal from '../../../layout/BackdropModal';

const Container = styled.div`
  margin-top: 5px;
  padding: 0 10px 0 0;
  visibility: ${(props) => (props.isInfoHover ? 'visible' : 'hidden')};
  position: relative;
`;

const Icon = styled(AiOutlineMore)`
  font-size: 28px;
  color: ${(props) => props.theme.color.secondaryText};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.primaryText};
  }
`;

const ManageModal = styled.div`
  width: 180px;
  padding: 6px 8px;

  visibility: visible;

  position: absolute;
  z-index: 1;
  top: calc(100% + 8px);
  right: 0;

  background-color: ${(props) => props.theme.color.darkModalBg};
  border-radius: 3px;
`;

const ManageButton = styled.div`
  margin: 2px 0;
  padding: 6px 8px;
  font-size: 14px;
  color: ${(props) => props.theme.color.secondaryText};
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.primaryText};
  }

  ${(props) =>
    props.strict &&
    css`
      color: ${props.theme.color.red};

      &:hover {
        background-color: ${props.theme.color.red};
      }
    `}
`;

const ModalLayout = styled.div`
  width: 440px;

  .title {
    padding: 16px;
    font-size: 20px;
    font-weight: 600;
  }

  .description {
    padding: 0 16px 16px 16px;
  }

  .nav-bar {
    padding: 16px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    background-color: ${(props) => props.theme.color.secondaryBg};
    border-radius: 0 0 5px 5px;
  }

  button {
    width: 96px;
    height: 38px;
    padding: 2px 16px;
    font-size: 14px;
    color: ${(props) => props.theme.color.primaryText};
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .cancel {
    background-color: ${(props) => props.theme.color.secondaryBg};

    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme.color.primaryText};
    }
  }

  .submit {
    background-color: ${(props) => props.theme.color.red};
  }
`;

function MemberManageBtn({ isInfoHover, name }) {
  const manageModalRef = useRef();
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [isThrowModalOpen, setIsThrowModalOpen] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);

  useOutSideClick(manageModalRef, () => {
    setIsManageModalOpen(false);
  });

  return (
    <Container
      isInfoHover={isInfoHover}
      onClick={() => {
        setIsManageModalOpen(true);
      }}
    >
      <Icon />
      {isManageModalOpen && (
        <ManageModal ref={manageModalRef}>
          <ManageButton strict>
            <p
              role="presentation"
              onClick={() => {
                setIsThrowModalOpen(true);
                setIsManageModalOpen(false);
              }}
            >
              추방하기
            </p>
            <BackdropModal
              open={isThrowModalOpen}
              setOpen={setIsThrowModalOpen}
            >
              <ModalLayout>
                <div className="title">{name} 님을 서버에서 추방하기</div>
                <div className="description">
                  정말로 @{name} 님을 서버에서 추방하시겠어요? 새 초대를 받으면
                  다시 참가할 수 있어요.
                </div>
                <div className="nav-bar">
                  <button
                    type="button"
                    className="cancel"
                    onClick={() => {
                      setIsThrowModalOpen(false);
                    }}
                  >
                    취소
                  </button>
                  <button type="button" className="submit">
                    추방하기
                  </button>
                </div>
              </ModalLayout>
            </BackdropModal>
          </ManageButton>
          <ManageButton>
            <p
              role="presentation"
              onClick={() => {
                setIsBlockModalOpen(true);
              }}
            >
              차단하기
            </p>
            <BackdropModal
              open={isBlockModalOpen}
              setOpen={setIsBlockModalOpen}
            >
              <ModalLayout>
                <div className="title">{name} 님을 서버에서 차단하기</div>
                <div className="description">
                  정말로 @{name} 님을 서버에서 차단하시겠어요? 새 초대를 받으면
                  다시 참가할 수 없어요.
                </div>
                <div className="nav-bar">
                  <button
                    type="button"
                    className="cancel"
                    onClick={() => {
                      setIsBlockModalOpen(false);
                    }}
                  >
                    취소
                  </button>
                  <button type="button" className="submit">
                    차단하기
                  </button>
                </div>
              </ModalLayout>
            </BackdropModal>
          </ManageButton>
        </ManageModal>
      )}
    </Container>
  );
}

MemberManageBtn.propTypes = {
  isInfoHover: PropTypes.bool,
  name: PropTypes.string,
};

MemberManageBtn.defaultProps = {
  isInfoHover: false,
  name: '',
};

export default MemberManageBtn;
