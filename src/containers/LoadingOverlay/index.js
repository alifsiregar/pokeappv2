/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const LoadingOverlay = ({ text }) => {
  const LoadingContainer = css`
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

  const LoadingText = css`
    position: fixed;
    font-size: 6rem;
    font-weight: 700;
    color: #fff;
    z-index: 998;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;

    @media only screen and (max-width: 750px) {
      font-size: 3rem;
    }
  `;

  return (
    <>
      <div title="LoadingOverlay" css={LoadingContainer} />
      <div css={LoadingText}>{text}</div>
    </>
  );
};

export default LoadingOverlay;
