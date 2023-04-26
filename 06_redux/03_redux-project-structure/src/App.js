import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import MenuDetail from './pages/MenuDatail';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*Main를 기본으로 잡는  */}
          <Route index element={<Main />} />
          {/*메뉴 뒤에 뭐가 더 있다고 하면 이렇게 */}
          <Route path="menu">
            <Route index element={<Menus />} />
            <Route path=":id" element={<MenuDetail />} />
          </Route>
          <Route path="login" element={ <Login/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
