import { Link,Outlet } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCourse } from './Slice'
import { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import NextPageButton from './NextPageButton'

const Course_Container = ({CourseHandle}) => {
    const NameRef = useRef<HTMLInputElement>(null)
    const IdRef = useRef<HTMLInputElement>(null)
    return (
        <div className='p-72'>
            <div className='flex flex-col bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 drop-shadow-xl p-12 justify-center rounded-md'>
                <div className='flex border-black backdrop-blur-xl'>
                        <h1 className='text-white text-lg font-bold underline'>โปรแกรมตัดเกรด</h1>
                </div>
                <CourseIdCon ref={IdRef}/>
                <CourseNameCon ref={NameRef}/>
                {/* <SubmitButton CourseHandle={CourseHandle} id={IdRef} name={NameRef}/> */}
                <NextPageButton destination={'/Grade'} courseId={IdRef} courseName={NameRef}/>
            </div>
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

const CourseIdCon = forwardRef((props,ref) => {
    return (
        <div className='my-2'>
            <h1 className='text-white'>รหัสวิชา</h1>
            <input ref={ref} className="border-2 rounded-md text-center"></input>
        </div>
    )
})

const CourseNameCon = forwardRef((props,ref) => {
    return (
        <div className='mb-5'>
            <h1 className='text-white'>ชื่อวิชา</h1>
            <input ref={ref} className="border-2 rounded-md text-center"></input>
        </div>
    )
})


const SubmitButton = ({handleCourse,id,name}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className='flex justify-center'>
            <button className="flex py-2 border-2 bg-orange-400 w-24 justify-center rounded-lg font-bold text-white hover:bg-orange-600"
                onClick={()=>{
                    if(id.current.value!='' && name.current.value!=''){
                        handleCourse(id,name)
                        dispatch(addCourse({courseId:id.current.value,courseName:name.current.value}))
                        navigate('/Grade')
                    }
                }}
            >
                {/* <button onClick={()=>{
                    console.log("id: "+id.current.value)
                    console.log("name: "+name.current.value)}}>
                    focus
                </button> */}
                ถัดไป
            </button>
        </div>
        
    )
}

export default Course_Container