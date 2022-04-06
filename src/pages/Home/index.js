/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { Card, Modal } from "components";
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMONS } from "store/pokemons/actions";
import { HomeContainer } from "./_style";
import { useLoading } from "store/loading/context";
import { usePokemon } from "store/pokemons/context";
import { catchChance } from "utils";

const Home = () => {
  const { dispatch: dispatchLoading } = useLoading();
  const { state, dispatch: dispatchPokemon } = usePokemon();
  const [pageOffset, setPageOffset] = useState(0);

  const gqlVariables = {
    limit: 12,
    offset: pageOffset,
  };

  const [getPokemons, { loading, error, data }] = useLazyQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  useEffect(() => {
    if (loading) {
      dispatchLoading({
        type: "loading/show",
        payload: "Now Loading",
      });
    } else {
      dispatchLoading({
        type: "loading/hide",
        payload: "Now Loading",
      });
    }
  }, [loading]);

  const encounterPokemon = async (item) => {
    if (JSON.stringify(state.wildPokemon) === "{}") {
      dispatchPokemon({
        type: "set_pokemon",
        payload: item,
      });
    }

    dispatchLoading({
      type: "loading/show",
      payload: "Catching...",
    });

    const caught = await catchChance();

    if (caught) {
      dispatchPokemon({
        type: "pokemon_caught",
        payload: "success",
      });
    } else {
      dispatchPokemon({
        type: "pokemon_caught",
        payload: "failed",
      });
    }

    dispatchLoading({
      type: "loading/hide",
    });
  };

  return (
    <>
      <div css={HomeContainer}>
        {!loading &&
          data &&
          data.pokemons &&
          data.pokemons.results &&
          data.pokemons.results.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                image={item.image}
                buttonText="Details"
                detailButton
                catchButton
                onClick={() => {
                  encounterPokemon(item);
                }}
              />
            );
          })}
      </div>
      {state.pokemonCaught === "success" && <Modal type="type-1" />}
      {state.pokemonCaught === "failed" && (
        <Modal type="type-2" onClick={() => encounterPokemon()} />
      )}
    </>
  );
};

export default Home;
