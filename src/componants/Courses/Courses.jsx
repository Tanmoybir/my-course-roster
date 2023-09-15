import { useEffect } from "react";
import { useState } from "react";
import CourseCard from "../CourseCard/CourseCard";



const Courses = () => {
    const [courses,setCourses] =useState([]);

    useEffect(() =>{
        fetch('./courses.json')
        .then(res => res.json())
        .then(data =>setCourses(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
            }
        </div>
    );
};

export default Courses;