package com.ssafy.moemoe.api.controller.university;

import com.ssafy.moemoe.api.service.university.UniversityService;
import com.ssafy.moemoe.db.entity.university.University;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/univs")
public class UniversityController {

    private final UniversityService universityService;

    @GetMapping("/{keyword}")
    public ResponseEntity<?> getUnivSearchResults(@PathVariable String keyword) {

        List<University> univs = universityService.searchUniversity(keyword);


        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("universities", univs);

        return ResponseEntity.ok(univs);
    }

    @GetMapping("")
    public ResponseEntity<?> getAllUnivs() {

        List<University> univs = universityService.getAllUniversity();


        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("universities", univs);

        return ResponseEntity.ok(univs);
    }
}
