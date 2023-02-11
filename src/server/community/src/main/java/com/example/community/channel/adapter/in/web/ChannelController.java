package com.example.community.channel.adapter.in.web;

import com.example.community.channel.adapter.out.persistence.CreateChannelDto;
import com.example.community.channel.adapter.out.persistence.UpdateChannelDto;
import com.example.community.channel.application.port.in.CreateChannelCommand;
import com.example.community.channel.application.port.in.RecordChannelUseCase;
import com.example.community.channel.application.port.in.UpdateChannelCommand;
import com.example.community.util.ResultDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PatchMapping("/channels/{channelId}")
    public ResponseEntity<ResultDto> updateChannel(@PathVariable("channelId") Integer channelId, @RequestBody UpdateChannelDto updateChannelDto) {
        UpdateChannelCommand command = new UpdateChannelCommand(
                updateChannelDto.getChannelName(),
                updateChannelDto.getDescription()
        );
        recordChannelUseCase.updateChannel(channelId, command);
        return ResponseEntity.ok()
                .body(ResultDto.builder()
                        .code(200)
                        .message("채널 수정이 완료되었습니다.")
                        .build());
    }
}
