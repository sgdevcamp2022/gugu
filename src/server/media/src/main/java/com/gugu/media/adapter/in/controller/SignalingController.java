package com.gugu.media.adapter.in.controller;

import com.gugu.media.application.service.SignalingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
public class SignalingController {
    private final SignalingService signalingService;

    @GetMapping({"", "/", "/index", "/home", "/main"})
    public Map displayMainPage(final Long id, final String uuid) {
        return this.signalingService.displayMainPage(id, uuid);
    }
//
    @PostMapping(value = "/room", params = "action=create")
    public Map processRoomSelection(@ModelAttribute("id") final String sid, @ModelAttribute("uuid") final String uuid, final BindingResult binding) {
        log.info("room created");
        return this.signalingService.processRoomSelection(sid, uuid, binding);
    }
//
    @GetMapping("/room/{sid}/user/{uuid}/exit")
    public ResponseEntity<String> processRoomExit(@PathVariable("sid") final String sid, @PathVariable("uuid") final String uuid) {
        if(this.signalingService.processRoomExit(sid, uuid).equals(null)){
            return new ResponseEntity<>("해당하는 room 정보가 없습니다", HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>("exited Success", HttpStatus.OK);
    }

    @GetMapping("/room/{sid}/user/{uuid}")
    public Map displaySelectedRoom(@PathVariable("sid") final String sid, @PathVariable("uuid") final String uuid) {
        return this.signalingService.displaySelectedRoom(sid, uuid);
    }
}
