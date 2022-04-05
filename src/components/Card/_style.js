import { css } from '@emotion/react';

export const CardContainer = css`
    width: 275px;
    border: 3px solid #444444;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: #EDEDED
`;

export const CardLabel = css`
    font-size: 14px;
`;

export const CardName = css`
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const CardImage = css`
    background-color: #EDEDED;
    width: 100%;
    height: 250px;
    border-radius: 25px;
    margin: 10px 0 20px 0;
`;