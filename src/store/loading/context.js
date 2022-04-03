import { createContext, useReducer, useContext } from 'react';
import { reducer, initialState } from './reducer';

export const loadingContext = createContext({ state: initialState, dispatch: () => null });

export const LoadingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <loadingContext.Provider children={children} value={{ state, dispatch }} />;
}

export function useLoading() {
  const context = useContext(loadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a Provider')
  }
  return context;
}