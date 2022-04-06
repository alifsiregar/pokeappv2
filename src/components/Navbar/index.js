/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { Nav, Logo, MyPokemonsButton, PokeballLogo } from "./_style";
import { Pokeball } from "assets/icons";
import { usePokemon } from "store/pokemons/context";

const Navbar = () => {

  const { state } = usePokemon();
  const myPokemons = state.myPokemon.length;

  return (
    <div title="Navbar" css={Nav}>
      <div className="inner-navbar">
        <Link to="/" css={Logo}>
          <span className="top">POKEAPP</span>
          <span className="bottom">Gotta Catch 'Em All!</span>
        </Link>
        <Link to="my-pokemons" css={MyPokemonsButton}>
          <img src={Pokeball} alt="My Pokemons Button" css={PokeballLogo} />
          <span className="label">Pokemons Owned:</span>
          <span>({myPokemons})</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
