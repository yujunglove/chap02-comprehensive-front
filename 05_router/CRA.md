# CRA(Create React App)

React Application 개발을 위해서는 Babel, Webpack(웹 애플리케이션 자원 번들링) 등의 환경이 필요하다.
React에서 주로 많이 사용하는 도구 및 설정을 포함하고 있는 Create React App을 사용하면 복잡한 설정 없이
한 번에 React 개발 환경을 구성하고 이용할 수 있다. 

## Create React App으로 프로젝트 생성

- VS Code에서 ctrl + ` 을 눌러 터미널 열기
  - `dir` : 경로의 폴더와 파일들의 목록 출력
  - `cd` : 디렉토리 이동
  - 작성 중 `tab`을 입력하면 자동 완성
- `npm` : Node.js의 의존성과 패키지 관리를 위한 패키지 매니저
- `npx` : Node 패키지를 실행시키는 하나의 도구로 `npm5.2` 버전부터 제공
  - 기본적으로 실행 되어야 할 패키지가 경로에 있는지 먼저 확인.
  - 경로에 있다면 그대로 실행하고 없다면 최신 버전의 패키지를 설치를 한 후에 실행
- `npx create-react-app "사용할어플이름"` 을 입력
-  "./"는 현재 경로를 의미하며 폴더명과 동일한 이름의 앱을 만듦
```
상위디렉토리\05_router\01_react-router-config> npx create-react-app ./
```

## CRA 프로젝트 실행
- `npm start` 라는 명령을 이용해서 실행 테스트
- `ctrl + c` 를 눌러 동작 취소 
```
상위디렉토리\05_router\01_react-router-config> npm start
```

## CRA 프로젝트 구조
- node_modules
  - 리액트 개발 환경을 위해 설치 된 라이브러리 디렉토리
- public
  - 정적 리소스 보관 디렉토리
  - index.html : body가 비어있는 HTML 파일로 `<div id="root"></div>`가 존재
  - manifest.json : 앱에 대한 정보를 담고 있는 JSON 파일
  - robots.txt : SEO(검색 엔진 최적화)와 관련 된 파일
  - 지금 단계에서는 크게 구조를 건드릴 필요 없이 그냥 두고 사용한다.
- src
  - index.js : App.js에 정의 된 내용을 index.html의 div root에 렌더링 하는 내용 기재
  - App.js : 화면에 보여줄 컴포넌트 정의하는 파일
  - 나머지 CSS 파일, 모니터링, 테스트 관련 파일은 우선 제거하고 사용한다.
- .gitignore : git에서 추적하지 않고 무시할 파일의 목록을 명시하며 설정과 환경에 관련 된 파일들이 작성 되어 있다. 
  - node_modules도 포함 되어 있으므로 node_modules가 경로에 없는 상태일 때 동작을 시키기 위해서는 터미널에서 `npm install` 명령을 통해 먼저 모듈을 설치한 뒤 동작 시켜야 한다. package.json이라는 파일과 node modules와 싱크를 맞춰서 다운로드한다.
- package.json : 프로젝트에 대한 메타정보, 설치한 패키지의 의존성 및 버전을 관리하는 파일
- package-lock.json : 의존성 트리(node_modules)에 대한 정보를 가지고 있는 파일

## 패키지 추가

- 리액트 라우터 돔 패키지를 추가한다.
```
npm install react-router-dom@6
```

- 프로젝트 내 설치, 전역 설치 두 가지 옵션이 있는데 별도로 -g 라는 옵션을 붙이지 않으면 해당 프로젝트에만 반영된다.
- package.json를 열어보면 react-router-dom이 추가되어 있는 것을 확인할 수 있다.
- 만약 잘못 추가 했다면 `npm uninstall react-router-dom@6` 을 수행한다. 
