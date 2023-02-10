# SRS tobe

## 프로젝트 개요
- 개요 : 스마트레이더시스템 홈페이지 리뉴얼 (PC버전)
- 기간 : 2022.11.07. ~ 2022.12.31.
- 퍼블가이드 : [markup_guide](https://eunseok0722.github.io/srstobe/markup_guide/index.html)
- 퍼블리스트: [index.html](https://eunseok0722.github.io/srstobe/index.html)

기본가이드
---
### 해상도
- 기본 해상도 : 1920 X 1080
- 최소 해상도 : 1280 X 720

### 폰트
- 콘텐츠 기본폰트: Garet
- 대메뉴 포인트 폰트: poppins

### 포인트 컬러
- 포인트 컬러1 : #0054a6
- 포인트 컬러2 : #008aff

### 작업세팅
- npm v.16.16.0
- vue, vuex, vue-router 사용
- gulp-sass, gulp-liveserver 사용 (터미널 cd dev -> npm i -> gulp)

### 디렉토리 구조
- assets : 컴파일된 css, font, image, 동작구현용 js
- components : Vue components
  - about : Depth 1 about 관련 컴포넌트
  - applications : Depth 1 applications 관련 컴포넌트
  - common : 공통으로 사용되는 컴포넌트 모임
  - main : Depth 1 applications 관련 컴포넌트
  - modules : 각 컴포넌트별 텍스트, 이미지 등 데이터 모임
  - products : Depth 1 products 관련 컴포넌트
  - app.js : Vue 설정파일
  - router.js : Vue-router 설정파일
  - store.js : Vuex 설정파일
- dev : gulp 구동을 위한 자료 모음
- markup_guide : 마크업 가이드 자료 모음
- pages : 컴파일된 html 파일
- index.html : 마크업리스트


