package com.example.community.server.adapter.in.web;

import com.example.community.server.adapter.out.persistence.CreateServerDto;
import com.example.community.server.adapter.out.persistence.ModifyServerDto;
import com.example.community.server.application.port.in.CreateServerCommand;
import com.example.community.server.application.port.in.CreateServerUseCase;
import com.example.community.server.application.port.in.ModifyServerCommand;
import com.example.community.server.application.port.in.ModifyServerUseCase;
import com.example.community.util.ResultDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequiredArgsConstructor
public class ServerController {
    private final CreateServerUseCase serverUseCase;
    private final ModifyServerUseCase modifyServerUseCase;

    @PostMapping("/server")
    public ResponseEntity<ResultDto> createServer(@RequestBody CreateServerDto createServer) {
        CreateServerCommand command = new CreateServerCommand(
                createServer.getServerName(),
                createServer.getImage()
        );
        serverUseCase.createServer(command);
        return ResponseEntity.created(URI.create("/server"))
                .body(ResultDto.builder()
                        .code(201)
                        .message("서버 생성이 완료되었습니다.")
                        .build());
    }

    @PatchMapping("/servers/{id}")
    public ResponseEntity<ResultDto> updateServer(@PathVariable("id") int id, @RequestBody ModifyServerDto modifyServer) {
        ModifyServerCommand command = new ModifyServerCommand(
                modifyServer.getServerName(),
                modifyServer.getImage()
        );
        modifyServerUseCase.modifyServer(id, command);
        return ResponseEntity.ok()
                .body(ResultDto.builder()
                        .code(200)
                        .message("서버 수정이 완료되었습니다.")
                        .build());
    }
}
