package com.ssafy.moemoe.db.repository.cat;

import com.ssafy.moemoe.api.response.cat.CatListResp;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface CatCustomRepository {
    List<CatListResp> getCats(UUID memberId, Long universityId);
}
