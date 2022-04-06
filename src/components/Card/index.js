/** @jsxImportSource @emotion/react */
import {
  CardContainer,
  CardLabel,
  CardName,
  CardImage,
  CardButtons,
} from "./_style";
import { Button } from "components";
import { Link } from 'react-router-dom';

const Card = ({
  name,
  onClick,
  nickname,
  catchButton,
  detailButton,
  removeButton,
  image,
}) => {
  return (
    <div title="Card" css={CardContainer}>
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
        {removeButton && (
          <Button
            text="Release Pokemon"
            color="#DA0037"
            fontColor="#EDEDED"
            onClick={() => onClick()}
          />
        )}
        {detailButton && (
          <Link to={`detail/${name}`}>
            <Button text="Details" color="#EDEDED" fontColor="#171717" />
          </Link>
        )}
        {catchButton && (
          <Button
            text="Catch Pokemon!"
            color="#DA0037"
            fontColor="#EDEDED"
            onClick={() => onClick()}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
