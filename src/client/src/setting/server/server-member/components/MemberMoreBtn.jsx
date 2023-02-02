import React, { useRef, useState } from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import BackdropModal from '../../../../common/components/BackdropModal';
import {
  DarkModalButton,
  DarkModalContainer,
} from '../../../../layout/DarkModal';

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

const DarkModal = styled(DarkModalContainer)`
  position: absolute;
  z-index: 1;
  top: calc(100% + 8px);
  right: 0;
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

    &:hover {
      background-color: ${(props) => props.theme.color.darkRed};
    }
  }
`;

function MemberMoreBtn({ isInfoHover, name }) {
  const manageModalRef = useRef();
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [isThrowModalOpen, setIsThrowModalOpen] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);

  useOutsideClick(manageModalRef, () => {
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
        <DarkModal ref={manageModalRef}>
          <DarkModalButton strict>
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
          </DarkModalButton>
          <DarkModalButton>
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
          </DarkModalButton>
        </DarkModal>
      )}
    </Container>
  );
}

MemberMoreBtn.propTypes = {
  isInfoHover: PropTypes.bool,
  name: PropTypes.string,
};

MemberMoreBtn.defaultProps = {
  isInfoHover: false,
  name: '',
};

export default MemberMoreBtn;
