import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { addCourse, addStudent } from "./Slice"

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

const NextPageButton = ({ text, destination, student, courseId, courseName }:
    {text:string, destination:string, student?:any, courseId?:any, courseName?:any}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (

        <button
            className='p-3 bg-green-500 rounded-md font-bold text-white drop-shadow-lg hover:bg-green-600'
            onClick={() => {
                if (destination == '/Grade') {
                    if (courseId.current.value != '' && courseName.current.value != '') {
                        dispatch(addCourse({ courseId: courseId.current.value, courseName: courseName.current.value }))
                        navigate(destination)
                    }
                }
                else if (destination == '/Result') {
                    let found = false
                    student.map((item) => {
                        if (item.nisitId == '' || item.firstname == '' || item.lastname == '') {
                            found = true
                        }
                    })
                    if (!found) {
                        dispatch(addStudent(student))
                        navigate(destination)
                    }
                }
                else if (destination == '/Course') {
                    dispatch(addStudent([]))
                    navigate(destination)
                }
            }}
        >{text}</button>

    )
}

export default NextPageButton