/** @jsxImportSource @emotion/react */
import { MyPokemonsContainer } from "./_style";
import { usePokemon } from "store/pokemons/context";
import { useLoading } from "store/loading/context";
import { Card } from "components";

const MyPokemon = () => {
  const { state, dispatch } = usePokemon();
  const myPokemons = state.myPokemon;

  const removePokemon = (item) => {
    const index = myPokemons.findIndex((e) => e.nickName === item.nickName);
    const newPokemons = myPokemons.filter((e, i) => i !== index);
    dispatch({
      type: "set_myPokemon",
      payload: [...newPokemons]
    })
  }

  return (
    <div css={MyPokemonsContainer}>
      {myPokemons.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              image={item.image}
              nickname={item.nickName}
              buttonText="Details"
              removeButton
              onClick={() => removePokemon(item)}
            />
          );
        })}
    </div>
  );
};

export default MyPokemon;
