import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import Course_Container from "../component/Course_Containter";
import { useSelector, useDispatch } from 'react-redux'

const Course = () => {

    const [courseId,setCourseId] = useState()
    const [courseName,setCourseName] = useState()

    const CourseHandle = (id,name) => {
        setCourseId(id)
        setCourseName(name)
    }

    return (
        <div>
            <Course_Container CourseHandle={CourseHandle}/>
        </div>
    )
}
export default Course