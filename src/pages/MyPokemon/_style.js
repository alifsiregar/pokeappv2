import { css } from '@emotion/react';


export const MyPokemonsContainer = css`
    padding: 20px;
    color: #EDEDED;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #171717;
`;

export const MyPokemonsHeader = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const MyPokemonsTitle = css`
    font-size: 42px;
    font-weight: 900;
    margin: 0;
`;

export const MyPokemonsOwned = css`
    font-size: 14px;
`;

export const MyPokemonsCardContainer = css`
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const MyPokemonsEmptyContainer = css`
    background-color: #171717;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;