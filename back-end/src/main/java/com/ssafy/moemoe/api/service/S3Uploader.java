package com.ssafy.moemoe.api.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Objects;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class S3Uploader {


    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String S3Bucket;

    public String upload(MultipartFile multipartFile, String dirName) throws IOException {
        File uploadFile = convert(multipartFile).orElseThrow(() -> new IllegalArgumentException("error : MultipartFile -> file convert fail"));
        return upload(uploadFile, dirName);
    }

    // S3로 파일 업로드하기
    public String upload(File uploadFile, String dirName) throws IOException {
        String fileName = dirName + "/" + Math.random() * 1000 + "_" + LocalDate.now() + uploadFile.getName();
        String uploadImageUrl = putS3(uploadFile, fileName);
        removeNewFile(uploadFile); // 로컬에 생성된 File 삭제 (MultipartFile -> File 전환 하며 로컬에 파일 생성됨)

        return uploadImageUrl; // 업로드 된 파일의 S3 URL 주소 반환
    }

    // 로컬에 저장된 이미지 지우기
    private void removeNewFile(File targetFile) {
        if (targetFile.delete()) {
            log.info("파일이 삭제되었습니다.");
        } else {
            log.info("파일이 삭제되지 못했습니다.");
        }
    }

    // S3로 업로드
    private String putS3(File uploadFile, String fileName) {
        amazonS3Client.putObject(new PutObjectRequest(S3Bucket, fileName, uploadFile).withCannedAcl(
                CannedAccessControlList.PublicRead));
        return amazonS3Client.getUrl(S3Bucket, fileName).toString();
    }

    // 로컬에 파일 업로드
    private Optional<File> convert(MultipartFile file) throws IOException {
        File convertFile = new File(Objects.requireNonNull(file.getOriginalFilename()));
        if (convertFile.createNewFile()) {
            try (FileOutputStream fos = new FileOutputStream(convertFile)) {
                fos.write(file.getBytes());
            }
            return Optional.of(convertFile);
        }

        return Optional.empty();
    }

}
