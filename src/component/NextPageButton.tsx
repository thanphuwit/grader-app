import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { addCourse, addStudent } from "./Slice"

const NextPageButton = ({ destination, student, courseId, courseName, text }) => {

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