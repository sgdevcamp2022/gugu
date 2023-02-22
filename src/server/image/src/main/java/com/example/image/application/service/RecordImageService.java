package com.example.image.application.service;

import com.example.image.application.port.in.RecordImageUseCase;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class RecordImageService implements RecordImageUseCase {

    @Value("${file.server.path}")
    private String uploadPath;

    @Value("${file.upload.dir}")
    private String uploadDir;


    @Override
    public String storeImage(MultipartFile image) {
        String imageName = StringUtils.cleanPath(image.getOriginalFilename());
        Path location = Paths.get(Paths.get(uploadDir) + File.separator + imageName);
        try {
            Files.copy(image.getInputStream(), location, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException exception) {
            throw new RuntimeException(exception.getMessage());
        }
        return uploadPath + imageName;
    }
}
