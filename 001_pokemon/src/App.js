import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
//appcss 넣어줘야함
import PokemonList from './pages/PokemonList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="pokemon" element={<PokemonList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
