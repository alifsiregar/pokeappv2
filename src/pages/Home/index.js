/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { useSearchParams, createSearchParams, useNavigate } from "react-router-dom";
import { Card } from "components";
import { Modal } from "containers";
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMONS } from "queries";
import { HomeContainer, HomeButtonContainer, HomePageButton } from "./_style";
import { useLoading } from "store/loading/context";
import { usePokemon } from "store/pokemons/context";
import { catchChance } from "utils";

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { dispatch: dispatchLoading } = useLoading();
  const { state, dispatch: dispatchPokemon } = usePokemon();
  const [pageOffset, setPageOffset] = useState();

  const gqlVariables = {
    limit: 12,
    offset: pageOffset * 12,
  };

  const [getPokemons, { loading, error, data }] = useLazyQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  useEffect(() => {
    getPokemons();
  }, [getPokemons, pageOffset]);

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

  useEffect(() => {
    navigate(
      {
        pathname: "/",
        search: createSearchParams({
          page: pageOffset && pageOffset.toString(),
        }).toString(),
      },
      { replace: true }
    );
  }, [pageOffset]);

  useEffect(() => {
    setPageOffset(parseInt(searchParams.get('page')) || 0);
  }, []);

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
        <div css={HomeButtonContainer}>
          <button
            css={HomePageButton}
            disabled={pageOffset === 0}
            onClick={() => {
              setPageOffset(pageOffset - 1);
            }}
          >
            Prev
          </button>
          <button
            css={HomePageButton}
            disabled={data && pageOffset === data.pokemons.count}
            onClick={() => {
              setPageOffset(pageOffset + 1);
            }}
          >
            Next
          </button>
        </div>
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
        <div css={HomeButtonContainer}>
          <button
            css={HomePageButton}
            disabled={pageOffset === 0}
            onClick={() => {
              setPageOffset(pageOffset - 1);
            }}
          >
            Prev
          </button>
          <button
            css={HomePageButton}
            disabled={data && pageOffset === data.pokemons.count}
            onClick={() => {
              setPageOffset(pageOffset + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>

      {state.pokemonCaught === "success" && <Modal type="type-1" />}
      {state.pokemonCaught === "failed" && (
        <Modal type="type-2" onClick={() => encounterPokemon()} />
      )}
    </>
  );
};

export default Home;
