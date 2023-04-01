package com.ssafy.moemoe.api.service.university;

import com.ssafy.moemoe.db.entity.university.University;
import com.ssafy.moemoe.db.repository.university.UniversityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class UniversityService {

    private final UniversityRepository universityRepository;


    public University getUniversity(long universityId) {
        return universityRepository.findById(universityId);
    }

    public List<University> getAllUniversity() {
        return universityRepository.findAll();
    }

    public List<University> searchUniversity(String keyword) {
        return universityRepository.findByNameContaining(keyword);
    }

}
