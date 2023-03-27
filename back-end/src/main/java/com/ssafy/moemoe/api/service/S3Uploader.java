package com.ssafy.moemoe.api.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Optional;
import java.util.UUID;

@Service
public class S3Uploader {

    @Autowired
    AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String S3Bucket;

//    public String upload(MultipartFile multipartFile, String dirName) throws IOException {
//        File uploadFile = convert(multipartFile).orElseThrow(() -> new IllegalArgumentException("error : MultipartFile -> file convert fail"));
//        return upload(uploadFile, dirName);
//    }

    // S3로 파일 업로드하기
    public String upload(MultipartFile uploadFile, String dirName) throws IOException {
        String ext = uploadFile.getOriginalFilename().substring(uploadFile.getOriginalFilename().lastIndexOf('.') + 1);
        String o_FileName = uploadFile.getOriginalFilename().substring(uploadFile.getOriginalFilename().lastIndexOf('.'));
        String StrToday = (new SimpleDateFormat("yyyyMMddHHmmss").format(Calendar.getInstance().getTime()));
        String strFileName = "_" + StrToday + "." + ext;

        String fileName = dirName + "/" + UUID.randomUUID() + strFileName;  // S3에 저장된 파일 이름

        String uploadImageUrl = putS3(uploadFile, fileName); // s3로 업로드
        return fileName;
    }

    // 로컬에 저장된 이미지 지우기
    private void removeNewFile(File targetFile) {
        if (targetFile.delete()) {
            return;
        }
    }

    // S3로 업로드
    private String putS3(MultipartFile uploadFile, String fileName) throws IOException {
        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentType(uploadFile.getContentType());
        objectMetadata.setContentLength(uploadFile.getSize());

        InputStream inputStream = uploadFile.getInputStream();
        amazonS3Client.putObject(new PutObjectRequest(S3Bucket, fileName, inputStream, objectMetadata)
                .withCannedAcl(CannedAccessControlList.PublicRead));

        String result = amazonS3Client.getUrl(S3Bucket, fileName).toString();
        return result;
    }

    // 로컬에 파일 업로드
    private Optional<File> convert(MultipartFile file) throws IOException {
        String ext = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf('.') + 1);
        String o_FileName = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf('.'));
        String StrToday = (new SimpleDateFormat("yyyyMMddHHmmss").format(Calendar.getInstance().getTime()));
        String strFileName = "_" + StrToday + "." + ext;

        File convertFile = new File(System.getProperty("user.dir") + "/" + strFileName);
        if (convertFile.createNewFile()) { // 바로 위에서 지정한 경로에 File이 생성됨 (경로가 잘못되었다면 생성 불가능)
            try (FileOutputStream fos = new FileOutputStream(convertFile)) { // FileOutputStream 데이터를 파일에 바이트 스트림으로 저장하기 위함
                fos.write(file.getBytes());
            }
            return Optional.of(convertFile);
        }
        return Optional.empty();
    }

}
