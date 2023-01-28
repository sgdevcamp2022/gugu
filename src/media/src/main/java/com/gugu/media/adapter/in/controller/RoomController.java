package com.gugu.media.adapter.in.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
@Slf4j
@RestController
@RequiredArgsConstructor
public class RoomController {


    // 테스트용 세션 리스트.
    private final ArrayList<TestSession> sessionIdList;
    private final SimpMessagingTemplate template;


    @ResponseBody
    @GetMapping("/test")
    public String test() {
        log.info("testing");
        return "testing";
    }
    @MessageMapping("/test")
    private String test(String sessionId) {
        // 현재 들어온 세션 저장.
        log.info("접속 성공");
        return "1234";
    }

    // 실시간으로 들어온 세션 감지하여 전체 세션 리스트 반환
    @MessageMapping("/video/joined-room-info")
    @SendTo("/sub/video/joined-room-info")
    private ArrayList<TestSession> joinRoom(@Header("simpSessionId") String sessionId, JSONObject ob) {

        // 현재 들어온 세션 저장.
        sessionIdList.add(new TestSession((String) ob.get("from"), sessionId));

        return sessionIdList;
    }

    // caller-info -> callee
    @MessageMapping("/video/caller-info")
    @SendTo("/sub/video/caller-info")
    private Map<String, Object> caller(JSONObject ob) {

        log.info(ob.toJSONString());

        // caller의 정보를 소켓으로 쏴준다.
        Map<String, Object> data = new HashMap<>();
        data.put("toCall", ob.get("toCall"));
        data.put("from", ob.get("from"));
        data.put("signal", ob.get("signal"));

        return data;
    }

    // caller와 callee의 signaling을 위해 callee 정보를 쏴준다.
    @MessageMapping("/video/callee-info")
    @SendTo("/sub/video/callee-info")
    private Map<String, Object> answerCall(JSONObject ob) {

        log.info(ob.toJSONString());

        // accepter의 정보를 소켓으로 쏴준다.
        Map<String, Object> calleeInfo = new HashMap<>();
        calleeInfo.put("signal", ob.get("signal"));
        calleeInfo.put("from", ob.get("from"));
        calleeInfo.put("to", ob.get("to"));
        return calleeInfo;
    }



}