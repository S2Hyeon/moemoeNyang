package com.ssafy.moemoe.api.controller.university;

import com.ssafy.moemoe.api.response.university.UniversityResultResp;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/univs")
public class UniversityController {

    @GetMapping("/{keyword}")
    public ResponseEntity<?> getUnivSearchResults(@PathVariable String keyword) {

        List<UniversityResultResp> univs = new ArrayList<>();

        String[] names = {"서울대학교", "서울무슨대학교","서울산대학교"};

        for (int i = 1; i <= 5; i++) {
            univs.add(UniversityResultResp.builder()
                    .university_id(i)
                    .address("대충 서울 아무 주소")
                    .name(names[i % 3])
                    .build());
        }

        return ResponseEntity.ok(univs);
    }

    @GetMapping("")
    public ResponseEntity<?> getUnivs() {

        List<UniversityResultResp> univs = new ArrayList<>();

        String[] names = {"서울대학교", "연세대학교", "카이스트대학교", "하버드대학교","서울무슨대학교","서울산대학교"};

        for (int i = 1; i <= 20; i++) {
            univs.add(UniversityResultResp.builder()
                    .university_id(i)
                    .address("대충 전국에 아무 주소")
                    .name(names[i % 6])
                    .build());
        }

        return ResponseEntity.ok(univs);
    }
}
