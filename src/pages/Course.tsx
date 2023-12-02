import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import Course_Container from "../component/Course_Containter";
import { useSelector, useDispatch } from 'react-redux'

const Course = () => {
    document.title = 'โปรแกรมตัดเกรด'

    const [courseId,setCourseId] = useState()
    const [courseName,setCourseName] = useState()

    const handleCourse = (id,name) => {
        setCourseId(id)
        setCourseName(name)
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-blue-100">
            <Course_Container CourseHandle={handleCourse}/>
        </div>
    )
}
export default Course