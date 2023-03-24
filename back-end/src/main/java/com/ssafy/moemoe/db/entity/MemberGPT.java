package com.ssafy.moemoe.db.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.hibernate.annotations.Type;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "membergpt")
public class MemberGPT implements UserDetails { //

    @Id
    @GeneratedValue
    @Type(type = "uuid-char")
    @Column(name = "member_id", columnDefinition = "BINARY(32)")
    private UUID memberId;

    @Column(name = "university_id", nullable = false)
    private Long universityId; // 회원 ID (JWT 토큰 내 정보)

    @Column(name = "reward_id", nullable = false)
    private Long rewardId;

    @Column(name = "email", nullable = false, unique = true, length = 100)
    private String email; // 회원 ID (JWT 토큰 내 정보)

    @Column(name = "nickname", nullable = false, length = 16)
    private String nickname; // 닉네임 (JWT 토큰 내 정보)

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY) // Json 결과로 출력하지 않을 데이터에 대해 해당 어노테이션 설정 값 추가
    @Column(name = "password", nullable = false, length = 32)
    private String password;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "entered_at", nullable = false)
    private LocalDateTime enteredAt;

    //기존 ERD에 없었던 권한 필드 추가!!!!!!!!!!
    //관리자, 일반사용자 이렇게 나뉘기 때문
    @ElementCollection(fetch = FetchType.LAZY)
    @Builder.Default
    private List<String> roles = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }

    /**
     * security 에서 사용하는 회원 구분 id
     * 우리는 email로 구분하기로 함
     * @return uid
     */
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Override
    public String getUsername() {
        return this.email;
    }

    /**
     * 계정이 만료되었는지 체크하는 로직
     * 이 예제에서는 사용하지 않으므로 true 값 return
     *
     * @return true
     */
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    /**
     * 계정이 잠겼는지 체크하는 로직
     * 이 예제에서는 사용하지 않으므로 true 값 return
     *
     * @return true
     */
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    /**
     * 계정의 패스워드가 만료되었는지 체크하는 로직
     * 이 예제에서는 사용하지 않으므로 true 값 return
     *
     * @return true
     */
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    /**
     * 계정이 사용가능한지 체크하는 로직
     * 이 예제에서는 사용하지 않으므로 true 값 return
     *
     * @return true
     */
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Override
    public boolean isEnabled() {
        return true;
    }
}