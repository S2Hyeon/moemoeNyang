# Classification Flask

Flask 서버는 Spring에서 POST 요청이 오면 Body에 있는 모델명과 리뷰댓글 내용으로 감정분석을 진행하고,  
로그를 남긴 뒤 결과를 JSON형식으로 반환한다.  
학습된 모델 파일은 용량 문제로 구글 드라이브에 업로드 한것을 공유한다.

## app.py

Flask 서버 실행 파일이다.
Spring과 Flask간의 통신이 필요하기 때문에 CORS 설정을 해 주었다.

Spring으로부터 /predict/classification 주소로 POST요청이 오면 Body의 내용을 function.py 함수들을 사용해 결과를 받아온다.  
결과에 따라 각 질병 클래스 별 이름과 정확도를 JSON형식으로 변환하여 Spring으로 Response를 보낸다.

## 가상환경 설정 방법

    conda env create --file environment.yaml

or

    pip install -r requirements.txt
