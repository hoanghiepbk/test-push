import './card.css';

const Card = ({card, fontSize30}) => {
  return (
    <div className={`colorBlue ${fontSize30}`}>
      {card.name}
    </div>
  )
}

export default Card;
