import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import Course_Container from "../component/Course_Container";
import { useSelector, useDispatch } from 'react-redux'

const Course = () => {
    document.title = 'โปรแกรมตัดเกรด'

    const [courseId,setCourseId] = useState<string>()
    const [courseName,setCourseName] = useState<string>()

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-blue-100">
            <Course_Container/>
        </div>
    )
}
export default Course