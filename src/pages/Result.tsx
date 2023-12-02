import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../component/Header'
import BackButton from '../component/BackButton'
import AddButton from '../component/AddButton'
import Pagination from "../component/Pagination";
import CourseTitle from "../component/CourseTitle";
import ResetButton from "../component/ResetButton";
import Table from '../component/Table'
import NextPageButton from "../component/NextPageButton";

import Result_Container from "../component/Result._Container";

const Result = () => {
    document.title = 'สรุปผล'

    const dispatch = useDispatch()

    const data = useSelector((state) => state.data)
    // console.log(data)

    // console.log(data)
    // data = {
    //     "courseId": "1",
    //     "courseName": "2",
    //     "student": [
    //         {
    //             "id": 1,
    //             "page": 1,
    //             "nisitId": "",
    //             "firstname": "",
    //             "lastname": "",
    //             "mid": 0,
    //             "final": 0,
    //             "sum": 0,
    //             "grade": 0
    //         },
    //         {
    //             "id": 2,
    //             "page": 1.2,
    //             "nisitId": "",
    //             "firstname": "",
    //             "lastname": "",
    //             "mid": 0,
    //             "final": 0,
    //             "sum": 0,
    //             "grade": ""
    //         }
    //     ]
    // }

    const courseId = data.courseId
    const courseName = data.courseName
    const student = data.student

    const [currentPage, setCurrentPage] = useState(1);

    let totalPage = Math.ceil(student.length/10)

    const handlePage = (newPage) => {
        setCurrentPage(newPage)
    }

    return (
        <div className=" min-h-screen bg-blue-100 flex flex-col">
            <div className='flex justify-between mt-5 py-2 '>
                <Header text={'สรุปผล'}/>
                <BackButton destination={'/Grade'}/>
            </div>
            <div className=' w-full h-10 flex justify-center '>
                <Pagination student={student} currentPage={currentPage} totalPage={totalPage} handlePage={handlePage}/>
            </div>
            <div className='flex justify-between py-1 '>
                <CourseTitle courseId={courseId} courseName={courseName}/>
            </div>
            <div className='flex justify-center items-center w-screen py-5 '>
                <Table show={'result'} student={student} currentPage={currentPage}/>
            </div>
            <div className='flex justify-center items-center '>
                <NextPageButton destination={'/Course'} text={'เสร็จสิ้น'} />
            </div>
            {/* <Result_Container student={student} courseId={courseId} courseName={courseName}/> */}
        </div>
    )
}
export default Result