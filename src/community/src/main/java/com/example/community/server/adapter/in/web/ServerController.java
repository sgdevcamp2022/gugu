package com.example.community.server.adapter.in.web;

import com.example.community.server.adapter.out.persistence.CreateServerDto;
import com.example.community.server.adapter.out.persistence.UpdateServerDto;
import com.example.community.server.application.port.in.CreateServerCommand;
import com.example.community.server.application.port.in.RecordServerUseCase;
import com.example.community.server.application.port.in.UpdateServerCommand;
import com.example.community.util.ResultDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequiredArgsConstructor
public class ServerController {
    private final RecordServerUseCase recordServerUseCase;

    @PostMapping("/servers")
    public ResponseEntity<ResultDto> createServer(@RequestBody CreateServerDto createServer) {
        CreateServerCommand command = new CreateServerCommand(
                createServer.getServerName(),
                createServer.getImage()
        );
        recordServerUseCase.createServer(command);
        return ResponseEntity.created(URI.create("/servers"))
                .body(ResultDto.builder()
                        .code(201)
                        .message("서버 생성이 완료되었습니다.")
                        .build());
    }

    @PatchMapping("/servers/{serverId}")
    public ResponseEntity<ResultDto> updateServer(@PathVariable("serverId") Integer id, @RequestBody UpdateServerDto updateServer) {
        UpdateServerCommand command = new UpdateServerCommand(
                updateServer.getServerName(),
                updateServer.getImage()
        );
        recordServerUseCase.updateServer(id, command);
        return ResponseEntity.ok()
                .body(ResultDto.builder()
                        .code(200)
                        .message("서버 수정이 완료되었습니다.")
                        .build());
    }
}
