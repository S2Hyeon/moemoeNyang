# 특화-Sub PJT 2 평가

🔔 본 프로젝트는 **SSAFY 특화 프로젝트 2주차** 관련 팀 활동 내역을 정리한 공간입니다.

## 2023-03-17

### Gitlab에서 Github로 반출하기 (50메가 이상의 파일 제거 포함)

https://velog.io/@rurry/GitHub-Large-File-%EC%A7%80%EC%9A%B0%EA%B8%B0#4%ED%8A%B8
https://velog.io/@sugenius77/Gitlab%EC%97%90%EC%84%9C-Github%EB%A1%9C-%EB%AF%B8%EB%9F%AC%EB%A7%81

참고할만한 게시글이 많았는데도 삽질을 많이해서 정리해둔다.

자바설치
먼저 https://www.java.com/ko/download/ie_manual.jsp?locale=ko자바를 설치한다.

bfg-repo-cleaner 다운로드
https://rtyley.github.io/bfg-repo-cleaner/ 이곳에서
/download 폴더에 bfg.jar로 파일을 다운받는다.

git을 bare로 클론하기
/download/example 폴더로 이동해서 git clone --mirror를 한다.
git clone --mirror https://gitlab.com/NICKNAME/GITNAME.git .

bfg-repo-cleaner 실행하기
다시 /download 폴더로 이동해서 아래를 실행한다.
java -jar bfg.jar --strip-blobs-bigger-than 50M --no-blob-protection example
이때 '--no-blob-protection'는 protected commits도 제거하도록 하는 옵션이다.

git을 mirror로 push하기
다시 /download/example폴더로 이동해서
push를 하면 된다.
(필요한 경우 git reflog expire --expire=now --all && git gc --prune=now --aggressive를 실행하여 파일을 완전히 삭제한 후)
git push --mirror https://github.com/nickname/newrepo.git

이제 gitlab의 GITNAME레포가 github의 newrepo로 미러링 되었다.

github에 미러링된 newrepo는 gitlab의 원본 레포인 GITNAME와 커밋 히스토리가 다르고, 50메가가 넘는 파일들은 removed 상태이다. 이렇게 두 깃이 달라지는 점이 bfg-repo-cleaner와 git-filter-branch의 차이이다.
