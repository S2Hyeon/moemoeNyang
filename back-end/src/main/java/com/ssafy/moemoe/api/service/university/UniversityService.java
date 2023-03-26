package com.ssafy.moemoe.api.service.university;

import com.ssafy.moemoe.db.entity.university.University;
import com.ssafy.moemoe.db.repository.university.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UniversityService {

    private UniversityRepository universityRepository;

    @Autowired
    public UniversityService(UniversityRepository universityRepository) {
        this.universityRepository = universityRepository;
    }

    public University getUniversity(long universityId) {
        return universityRepository.findById(universityId);
    }

}
