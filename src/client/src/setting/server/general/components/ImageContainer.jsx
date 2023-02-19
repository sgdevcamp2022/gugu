import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ImageBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .image-left-box {
    margin-right: 10px;
  }

  .image-right-box {
    margin-left: 10px;
  }
`;

const ImageUploader = styled.div`
  width: 100px;
  height: 100px;

  background-size: cover;
  border-radius: 1000px;

  position: relative;

  box-shadow: rgba(0, 0, 0, 0.24) 0 8px 16px 0;

  .image-uploader-acronym {
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 40px;
    color: ${(props) => props.theme.color.primaryText};
  }

  :hover .image-uploader-acronym {
    visibility: hidden;
  }

  .image-uploader-input {
    border-radius: 1000px;
    z-index: 3;
  }

  .image-uploader-hint {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    visibility: hidden;
    border-radius: 1000px;

    font-size: 10px;
    font-weight: 700;
  }

  :hover .image-uploader-hint {
    visibility: visible;
    background-color: rgba(0, 0, 0, 0.6);
    color: ${(props) => props.theme.color.primaryText};
    z-index: 2;
  }
`;

const HiddenFileInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  font-size: 0;
  cursor: pointer;
`;

const ImageRemover = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.color.secondaryText};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.color.primaryText};
  }
`;

const Description = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.color.secondaryText};
`;

const ImageBtn = styled.div`
  width: 100%;
  height: 36px;
  margin-top: 8px;
  padding: 2px 16px;
  box-sizing: border-box;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  text-align: center;

  color: ${(props) => props.theme.color.primaryText};

  border: ${(props) => props.theme.border.primary};
  border-radius: 3px;
`;

function ImageContainer() {
  // const example =
  //   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg';

  const example = '';

  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageRemove = () => {
    setImage('');
    setImagePreview(null);
  };

  useEffect(() => {
    const loadThumbnail = async () => {
      const response = await fetch(example);
      const blob = await response.blob();
      setImage(new File([blob], 'image.jpg', { type: blob.type }));
      setImagePreview(example);
    };

    if (!example || example === '') return;
    loadThumbnail();
  }, [example]);

  useEffect(() => {
    if (!image || image === '') {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
  }, [image]);

  return (
    <ImageBox>
      <div className="image-left-box">
        <ImageUploader
          style={{
            backgroundImage: `url(${imagePreview})`,
          }}
        >
          {!image && <div className="image-uploader-acronym">G</div>}
          <HiddenFileInput
            className="image-uploader-input"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleImageUpload}
          />
          <div className="image-uploader-hint">아이콘 변경</div>
        </ImageUploader>
        <ImageRemover onClick={handleImageRemove}>제거하기</ImageRemover>
      </div>
      <div className="image-right-box">
        <Description>서버 이미지 해상도는 최소 512x512를 추천해요.</Description>
        <ImageBtn>
          이미지 업로드
          <HiddenFileInput
            className="image-upload-button"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleImageUpload}
          />
        </ImageBtn>
      </div>
    </ImageBox>
  );
}

export default ImageContainer;
