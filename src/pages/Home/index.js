/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { Card } from 'components';
import { useLazyQuery } from '@apollo/client';
import { GET_POKEMONS } from 'store/pokemons/actions';
import { HomeContainer } from './_style';
import { useLoading } from "store/loading/context";

const Home = () => {

  const { state: loadingState, dispatch: dispatchLoading } = useLoading();
  const [pageOffset, setPageOffset] = useState(0);

  const gqlVariables = {
    limit: 12,
    offset: pageOffset,
  };

  const [getPokemons, { loading, error, data }] = useLazyQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  useEffect(() => {
    if(!loading){
      dispatchLoading({
        type: "loading/show",
        payload: "Now Loading"
      });
    } else {
      dispatchLoading({
        type: "loading/hide",
        payload: "Now Loading"
      });
    }
  }, [loading])

  return (
    <div css={HomeContainer}>
      {!loading && data && data.pokemons && data.pokemons.results && data.pokemons.results.map((item) => {return <Card
        key={item.id}
        name={item.name}
        image={item.image}
        buttonText="Details"
        detailButton
        catchButton
      />})}
    </div>
  )
}

export default Home