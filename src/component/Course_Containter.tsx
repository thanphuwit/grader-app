import { Link,Outlet } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCourse } from './Slice'
import { forwardRef } from 'react'

const Course_Container = ({CourseHandle}) => {
    const NameRef = useRef<HTMLInputElement>(null)
    const IdRef = useRef<HTMLInputElement>(null)
    return (
        <div>
            <CourseIdCon ref={IdRef}/>
            <CourseNameCon ref={NameRef}/>
            <SubmitButton CourseHandle={CourseHandle} id={IdRef} name={NameRef}/>
            {/* <div>
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
            </div> */}
        </div>
    )
}

const CourseNameCon = forwardRef((props,ref) => {
    return (
        <div>
            <h1>รหัสวิชา</h1>
            <input ref={ref} className="border-2"></input>
        </div>
    )
})

const CourseIdCon = forwardRef((props,ref) => {
    return (
        <div>
            <h1>ชื่อวิชา</h1>
            <input ref={ref} className="border-2"></input>
        </div>
    )
})

const SubmitButton = ({CourseHandle,id,name}) => {
    const dispatch = useDispatch()
    return (
        <div className="p-2 border-2 bg-red-100 w-24">
                <Link to='/Grade' onClick={()=>{
                    CourseHandle(id,name)
                    dispatch(addCourse({courseId:id.current.value,courseName:name.current.value}))
                }}>ถัดไป</Link>
                <Outlet/>
                {/* <button onClick={()=>{
                    console.log("id: "+id.current.value)
                    console.log("name: "+name.current.value)}}>
                    focus
                </button> */}
        </div>
        
    )
}

export default Course_Container