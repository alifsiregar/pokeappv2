import { css } from '@emotion/react';

export const DetailContainer = css`
    padding: 20px;
    color: #EDEDED;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #171717;

    button {
        width: 350px;
    }
`;

export const Header = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 350px;
`;

export const PokemonName = css`
    font-size: 48px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const PokemonSprites  = css`
    background-color: #EDEDED;
    margin: 20px 0;
    border-radius: 25px;
    width: 300px;
    height: 300px;
`;

export const PokemonTypes = css`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

export const Type = css`
    display: flex;
    justify-content: center;
    font-weight: 500;
    align-items: center;
    border: 2px solid #444444;
    border-radius: 100px;
    padding: 10px;
    margin: 3px;
    flex-grow: 1;

    span {
        text-transform: uppercase;
    }
`;

export const LoadingContainer = css`
    margin: 40px 0;
    align-self: center;
`;

export const Failed = css`
    max-width: 350px;
    text-align: center;
    margin-bottom: 20px;
    span {
        align-self: flex-start;
    }
    &.failed-modal {
        margin: 0;
    }
`;

export const PokemonMoveContainer = css`
    
    h2 {
        align-self: flex-start;
    }
`;

export const PokemonMoves = css`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    flex-wrap: wrap;
    height: 200px;
    overflow: scroll;
    border: 2px solid #444444;
    padding: 20px;
`;

export const Move = css`
    display: flex;
    justify-content: center;
    font-weight: 500;
    align-items: center;
    border: 2px solid #444444;
    border-radius: 100px;
    padding: 10px;
    margin: 3px;
    flex-grow: 1;
    font-size: 16px;
    background-color: #EDEDED;
    color: #171717;
    border: none;
    text-transform: uppercase;
`;