/* 앱 기본 설정 (향후 동일)
1. 불필요한 파일들을 제거하고 App.js와 index.js 파일만 남겨 둔다.
2. index.js 파일의 기본 상태를 아래와 같이 만들어 화면 렌더링을 확인한다.


BrowserRouter 컴포넌트를 이용한 라우팅 설정 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Menu from './pages/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 루트 경로로 요청 시에 Main 컴포넌트를 보여 준다. */}
          {/* <Route path="/" element={ <Main/>}/>*/}

             {/* 인덱스로 설정해두면 루트 요청과 동일하다. */}
             <Route index element={ <Main/>}/>
             
             <Route path="/about" element={ <About/> }/>
             <Route path="/menu" element={ <Menu/> }/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

//이 파일에 내용에 대해서App이라는 내용으로 export 하겠다.
export default App;
