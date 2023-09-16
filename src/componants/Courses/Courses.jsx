import { useEffect } from "react";
import { useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import PropTypes from 'prop-types'


const Courses = ({handleAddBookmarks}) => {
    const [courses,setCourses] =useState([]);

    useEffect(() =>{
        fetch('./courses.json')
        .then(res => res.json())
        .then(data =>setCourses(data))
    },[])
    return (
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 md:w-2/3 lg:w-3/4">
            {
                courses.map(course => <CourseCard key={course.id} course={course} handleAddBookmarks={handleAddBookmarks}></CourseCard>)
            }
        </div>
    );
};

Courses.propTypes ={
    handleAddBookmarks:PropTypes.func
}
export default Courses;