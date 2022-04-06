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
  `;

  const ButtonLabel = css`
    font-size: 16px;
    font-weight: 500;
  `;

  return (
    <button title="Button" type="submit" css={ButtonContainer} onClick={() => onClick()}>
      <span css={ButtonLabel}>
        {text}
      </span>
    </button>
  );
};

export default Button;
