package com.example.community.server.adapter.in.web;

import com.example.community.server.adapter.out.persistence.CreateServerRequestDto;
import com.example.community.server.application.port.in.CreateServerCommand;
import com.example.community.server.application.port.in.CreateServerUseCase;
import com.example.community.util.ResultDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequiredArgsConstructor
public class ServerController {
    private final CreateServerUseCase serverUseCase;

    @PostMapping("/server")
    public ResponseEntity<ResultDto> createServer(@RequestBody CreateServerRequestDto createServer) {
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
}
