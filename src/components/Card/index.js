/** @jsxImportSource @emotion/react */
import { CardContainer, CardLabel, CardName, CardImage, CardButtons } from "./_style";
import { Button } from "components";

const Card = ({
  name,
  onClick,
  nickname,
  catchButton,
  detailButton,
  image,
  buttonText,
  buttonColor,
  buttonBgColor,
}) => {
  return (
    <div css={CardContainer}>
      <span css={CardLabel}>Pokemon Name:</span>
      <span css={CardName}>{name}</span>
      {nickname && (
        <>
          <span css={CardLabel}>Nickname:</span>
          <span css={CardName}>{nickname}</span>
        </>
      )}
      <img src={image} css={CardImage} alt="Pokemon Name" />
      <div css={CardButtons}>
        { !detailButton && !catchButton &&
          <Button text={buttonText} color={buttonBgColor} fontColor={buttonColor} onClick={() => onClick()} />
        }
        { detailButton &&
          <Button text="Details" color="#EDEDED" fontColor="#171717" onClick={() => onClick()} />
        }
        {catchButton && (
          <Button text="Catch Pokemon!" color="#DA0037" fontColor="#EDEDED" onClick={() => onClick()} />
        )}
      </div>
    </div>
  );
};

export default Card;
