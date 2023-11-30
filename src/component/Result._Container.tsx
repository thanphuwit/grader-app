import { useState } from 'react'

import Result from "./Result"
import ResultPage from "./ResultPage"
import Pagination from './Pagination'

const Result_Container = ({student}) => {
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
        <div className="justify-center items-center bg-gray-400">
            <div className='py-3'>
                <Pagination student={student} currentPage={currentPage} totalPage={totalPage} handlePage={handlePage}/>
            </div>
            <div className='flex justify-center items-center w-screen py-5 bg-blue-200'>
                <table className='bg-red-500 rounded-xl border-separate border-spacing-2 border border-slate-500 w-3/4'>
                     <tbody>
                        <tr className=''>
                            <td className='border-2 rounded-md text-center w-1/12'>ลำดับ</td>
                            <td className='border-2 rounded-md text-center w-1/6'>รหัสนิสิต</td>
                            <td className='border-2 rounded-md text-center w-1/6'>ชื่อ</td>
                            <td className='border-2 rounded-md text-center w-1/6'>นามสกุล</td>
                            <td className='border-2 rounded-md text-center w-1/6'>คะแนนเก็บ</td>
                            <td className='border-2 rounded-md text-center w-1/12'>กลางภาค</td>
                            <td className='border-2 rounded-md text-center w-1/12'>ปลายภาค</td>
                            <td className='border-2 rounded-md text-center w-1/12'>รวม</td>
                            <td className='border-2 rounded-md text-center w-1/12'>เกรด</td>
                        </tr>
                        <ResultPage student={student} currentPage={currentPage}/>
                    </tbody>
                </table>
            </div>
            <div className='flex flex-row justify-center'>
                <h1>GPA: {gpa/totalStudent}</h1>
            </div>
        </div>
    )
}
export default Result_Container