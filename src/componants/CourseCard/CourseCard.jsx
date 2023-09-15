import PropTypes from 'prop-types';
const CourseCard = ({course}) => {
    const {image,title,description,credit,price} =course
    return (
        <div>
            <div className="w-80 text-center bg-gray-200 shadow-lg rounded-lg mx-3 p-4 ">
                <img className='w-full mb-3' src={image} alt="" />
                <h2 className='text-xl font-semibold mb-2'>{title}</h2>
                <p className='font-normal text-sm mb-5'>{description}</p>
                <div className="flex justify-between items-center mb-7">
                    <p className='font-medium text-base'>${price}</p>
                    <p className='font-medium text-base'>{credit}</p>
                </div>
                <button className="bg-sky-500 px-24 rounded-lg py-3 ">Select</button>
            </div>
            </div>
    );
};

CourseCard.propTypes ={
    course:PropTypes.object.isRequired
}

export default CourseCard;