FROM python:3.8-slim-buster

COPY . /home/A801

# 작업 디렉토리 생성
WORKDIR /home/A801

# 필요한 패키지 설치
RUN pip install -r requirements.txt

RUN apt-get update && apt-get install -y libgl1-mesa-glx

# 컨테이너 시작 시 실행할 명령어
CMD [ "python", "app.py" ]
