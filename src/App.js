import { Routes, Route } from "react-router-dom";
import { Home, MyPokemon, PokemonDetail } from "pages";
import { Layout } from 'containers';
import { Global } from '@emotion/react';
import { GlobalStyles } from './_styles';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="my-pokemons" element={<MyPokemon />} />
          <Route path="detail/:name" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
