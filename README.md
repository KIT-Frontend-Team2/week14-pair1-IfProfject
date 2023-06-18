
## 프로젝트 정보

AIF Project (Angular issues finder)
날짜: 2023년 6월 12일 → 2023년 6월 18일

### 날짜별 결과물 정리

|           날짜 |                                                                결과물 |
| --- | --- |
|        6월 12일 | 레퍼런스, 요구사항 분석, 역할분담 |
|        6월 13일 | 스토리보드, 디자인 시안 작성 완료, 비동기 통신, 라우터 추가완료 |
|        6월 14일 | 마크다운 적용하기, 상세페이지 구현완료 |
|        6월 15일 | 필터 기능 구현완료, 목록 리스트 구현완료, RTK 전역상태 관리 완료 |
|        6월 16일 | 페이지네이션 구현하기 완료, 상세페이지, 목록페이지 디자인 수정진행 |
|        6월 17일 | 로딩페이지(스켈레톤UI) 구현완료, 상세페이지, 목록페이지 디자인 수정완료 |
|        6월 18일 | 랜딩페이지, 반응형 웹페이지 구료완료 |

### 배포 주소

[사이트](https://toyifproject.netlify.app/)

### 시연 동영상

## 렌딩 페이지
https://github.com/Jihyeong00/frontend_Develop/assets/115636461/e7b52704-511e-4bac-a21a-41f206a88e17

## 목록 페이지
https://github.com/Jihyeong00/frontend_Develop/assets/115636461/a45457d1-9dea-4adc-a7bf-a4b85918c5a7

## 상세 페이지
https://github.com/Jihyeong00/frontend_Develop/assets/115636461/e24df1f0-fdc8-4830-9a49-3aa6346818a1

### 디자인 정리

https://www.figma.com/file/jEDDDAUaiGljxKvVQkoi8s/IF-Project?type=design&node-id=0%3A1&t=8BGfYq1Lvz8gmR5U-1

### 요구사항 정리

|         요구사항   |                                                               작업자 |
| --- | --- |
|     목록 페이지 |                                                                정자연 |
|     상세 페이지 |                                                                이지형 |
|     RTK 전역상태 |                                                                정자연 |
|       필터 기능 |                                                                이지형 |
|    페이지네이션 |                                                                정자연 |
|      로딩페이지 |                                                                정자연 |
|   반응형 웹페이지 |                                                              정자연 |

### 폴더 구조

```
src
 ├ __mock__
 │    ├ issues.api.js
 │    ├ issuesList.data.js
 │    └ handler.js
 ├ assets/images
 ├ apis
 │	 ├ @core.js
 │   └ issue.js
 ├ hooks
 ├ pages
 │	  ├ detail/index.js
 │	  ├ error/index.js
 │	  ├ list/index.js
 │	  └ main/index.js
 ├ styles
 │	  ├ common.js
 │	  ├ global.js
 │	  ├ styles.css
 │	  └ theme.js
 ├ store/store.js
 ├ reducer
 │	  ├ comment.js
 │	  ├ detail.js
 │	  ├ index.js
 │	  └ issue.js
 ├ routes/routing.js
 ├ utils
 │	  ├ color-helper.js
 │	  └ time-helper.js
 └ components
 	    ├ buttons 
 	    │    ├ Top.js 
 		  │    └ Back.js
 	    ├ detail
 	    │		 ├ Comments.js
 	    │    *├* one-comment.js
 	    │    └ Skeleteon.js
      ├ main
	    │  ├ FirstSection.js
	    │  ├ SecondSection.js
	    │  ├ ThirdSection.js
	    │  ├ FourthSection.js
	    │  ├ FifthSection.js
	    │  └ RollingSection.js
		  └ list 
		     ├ list 
	       │  *├ issue-list.js*
		     │  *├ loading-list.js*
		     │  └ one-issue.js
	       *├* searchBox/searchBox.js
	       └ pagination/pagination.js
```

### 페이지 흐름도

![Untitled](https://github.com/JuramLee/MovieTrailer_project2/assets/115636461/4dda50ad-c612-4ca6-9b10-cba0bb1d57e4)

### 사용기술 스택 목록

```
🖥️ FrontEnd : HTML / CSS / JavaScript / React
🌈 라이브러리 : material-ui / react-router / swiper / redux-tookit / axios / msw / react-markdown / framer-motion / aos / styled-reset / styled-component 
🤼 협업도구 : Git + GitHub / Discord / Figma / prettier / eslint / husky
```
