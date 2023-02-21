import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsFillCameraFill } from 'react-icons/bs';
import Label from '../../../setting/common/components/Label';
import useChangeImgPreview from '../../../hooks/useChangeImgPreview';
// import useChangeImgPreview from '../../../hooks/useChangeImgPreview';

const Header = styled.div`
  padding: 24px 24px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: 600;
  }

  .description {
    margin-top: 8px;
    font-size: 16px;
    color: ${(props) => props.theme.color.secondaryText};
    text-align: center;
  }
`;

const Content = styled.div`
  height: 180px;
  margin: 16px;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const ImageUploader = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;

  position: relative;
  background-size: cover;
  border-radius: 1000px;

  box-shadow: rgba(0, 0, 0, 0.24) 0 8px 16px 0;
`;

const HiddenFileInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 1000px;
  position: absolute;
  z-index: 1;
  opacity: 0;
  font-size: 0;
  cursor: pointer;
`;

const EmptyImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  color: ${(props) => props.theme.color.secondaryText};

  border-radius: 1000px;
  border: 1px dashed ${(props) => props.theme.color.secondaryText};
`;

const ServerNameBox = styled.div`
  width: 100%;
`;

const NameInput = styled.input`
  width: calc(100% - 20px);
  height: 20px;
  padding: 10px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.inputBg};
  color: ${(props) => props.theme.color.primaryText};
  font-size: 16px;
`;

const Footer = styled.div`
  padding: 16px;
  background-color: ${(props) => props.theme.color.secondaryBg};
  border-radius: 0 0 3px 3px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  .create-button {
    width: 64px;
    height: 34px;
    padding: 2px 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.primaryText};
    border-radius: 3px;
    cursor: pointer;

    transition: background-color 0.2s ease-in-out;
    :hover {
      background-color: ${(props) => props.theme.color.darkBlue};
    }
  }
`;

function CreateServerModal() {
  // const example =
  //   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg';

  const example = '';

  const [serverImageFile, setServerImageFile] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    setServerImageFile(e.target.files[0]);
  };

  useEffect(() => {
    const loadThumbnail = async () => {
      const response = await fetch(example);
      const blob = await response.blob();
      setServerImageFile(new File([blob], 'image.jpg', { type: blob.type }));
      setImagePreview(example);
    };

    if (!example || example === '') return;
    loadThumbnail();
  }, [example]);

  useChangeImgPreview(serverImageFile, (e) => {
    setImagePreview(e);
  });
  // useEffect(() => {
  //   if (!serverImageFile || serverImageFile === '') {
  //     return;
  //   }
  //
  //   const reader = new FileReader();
  //   reader.readAsDataURL(serverImageFile);
  //   reader.onload = () => {
  //     setImagePreview(reader.result);
  //   };
  // }, [serverImageFile]);

  return (
    <>
      <Header>
        <h1>서버 커스터마이징하기</h1>
        <div className="description">
          새로운 서버에 이름과 아이콘을 부여해 개성을 드러내 보세요. 나중에
          언제든 바꿀 수 있어요.
        </div>
      </Header>
      <Content>
        <ImageUploader
          style={{
            backgroundImage: `url(${imagePreview})`,
          }}
        >
          <HiddenFileInput
            className="image-uploader-input"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleImageUpload}
          />
          {!imagePreview && (
            <EmptyImage>
              <BsFillCameraFill />
            </EmptyImage>
          )}
        </ImageUploader>

        <ServerNameBox>
          <Label>서버 이름</Label>
          <NameInput placeholder="서버 이름" />
        </ServerNameBox>
      </Content>

      <Footer>
        <div className="create-button">만들기</div>
      </Footer>
    </>
  );
}

export default CreateServerModal;
