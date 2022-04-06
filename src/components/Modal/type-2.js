/** @jsxImportSource @emotion/react */
import {
  ModalBackground,
  ModalContainer,
  ModalText,
  ModalButtons,
} from "./_style";
import { Button } from "components";
import { usePokemon } from "store/pokemons/context";

const Modal = ({ onClick }) => {
  const { dispatch } = usePokemon();

  const noButton = () => {
    dispatch({
      type: "set_pokemon",
      payload: {},
    });
    dispatch({
      type: "pokemon_caught",
      payload: null,
    });
  };

  const tryAgain = () => {
    dispatch({
      type: "pokemon_caught",
      payload: null,
    });
    onClick();
  };

  return (
    <>
      <div css={ModalBackground} />
      <div css={ModalContainer}>
        <div css={ModalText}>
          <h2>The Pokemon Ran Away!</h2>
          <span>
            Unfortunately, the pokemon ran away :( Would you like to try again?
          </span>
        </div>
        <div css={ModalButtons}>
          <Button
            margin="10px 0"
            text="Yes"
            color="#171717"
            fontColor="#EDEDED"
            onClick={() => tryAgain()}
          />
          <Button
            margin="10px 0"
            text="No"
            color="#DA0037"
            fontColor="#EDEDED"
            onClick={() => noButton()}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
