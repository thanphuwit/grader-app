import { useState } from 'react'

import Result from "./Result"
import ResultPage from "./ResultPage"
import Pagination from './Pagination'
import { useNavigate } from 'react-router-dom'

const Result_Container = ({student,courseId,courseName}) => {
    // console.log(student)
    // student = {
    //     "id": 1,
    //     "page": 1,
    //     "nisitId": "",
    //     "firstname": "",
    //     "lastname": "",
    //     "mid": 0,
    //     "final": 0,
    //     "sum": 0,
    //     "grade": 0
    // }

    
    // let courseName = data.courseName
    // let courseId = data.courseId
    // let student = data.student
    // console.log(data)

    let components = []
    // student.map((item,index)=>{
    //     // console.log(item)
    //     components.push(
    //         <Result/>
    //         // <tr className="">
    //         //     <td className="border-black w-1/8 flex items-center justify-center">
    //         //         <h1>{item.id}</h1>
    //         //     </td>
    //         //     <td className=" border-black w-1/8 flex items-center justify-center">
    //         //         <h1>{item.nisitId}</h1>
    //         //     </td>
    //         //     <td className=" border-black w-1/8 flex items-center justify-center">
    //         //         <h1>{item.firstname}</h1>
    //         //     </td>
    //         //     <td className=" border-black w-1/8 flex items-center justify-center">
    //         //         <h1>{item.lastname}</h1>
    //         //     </td>
    //         //     <td className=" border-black w-1/8 flex items-center justify-center">
    //         //         <h1>{item.mid}</h1>
    //         //     </td>
    //         //     <td className=" border-black w-1/8 flex items-center justify-center">
    //         //         <h1>{item.final}</h1>
    //         //     </td>
    //         //     <td className=" border-black w-1/8 flex items-center justify-center">
    //         //         <h1>{item.sum}</h1>
    //         //     </td>
    //         //     <td className=" border-black w-1/8 flex items-center justify-center">
    //         //         <h1>{item.grade}</h1>
    //         //     </td>
    //         // </tr>
    //     )
    // })

    const [currentPage, setCurrentPage] = useState(1);
    let totalPage = Math.ceil(student.length/10)
    const handlePage = (newPage) => {
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

    student.map((item)=>{
        gpa = getNumOfGrade(item.grade) + gpa
    })

    return (
        <div>
            <Header/>
            <div className='py-3'>
                <Pagination student={student} currentPage={currentPage} totalPage={totalPage} handlePage={handlePage}/>
            </div>
            <Title courseId={courseId} courseName={courseName}/>
            <div className='flex justify-center items-center w-screen py-5 '>
                <table className='bg-blue-500 rounded-xl border-separate border-spacing-2 border border-slate-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-5/6'>
                     <tbody>
                        <tr className=''>
                            <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>ลำดับ</td>
                            <td className='border-2 text-white font-bold rounded-md text-center w-1/6'>รหัสนิสิต</td>
                            <td className='border-2 text-white font-bold rounded-md text-center w-1/6'>ชื่อ</td>
                            <td className='border-2 text-white font-bold rounded-md text-center w-1/6'>นามสกุล</td>
                            <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>คะแนนเก็บ</td>
                            <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>กลางภาค</td>
                            <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>ปลายภาค</td>
                            <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>รวม</td>
                            <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>เกรด</td>
                        </tr>
                        <ResultPage student={student} currentPage={currentPage}/>
                    </tbody>
                </table>
            </div>
            <GPA gpa={gpa} totalStudent={totalStudent}/>
        </div>
    )
}

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-between mt-5 p-1 mx-40'>
            <div className='p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-xl'>
                <h1 className='text-white font-bold'>โปรแกรมตัดเกรด / สรุปผล</h1>
            </div>
            <button className='p-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 drop-shadow-xl'
                onClick={()=>{
                    navigate('/Grade')
                }}
            >
                <h1 className='text-white font-bold'>ย้อนกลับ / แก้ไข</h1>
            </button>
        </div>
    )
}

const Title = ({courseId,courseName}) => {
    return (
        <div className='flex justify-start mt-5 p-1 '>
            <div className='ml-40 p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:drop-shadow-xl'>
                <h1 className='text-white font-bold'>รหัสวิชา: {courseId}</h1>
            </div>
            <div className='ml-5 p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-xl'>
                <h1 className='text-white font-bold'>ชื่อวิชา: {courseName}</h1>
            </div>
        </div>
    )
}

const GPA = ({gpa,totalStudent}) => {
    return (
        <div className='justify-center flex flex-row'>
            <div className='py-4 px-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-xl justify-center flex flex-row'>
                <h1 className='text-white text-2xl font-bold'>GPA: {(Math.floor((gpa/totalStudent)*100)/100)}</h1>
            </div>
        </div>
    )
}


export default Result_Container