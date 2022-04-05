/** @jsxImportSource @emotion/react */
import { 
  CardContainer, 
  CardLabel, 
  CardName, 
  CardImage
} from './_style';

const Card = ({
  name,
  onClickDetail,
  nickname,
  catchButton,
  image,
}) => {
  return (
    <div css={CardContainer}>
      <span css={CardLabel}>
        Pokemon Name:
      </span>
      <span css={CardName}>
        {name}
      </span>
      {
        nickname &&
          <>
            <span css={CardLabel}>
              Nickname:
            </span>
            <span css={CardName}>
              {nickname}
            </span>
          </>
      }
      <img src={image} css={CardImage} alt="Pokemon Name" />
    </div>
  )
}

export default Card