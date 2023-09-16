import PropTypes from 'prop-types';

const CalculationCard = ({calculationCard,totalCredit,creditRemaining}) => {
    
    return (
        <div className="md:w-1/3
         lg:w-1/4">
            <div className='text-center bg-gray-200 shadow-lg rounded-lg mx-3 p-4 '>
            <div className="mb-3 pb-4 border-b border-solid border-slate-500">
            <h3>Credit Hour Remaining {creditRemaining} hr </h3>
            </div>
            <div className="mb-3 pb-4 border-b border-solid border-slate-500">
            <h2>Course Name</h2>

{calculationCard.map((card) => (
<li className='list-decimal text-start' key={card.id}>{card.title}</li>
))}
            </div>
          <div className="">
              <h3>Total Credit Hour :{totalCredit}</h3>  
            </div>
        </div>
        </div>
    );
};

CalculationCard.prototypes ={
    calculationCard: PropTypes.array
  
}

export default CalculationCard;