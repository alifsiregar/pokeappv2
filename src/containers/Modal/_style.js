import { css } from "@emotion/react";

export const ModalBackground = css`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #000;
    opacity: 0.85;
    z-index: 997;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = css`
    position: fixed;
    z-index: 998;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: #EDEDED;
    max-width: 350px; 
    margin: 10px;
    padding: 10px;

    @media only screen and (max-width: 750px) {
        max-width: 325px; 
        width: 100%; 
    }
`;

export const ModalText = css`
    margin: 0 0 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2 {
        margin-bottom: 5px;
    }
    span b {
        text-transform: uppercase;
    }
`;

export const ModalInput = css`
    margin: 10px;
    padding: 5px;
    width: 95%;
`;

export const ModalButtons = css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

export const ModalFailed = css`
    max-width: 350px;
    text-align: center;
    margin-bottom: 20px;
`;