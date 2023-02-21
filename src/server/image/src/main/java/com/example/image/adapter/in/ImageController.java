package com.example.image.adapter.in;

import com.example.image.application.port.in.RecordImageUseCase;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ImageController {
    private final RecordImageUseCase recordImageUseCase;

    public ImageController(RecordImageUseCase recordImageUseCase) {
        this.recordImageUseCase = recordImageUseCase;
    }

    @PostMapping("/image-upload")
    public ResponseEntity<String> uploadImage(@RequestPart MultipartFile file) {
        String imagePath = recordImageUseCase.storeImage(file);
        return ResponseEntity.ok()
                .body(imagePath);
    }
}
