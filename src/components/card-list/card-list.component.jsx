import Card from '.././card/card.component';

const CardList = ({cardList}) => {
  return (
    <div>
      {cardList.map((card) => {
        return (<Card key = {card.id} card={card} fontSize30='fontSize30'></Card>)
      })}
    </div>
  )
}

export default CardList;
