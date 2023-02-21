package com.example.image.application.port.in;

import org.springframework.web.multipart.MultipartFile;

public interface RecordImageUseCase {
    String storeImage(MultipartFile file);
}
