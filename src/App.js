/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { usePokemon } from "store/pokemons/context";
import { Routes, Route } from "react-router-dom";
import { Home, MyPokemon, PokemonDetail } from "pages";
import { ErrorPage, Layout } from "containers";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./_styles";

function App() {
  const { state, dispatch } = usePokemon();

  useEffect(() => {
    if (!localStorage.getItem("myPokemon")) {
      localStorage.setItem("myPokemon", JSON.stringify([]));
    }
    dispatch({
      type: "set_myPokemon",
      payload: JSON.parse(localStorage.getItem("myPokemon")),
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(state.myPokemon));
  }, [state && state.myPokemon.length]);

  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="my-pokemons" element={<MyPokemon />} />
          <Route path="detail/:name" element={<PokemonDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
