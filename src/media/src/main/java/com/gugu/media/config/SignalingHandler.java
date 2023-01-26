package com.gugu.media.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gugu.media.model.SignalData;
import com.gugu.media.model.SignalType;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.socket.*;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.LinkedList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
public class SignalingHandler extends TextWebSocketHandler {
    List<WebSocketSession> sessions = new LinkedList<WebSocketSession>();
    ConcurrentHashMap<String, WebSocketSession> sessionMap = new ConcurrentHashMap<String, WebSocketSession>();
    final ObjectMapper map1 = new ObjectMapper();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);
        super.afterConnectionEstablished(session);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        final String msg1 = message.getPayload();
        SignalData sigData = map1.readValue(msg1, SignalData.class);
        log.info("Receive message from client : ", msg1);
        SignalData sigResp = new SignalData();
        // sigData가 LOGIN_TYPE일 경우 userId 제공
        if (sigData.getType().equalsIgnoreCase(SignalType.Login.toString())) {
            SignalData sigResp2 = new SignalData();
            String userId = UUID.randomUUID().toString();
            sigResp2.setUserId("signaling");
            sigResp2.setType(SignalType.UserId.toString());
            sigResp2.setData(userId);
            sessionMap.put(userId, session);
            session.sendMessage(new TextMessage(map1.writeValueAsString(sigResp2)));
        } else if (sigData.getType().equalsIgnoreCase(SignalType.NewMember.toString())) {
            // n개의 Connection(Session 을 참여하는 모두에게)에게 각자 UserId, Type를 보낸다.
            sessionMap.values().forEach(a -> {
                SignalData sigResp2 = new SignalData();
                sigResp2.setUserId(sigData.getUserId());
                sigResp2.setType(SignalType.NewMember.toString());
                try {
                    if (a.isOpen()) {
                        log.info("Sending New Member from", sigData.getUserId());
                        a.sendMessage(new TextMessage(map1.writeValueAsString(sigResp2)));
                    }
                } catch (Exception e) {
                    log.error("Error Sending message:", e);
                }
            });
        } else if (sigData.getType().equalsIgnoreCase(SignalType.Offer.toString())) {
            sigResp = new SignalData();
            sigResp.setUserId(sigData.getUserId());
            sigResp.setType(SignalType.Offer.toString());
            sigResp.setData(sigData.getData());
            sigResp.setToUid(sigData.getToUid());
            sessionMap.get(sigData.getToUid()).sendMessage(new TextMessage(map1.writeValueAsString(sigResp)));
        } else if (sigData.getType().equalsIgnoreCase(SignalType.Answer.toString())) {
            sigResp = new SignalData();
            sigResp.setUserId(sigData.getUserId());
            sigResp.setType(SignalType.Answer.toString());
            sigResp.setData(sigData.getData());
            sigResp.setToUid(sigData.getToUid());
            sessionMap.get(sigData.getToUid()).sendMessage(new TextMessage(map1.writeValueAsString(sigResp)));
        } else if (sigData.getType().equalsIgnoreCase(SignalType.Ice.toString())) {
            sigResp = new SignalData();
            sigResp.setUserId(sigData.getUserId());
            sigResp.setType(SignalType.Ice.toString());
            sigResp.setData(sigData.getData());
            sigResp.setToUid(sigData.getToUid());
            sessionMap.get(sigData.getToUid()).sendMessage(new TextMessage(map1.writeValueAsString(sigResp)));
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        sessions.remove(session);
        super.afterConnectionClosed(session, status);
    }
}
