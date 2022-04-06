/** @jsxImportSource @emotion/react */
import {
  MyPokemonsContainer,
  MyPokemonsHeader,
  MyPokemonsTitle,
  MyPokemonsOwned,
  MyPokemonsCardContainer,
  MyPokemonsEmptyContainer,
} from "./_style";
import { usePokemon } from "store/pokemons/context";
import { Card } from "components";

const MyPokemon = () => {
  const { state, dispatch } = usePokemon();
  const myPokemons = state.myPokemon;

  const removePokemon = (item) => {
    const index = myPokemons.findIndex((e) => e.nickName === item.nickName);
    const newPokemons = myPokemons.filter((e, i) => i !== index);
    dispatch({
      type: "set_myPokemon",
      payload: [...newPokemons],
    });
  };

  return (
    <div css={MyPokemonsContainer}>
      <div css={MyPokemonsHeader}>
        <span css={MyPokemonsTitle}>My Pokemons</span>
        <span css={MyPokemonsOwned}>Pokemon Owned: {myPokemons.length}</span>
      </div>
      <div css={MyPokemonsCardContainer}>
        {myPokemons.length !== 0 ? (
          myPokemons.map((item, idx) => {
            return (
              <Card
                key={String(idx)}
                name={item.name}
                image={item.image}
                nickname={item.nickName}
                buttonText="Details"
                removeButton
                onClick={() => removePokemon(item)}
              />
            );
          })
        ) : (
          <div css={MyPokemonsEmptyContainer}>
            <h1>
              No pokemon yet. <br /> Start catching some!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPokemon;
