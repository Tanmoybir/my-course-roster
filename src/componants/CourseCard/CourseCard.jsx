import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs';

const CourseCard = ({course,handleAddBookmarks}) => {
    const {image,title,description,credit,price} =course
    return (
        <div>
            <div className="text-center bg-gray-200 shadow-lg rounded-lg mx-3 p-4">
                <img className='w-full mb-3' src={image} alt="" />
                <h2 className='text-xl text-left font-semibold mb-2 h-14'>{title}</h2>
                <p className='text-left font-normal text-sm h-28'>{description}</p>
                <div className="flex justify-between items-center mb-7">
                    <p className='font-medium text-base'><span className='text-2xl mr-3'>$</span>Price:{price}</p>
                    <div className="flex justify-between">
                        <button className='mr-3'><BsBook></BsBook></button>
                        <button></button>
                    <p className='font-medium text-base'> Credit:{credit}hr</p>
                    </div>
                </div>
                <button onClick={() =>handleAddBookmarks(course)} className="bg-sky-500 px-24 rounded-lg py-3 ">Select</button>
            </div>
            </div>
    );
};

CourseCard.propTypes ={
    course:PropTypes.object.isRequired,
    handleAddBookmarks:PropTypes.func
}

export default CourseCard;