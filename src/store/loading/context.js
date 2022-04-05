import { createContext, useReducer, useContext } from "react";
import { reducer, initialState } from "./reducer";
import { LoadingOverlay } from "containers";

export const LoadingContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const LoadingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoadingContext.Provider value={{ state, dispatch }}>
      <LoadingOverlay active={state.loading} text={state.message} />
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a Provider");
  }
  return context;
}
