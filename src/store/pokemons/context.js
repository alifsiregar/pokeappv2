import { createContext, useReducer, useContext } from 'react';
import { reducer, initialState } from './reducer';

export const pokemonContext = createContext({ state: initialState, dispatch: () => null });

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <pokemonContext.Provider children={children} value={{ state, dispatch }} />;
}

export function usePokemon() {
  const context = useContext(pokemonContext)
  if (context === undefined) {
    throw new Error('usePokemon must be used within a Provider')
  }
  return context;
}