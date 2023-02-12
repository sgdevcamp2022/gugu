/* eslint-disable prefer-destructuring */
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
import { sendToServer, handleErrorMessage } from './utils/socketUtil';
import defaultConstraints from './utils/constants';

const MyVideo = styled.video`
  border-radius: 10px;
`;

// WebRTC STUN servers
const peerConnectionConfig = {
  iceServers: [
    { urls: 'stun:stun.stunprotocol.org:3478' },
    { urls: 'stun:stun.l.google.com:19302' },
  ],
};

const webSocketUrl = `ws://${window.location.host}/signal`;
const localRoom = 1;
const localUserName = 'yoon';

//누군가 방에 들어오면 실행할 로직
async function startMedia() {
  console.log('d');
}

function Media() {
  const myVideoRef = useRef();
  const remoteVideoRef = useRef();
  const ws = useRef();
  const localStreamRef = useRef();
  const myPeerConnectionRef = useRef();
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);

  const getMedia = (constraints) => {
    const getLocalMediaStream = (mediaStream) => {
      localStreamRef.current = mediaStream;
      myVideoRef.current.srcObject = mediaStream;
      localStreamRef.current
        .getTracks()
        .forEach((track) =>
          myPeerConnectionRef.current.addTrack(track, localStreamRef.current)
        );
    };
    const handleGetUserMediaError = (error) => {
      switch (error.name) {
        case 'NotFoundError':
          window.alert(
            'Unable to open your call because no camera and/or microphone were found.'
          );
          break;
        case 'SecurityError':
          window.alert('SecurityError');
          break;
        case 'PermissionDeniedError':
          window.alert('reject permission');
          break;
        default:
          window.alert(
            `Error opening your camera and/or microphone: ${error.message}`
          );
          break;
      }
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(getLocalMediaStream)
      .catch(handleGetUserMediaError);
  };

  const handleOfferMessage = (message) => {
    console.log('Accepting Offer Message');
    const desc = new RTCSessionDescription(message.sdp);
    //TODO test this
    if (desc != null && message.sdp != null) {
      console.log(
        `RTC Signalling state: ${myPeerConnection.current.signalingState}`
      );
      myPeerConnectionRef.current
        .setRemoteDescription(desc)
        .then(() => {
          console.log('Set up local media stream');
          return navigator.mediaDevices.getUserMedia(mediaConstraints);
        })
        .then((giveStream) => {
          log('-- Local video stream obtained');
          localStreamRef.current = giveStream;
          try {
            myVideoRef.current.srcObject = localStream;
          } catch (error) {
            myVideoRef.current.src = window.URL.createObjectURL(giveStream);
          }
          console.log('-- Adding stream to the RTCPeerConnection');
          localStreamRef.current
            .getTracks()
            .forEach((track) =>
              myPeerConnectionRef.current.addTrack(
                track,
                localStreamRef.current
              )
            );
        })
        .then(() => myPeerConnectionRef.current.createAnswer())
        .then((answer) =>
          myPeerConnectionRef.current.setLocalDescription(answer)
        )
        .then(() => {
          sendToServer({
            from: localUserName,
            type: 'answer',
            sdp: myPeerConnectionRef.current.localDescription,
          });
        })
        .catch(handleErrorMessage);
    }
  };

  const handleAnswerMessage = (message) => {
    myPeerConnectionRef.current
      .setRemoteDescription(message.sdp)
      .catch(handleErrorMessage);
  };

  const handleNewICECandidateMessage = (message) => {
    const candidate = new RTCIceCandidate(message.candidate);
    console.log(`Adding received ICE candidate: ${JSON.stringify(candidate)}`);
    myPeerConnectionRef.current
      .addIceCandidate(candidate)
      .catch(handleErrorMessage);
  };
  const handleICECandidateEvent = (event) => {
    if (event.candidate) {
      sendToServer({
        from: localUserName,
        type: 'ice',
        candidate: event.candidate,
      });
      console.log('ICE Candidate Event: ICE candidate sent');
    }
  };

  const handleTrackEvent = (event) => {
    console.log('Track Event: set stream to remote video element');
    remoteVideoRef.current.srcObject = event.streams[0];
  };

  const createPeerConnection = () => {
    myPeerConnectionRef.current = new RTCPeerConnection(peerConnectionConfig);

    // event handlers for the ICE negotiation process
    myPeerConnectionRef.current.onicecandidate = handleICECandidateEvent;
    myPeerConnectionRef.current.ontrack = handleTrackEvent;
  };
  const handleNegotiationNeededEvent = () => {
    myPeerConnectionRef.current
      .createOffer()
      .then((offer) => myPeerConnectionRef.current.setLocalDescription(offer))
      .then(() => {
        sendToServer({
          from: localUserName,
          type: 'offer',
          sdp: myPeerConnectionRef.current.localDescription,
        });
        console.log('Negotiation Needed Event: SDP offer sent');
      })
      .catch((reason) => {
        handleErrorMessage(`failure to connect error: ${reason}`);
      });
  };

  const handlePeerConnection = () => {
    createPeerConnection();
    getMedia(defaultConstraints);
    if (message.data === 'true') {
      myPeerConnectionRef.current.onnegotiationneeded =
        handleNegotiationNeededEvent;
    }
  };

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
        case 'offer':
          console.log('Signal OFFER received');
          handleOfferMessage(message);
          break;
        case 'answer':
          log('Signal ANSWER received');
          handleAnswerMessage(message);
          break;
        case 'ice':
          log('Signal ICE Candidate received');
          handleNewICECandidateMessage(message);
          break;
        case 'join':
          handlePeerConnection(message);
          break;
        default:
          handleErrorMessage('[ERROR]: Invalid Message');
      }
    };
  }
  useEffect(() => {
    getMedia(defaultConstraints);
  }, []);

  const handleCameraBtn = () => {
    localStreamRef.current.getVideoTracks().forEach((track) => {
      track.enabled = !track.enabled;
    });
  };

  const handleMicBtn = () => {
    localStreamRef.current.getAudioTracks().forEach((track) => {
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
      <MyVideo ref={remoteVideoRef} autoPlay playsInline />
    </div>
  );
}

export default Media;
