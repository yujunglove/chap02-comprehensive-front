# Application Programming Interface(애플리케이션 프로그램 인터페이스)

- 소프트웨어 구성 요소가 서로 통신할 수 있게 하는 메커니즘
- EX. `버스 도착 정보 제공 앱`이 `버스 도착 정보 공공 데이터 API`로 특정 버스에 대한 도착 정보를 요청해서 응답 받은 데이터를 앱에 표시한다.
- API 문서에는 개발자가 요청과 응답을 구성하는 방법에 대한 정보가 있다.

## REST API

- REST 아키텍처의 제약 조건을 준수하는 API
  - HTTP URI를 통해 자원을 명시한다.
  - GET, POST, PUT, DELETE 등의 HTTP 메서드를 통해 자원에 대한 행위를 나타낸다.
  - JSON 혹은 XML를 통해 데이터를 주고 받는 것이 일반적이다.

## SPA(Single Page Application)

- 하나의 페이지로 이루어진 어플리케이션
- React, Vue, Angula 등의 JavaScript 라이브러리, 프레임워크를 사용

## MPA(Multi Page Application)

- 여러 개의 페이지로 이루어진 어플리케이션
- 전통적인 웹 어플리케이션 방식

## CSR(Client Side Rendering)

- 초기 로드 시 정적인 리소스(HTML, CSS, JavaScript)를 모두 다운로드하고, HTML 문서에 동적으로 JS를 사용해 DOM을 그린다.
- 이후 새로운 요청이 발생하면 페이지 갱신에 필요한 데이터만 전달 받아 페이지를 갱신한다.
- 초기 로드 시에는 로딩 속도가 길 수 있지만 이후 화면 변경 시에는 깜빡임 없는 좋은 사용자 경험을 제공한다.
- SEO(Search Engine Optimization - 검색 엔진 최적화)에 취약하다.

## SSR(Server Side Rendering)

- 서버에서 렌더링을 하여 완성 된 HTML 파일을 로드해준다.
- 이후 새로운 요청이 발생할 때마다 해당 페이지의 정적 리소스가 다운로드 된다. 따라서 불필요한 부분의 중복 로딩도 있다.
- 초기 로드 시 CSR보다 빠르지만 화면 전환 시에는 새로운 HTML 파일을 서버로부터 다시 응답 받아야 하므로 화면 깜빡임 현상이 있다.
- SEO(Search Engine Optimization - 검색 엔진 최적화)에 유리하다. 
