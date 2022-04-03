import { Routes, Route } from "react-router-dom";
import { Home, MyPokemon, PokemonDetail } from "./pages";
import { Global } from '@emotion/react';
import { GlobalStyles } from './_styles';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="my-pokemon" element={<MyPokemon />} />
          <Route path="detail/:name" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
