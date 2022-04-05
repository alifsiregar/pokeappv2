import { css } from '@emotion/react';

export const Nav = css`
    background-color: #EDEDED;
    height: 75px;
    display: flex;
    align-items: center;
    .inner-navbar {
        width: 100%;
        max-width: 1200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        margin: 0 auto;
    }
`;

export const Logo = css`
    color: #171717;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .top {
        margin: 0;
        font-size: 24px;
        font-weight: 900;
    }

    .bottom {
        margin: 0;
        font-size: 16px;
    }
`;

export const MyPokemonsButton = css`
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #171717;
    text-decoration: none;

    @media only screen and (max-width: 660px) {
        .label {
            display: none;
        }
    }
`;

export const PokeballLogo = css`
    width: 40px;
`;