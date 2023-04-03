# 베이스 이미지
FROM node:18.15.0 as builder

# 깃에서 가져온 소스 코드 이미지 내부 경로로 복사
COPY . /home/A801

COPY .env /home/A801/.env

# 이미지 내부 작업공간 설정
WORKDIR /home/A801

# 앱 의존성 설치
COPY package*.json yarn.lock ./

RUN yarn install

# 앱 빌드
RUN yarn run build

# nginx 이미지
FROM nginx:alpine

# react 빌드파일 외부와 마운트된 디렉토리로 복사
COPY --from=builder /home/A801/build /home/A801/build

COPY front.conf /etc/nginx/conf.d/default.conf

# 컨테이너 시작 시 nginx 실행
CMD ["nginx", "-g", "daemon off;"]
