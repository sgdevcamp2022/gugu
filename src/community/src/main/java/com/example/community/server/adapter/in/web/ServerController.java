package com.example.community.server.adapter.in.web;

import com.example.community.server.adapter.out.persistence.CreateServerRequestDto;
import com.example.community.server.application.port.in.CreateServerCommand;
import com.example.community.server.application.port.in.CreateServerUserCase;
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
    private final CreateServerUserCase serverUserCase;

    @PostMapping("/server")
    public ResponseEntity<ResultDto> createServer(@RequestBody CreateServerRequestDto createServer) {
        CreateServerCommand command = new CreateServerCommand(
                createServer.getServerName(),
                createServer.getImage()
        );
        serverUserCase.createServer(command);
        return ResponseEntity.created(URI.create("/server"))
                .body(ResultDto.builder()
                        .code(201)
                        .message("서버 생성이 완료되었습니다.")
                        .build());
    }
}
