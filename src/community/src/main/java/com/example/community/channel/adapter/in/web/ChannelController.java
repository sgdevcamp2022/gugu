package com.example.community.channel.adapter.in.web;

import com.example.community.channel.application.port.in.CreateChannelCommand;
import com.example.community.channel.application.port.in.RecordChannelUseCase;
import com.example.community.util.ResultDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequiredArgsConstructor
public class ChannelController {
    private final RecordChannelUseCase recordChannelUseCase;

    @PostMapping(value = {"/{serverId}/{categoryId}/channels", "/{serverId}/channels"})
    public ResponseEntity<ResultDto> createChannel(@PathVariable("serverId") Integer serverId, @PathVariable(name = "categoryId", required = false) Integer categoryId, @RequestBody CreateChannelDto createChannel) {
        CreateChannelCommand command = new CreateChannelCommand(
                createChannel.getChannelName(),
                createChannel.getChannelType(),
                createChannel.getIsPrivate()
        );
        recordChannelUseCase.createChannel(serverId, categoryId, command);
        return ResponseEntity.created(URI.create("/channels"))
                .body(ResultDto.builder()
                        .code(201)
                        .message("채널 생성이 완료되었습니다.")
                        .build());
    }
}
