/** @jsxImportSource @emotion/react */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_POKEMON_DETAIL } from "queries";
import { Button } from "components";
import {
  DetailContainer,
  Header,
  PokemonName,
  PokemonSprites,
  PokemonTypes,
  Type,
  PokemonMoveContainer,
  PokemonMoves,
  Move,
} from "./_style";
import { useLoading } from "store/loading/context";
import { usePokemon } from "store/pokemons/context";
import { catchChance } from "utils";
import { Modal } from "containers";
import { ErrorPage } from "containers";

const PokemonDetail = () => {
  const params = useParams();
  const { dispatch: dispatchLoading } = useLoading();
  const { state, dispatch: dispatchPokemon } = usePokemon();

  const gqlVariables = {
    name: params.name,
  };

  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: gqlVariables,
  });

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

  useEffect(() => {
    if (loading) {
      dispatchLoading({
        type: "loading/show",
        payload: "Loading...",
      });
    } else {
      dispatchLoading({
        type: "loading/hide",
      });
    }
  }, [loading]);

  if(error || data?.pokemon.id === null) return <ErrorPage />

  console.log("tester", data)

  return (
    <>
      <div css={DetailContainer}>
        {!loading && data && data.pokemon && (
          <>
            <div css={Header}>
              <span css={PokemonName}>{data.pokemon.name}</span>
              <img
                css={PokemonSprites}
                src={data.pokemon.sprites.front_default}
                alt={data.pokemon.name}
              />
              <div css={PokemonTypes}>
                {data.pokemon.types.map((pokemon, idx) => (
                  <div key={String(idx)} css={Type}>
                    <span>{pokemon.type.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <Button
              className="catch-button"
              margin="20px 0"
              text="Catch!"
              color="#DA0037"
              fontColor="#EDEDED"
              onClick={() =>
                encounterPokemon({
                  id: data.pokemon.id,
                  name: data.pokemon.name,
                  image: data.pokemon.sprites.front_default,
                })
              }
            />
            <div css={PokemonMoveContainer}>
              <h2>Move List</h2>
              <div css={PokemonMoves}>
                {data.pokemon.moves.map((pokemon, idx) => (
                  <div key={String(idx)} css={Move}>
                    <span>{pokemon.move.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {state.pokemonCaught === "success" && <Modal type="type-1" />}
      {state.pokemonCaught === "failed" && (
        <Modal type="type-2" onClick={() => encounterPokemon()} />
      )}
    </>
  );
};

export default PokemonDetail;
