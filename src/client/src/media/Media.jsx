/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-undef */
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const MyVideo = styled.video`
  border-radius: 10px;
`;

function Media() {
  const myVideoRef = useRef();

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await window.navigator.mediaDevices.getUserMedia({
          video: {
            width: 400,
            height: 400,
          },
          audio: true,
        });
        myVideoRef.current.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    };
    getUserMedia();
  }, []);

  return (
    <div>
      <div>
        <MyVideo ref={myVideoRef} autoPlay playsInline />
      </div>
    </div>
  );
}

export default Media;
