import PropTypes from 'prop-types';
import ShowDetails from '../ShowDetails/ShowDetails';

const CalculationCard = ({calculationCard}) => {
    return (
        <div>
            <h2>Course Name:{calculationCard.length}</h2>
          {
            calculationCard.map(card => <ShowDetails key={card.id} card={card}></ShowDetails>)
          }
        </div>
    );
};

CalculationCard.prototypes ={
    calculationCard:PropTypes.array
}

export default CalculationCard;