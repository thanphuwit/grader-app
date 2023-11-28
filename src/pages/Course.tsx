import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import Course_Container from "../component/Course_Containter";
import { useSelector, useDispatch } from 'react-redux'
import { addCourse } from "../component/slice";

const Course = () => {

    const dispatch = useDispatch()
    const count1 = useRef(0)

    useEffect(()=>{
        count1.current = count1.current + 1;
    })

    const [courseId,setCourseId] = useState()
    const [courseName,setCourseName] = useState()

    const CourseNameHandle = (name) => {
        setCourseName(name)
    }
    const CourseIdHandle = (id) => {
        setCourseId(id)
    }
    const CourseHandle = (name,id) => {
        setCourseName(name)
        setCourseId(id)
    }



    return (
        <div>
            <Course_Container CourseHandle={CourseHandle}/>
            <button onClick={()=>{
                console.log(courseName)
                console.log(courseId)
            }}>
            ดูค่า
            </button>
            <h1>Render Count: {count1.current}</h1>
        </div>
    )
}
export default Course