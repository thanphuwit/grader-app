import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Result_Container from "../component/Result._Container";

const Result = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.data)

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

    return (
        <div>
            <Result_Container student={student}/>
        </div>
    )
}
export default Result