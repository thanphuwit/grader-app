import { Link,Outlet } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCourse } from './slice'

const Course_Container = ({CourseHandle}) => {

    const dispatch = useDispatch()
    const NameRef = useRef<HTMLInputElement>(null)
    const IdRef = useRef<HTMLInputElement>(null)
    return (
        <div>
            <div>
                <h1>รหัสวิชา</h1>
                <input ref={IdRef} className="border-2"></input>
            </div>
            <div>
                <h1>ชื่อวิชา</h1>
                <input ref={NameRef} className="border-2"></input>
            </div>
            <div className="p-2 border-2 bg-red-100 w-24">
                <Link to='/Grade' onClick={()=>{
                    CourseHandle(NameRef.current?.value,IdRef.current?.value)
                    dispatch(addCourse({courseName:NameRef.current?.value,courseId:IdRef.current?.value}))
                }}>ถัดไป</Link>
                <Outlet/>
            </div>
        </div>
    )
}

const CourseNameCon = () => {
    return (
        <div>
            <h1>รหัสวิชา</h1>
            <input className="border-2"></input>
        </div>
    )
}

const CourseIdCon = () => {
    return (
        <div>
            <h1>ชื่อวิชา</h1>
            <input className="border-2"></input>
        </div>
    )
}

const SubmitButton = ({CourseHandle,name,id}) => {
    return (
        <div className="p-2 border-2 bg-red-100 w-24">
            <button onClick={()=>{
                CourseHandle(name,id)
            }}>
            ppp
            </button>
            {/* <Link to='/'>ถัดไป</Link>
            <Outlet/> */}
            <h1>x</h1>
        </div>
    )
}

export default Course_Container