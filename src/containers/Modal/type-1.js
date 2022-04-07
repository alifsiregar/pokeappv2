/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  ModalBackground,
  ModalContainer,
  ModalText,
  ModalInput,
  ModalButtons,
  ModalFailed,
} from "./_style";
import { Button } from "components";
import { usePokemon } from "store/pokemons/context";

const Modal = () => {
  const { state, dispatch } = usePokemon();
  const myPokemons = state.myPokemon;
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const releasePokemon = () => {
    dispatch({
      type: "set_pokemon",
      payload: {},
    });
    dispatch({
      type: "pokemon_caught",
      payload: false,
    });
  };

  const addPokemon = () => {
    setError(false);
    if (
      name !== "" &&
      myPokemons.find((e) => e.nickName.toLowerCase() === name.toLowerCase()) === undefined
    ) {
      const newPokemon = { ...state.wildPokemon, nickName: name };
      dispatch({
        type: "set_myPokemon",
        payload: [...state.myPokemon, newPokemon],
      });
      dispatch({
        type: "set_pokemon",
        payload: {},
      });
      dispatch({
        type: "pokemon_caught",
        payload: false,
      });
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div title="ModalType1" css={ModalBackground} />
      <div css={ModalContainer}>
        <div css={ModalText}>
          <h2>Pokemon Caught!</h2>
          <span>
            Congratulations, you caught the wild{" "}
            <b>{state && state.wildPokemon && state.wildPokemon.name}</b>! You
            can give it a name to add it to your pokemon list or release it if
            you want.
          </span>
        </div>
        <input
          type="text"
          css={ModalInput}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && (
          <div css={ModalFailed}>
            <span>
              Pokemon name cannot be empty or pokemon name already exists!
            </span>
          </div>
        )}
        <div css={ModalButtons}>
          <Button
            margin="10px 0"
            text="Accept Name"
            color="#171717"
            fontColor="#EDEDED"
            onClick={() => addPokemon()}
          />
          <Button
            margin="10px 0"
            text="Release"
            color="#DA0037"
            fontColor="#EDEDED"
            onClick={() => {
              releasePokemon();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
