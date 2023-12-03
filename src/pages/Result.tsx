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
import Gpa from "../component/Gpa";

interface Student {
    id: number,
    page: number,
    nisitId: string,
    firstname: string,
    lastname: string,
    work: number,
    mid: number,
    final: number,
    grade: string,
}

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

    const handlePage = (newPage:number) => {
        setCurrentPage(newPage)
    }

    let gpa:number = 0
    let totalStudent = student.length

    const getNumOfGrade = (grade:string) => {
        if(grade=='A'){
            return 4
        }else if(grade=='B+'){
            return 3.5
        }else if(grade=='B'){
            return 3
        }else if(grade=='C+'){
            return 2.5
        }else if(grade=='C'){
            return 2
        }else if(grade=='D+'){
            return 1.5
        }else if(grade=='D'){
            return 1
        }else if(grade=='F'){
            return 0
        }
    }

    student.map((item:Student)=>{
        gpa = getNumOfGrade(item.grade) + gpa
    })

    return (
        <div className=" min-h-screen bg-blue-100 flex flex-col">
            <div className='flex justify-between mt-5 py-2 '>
                <Header text={'สรุปผล'}/>
                <BackButton destination={'/Grade'}/>
            </div>
            <div className=' w-full h-10 flex justify-center '>
                <Pagination currentPage={currentPage} totalPage={totalPage} handlePage={handlePage}/>
            </div>
            <div className='flex justify-between py-1 '>
                <CourseTitle courseId={courseId} courseName={courseName}/>
            </div>
            <div className='flex justify-center items-center w-screen py-5 '>
                <Table show={'result'} student={student} currentPage={currentPage}/>
            </div>
            <div className='justify-center flex flex-row'>
                <Gpa gpa={gpa} totalStudent={totalStudent}/>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <NextPageButton text={'เสร็จสิ้น'} destination={'/Course'} />
            </div>
            {/* <Result_Container student={student} courseId={courseId} courseName={courseName}/> */}
        </div>
    )
}
export default Result