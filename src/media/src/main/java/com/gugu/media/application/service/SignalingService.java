package com.gugu.media.application.service;

import org.springframework.validation.BindingResult;

import java.util.Map;

public interface SignalingService {
    Map displayMainPage(Long id, String uuid);

    Map processRoomSelection(String sid, String uuid, BindingResult binding);

    Map processRoomExit(String sid, String uuid);

    Map displaySelectedRoom(String sid, String uuid);
}
