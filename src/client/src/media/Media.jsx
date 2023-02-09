/* eslint-disable spaced-comment */
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
import { sendToServer } from './utils/socketUtil';

const MyVideo = styled.video`
  border-radius: 10px;
`;

const webSocketUrl = `ws://${window.location.host}/signal`;
const localRoom = 1;
const localUserName = 'yoon';

//누군가 방에 들어오면 실행할 로직
async function startMedia() {}

const socket = function Media() {
  const myVideoRef = useRef();
  const ws = useRef();
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  let stream;

  if (!ws.current) {
    ws.current = new WebSocket(webSocketUrl);
    ws.current.onopen = () => {
      sendToServer(
        {
          from: localUserName,
          type: 'join',
          data: localRoom,
        },
        ws
      );
    };
    ws.current.onclose = (error) => {};
    ws.current.onerror = (error) => {};

    ws.current.onmessage = (event) => {
      const message = JSON.parse(msg.data);
      switch (message.type) {
        case 'text':
          console.log(
            `Text message from ${message.from} received: ${message.data}`
          );
          break;
        default:
          console.log('Error');
      }
    };
  }
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
};

export default Media;
