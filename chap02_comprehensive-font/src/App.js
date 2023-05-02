import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/products/Main";
import ProductDetail from "./pages/products/ProductDetail";
import Register from "./pages/member/Register";
import Login from "./pages/member/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={ <Main/> }/>
          <Route path="product/categories/:categoryCode" element={ <Main/> }/>
          <Route path="search" element={ <Main/> }/>
          <Route path="product/:productCode" element={ <ProductDetail/> }/>
        </Route>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={ <Register/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
