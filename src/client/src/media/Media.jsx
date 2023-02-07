/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-undef */
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import MicOff from './imgs/MicOff';
import MicOn from './imgs/MicOn';
import VideoOff from './imgs/VideoOff';
import VideoOn from './imgs/VideoOn';

const MyVideo = styled.video`
  border-radius: 10px;
`;

function Media() {
  const myVideoRef = useRef();
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  let stream;
  useEffect(() => {
    const getUserMedia = async () => {
      try {
        stream = await window.navigator.mediaDevices.getUserMedia({
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

  const handleCameraBtn = () => {
    stream.getVideoTracks().forEach((track) => {
      track.enabled = !track.enabled;
    });
  };

  const handleMicBtn = () => {
    stream.getAudioTracks().forEach((track) => {
      track.enabled = !track.enabled;
    });
  };

  return (
    <div>
      <div>
        <MyVideo ref={myVideoRef} autoPlay playsInline />
      </div>
      <button onClick={handleCameraBtn} type="button">
        {videoOn ? <VideoOn /> : <VideoOff />}
      </button>
      <button onClick={handleMicBtn} type="button">
        {micOn ? <MicOn /> : <MicOff />}
      </button>
    </div>
  );
}

export default Media;
