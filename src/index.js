import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { LoadingProvider } from "store/loading/context";
import { PokemonProvider } from "store/pokemons/context";

const client = new ApolloClient({
  uri: process.env.REACT_APP_POKEAPI,
  cache: new InMemoryCache(),
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <ApolloProvider client={client}>
      <LoadingProvider>
        <PokemonProvider>
          <App />
        </PokemonProvider>
      </LoadingProvider>
    </ApolloProvider>
  </Router>
);
