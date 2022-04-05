/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Button = ({ onClick, text, color, fontColor }) => {
  const ButtonContainer = css`
    width: 100%;
    background-color: ${color || "white"};
    color: ${fontColor || 0};
    border: none;
    padding: 10px;
    border-radius: 100px;
    cursor: pointer;
    @media only screen and (min-width: 420px) {
      &.catch-button {
        width: 350px;
      }
    }
  `;

  const ButtonLabel = css`
    font-size: 16px;
    font-weight: 500;
  `;

  return (
    <button type="submit" css={ButtonContainer}>
      <span css={ButtonLabel}>
        {text}
      </span>
    </button>
  );
};

export default Button;
