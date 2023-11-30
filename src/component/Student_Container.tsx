import { Link, Outlet } from 'react-router-dom'
import { useRef,useState,useEffect, forwardRef } from 'react'
import { addStudent } from "./Slice";
import { useSelector, useDispatch } from 'react-redux'
import Student from './Student';
import Pagination from './Pagination';
import Page from './StudentPage';
import { current } from '@reduxjs/toolkit';
import StudentPage from './StudentPage';

const Student_Container = ({student,changeEachRecord}) => {
    // console.log(student)
    // student = [
    //     {
    //         "id": 1,
    //         "page": 1,
    //         "nisitId": "",
    //         "firstname": "",
    //         "lastname": "",
    //         "mid": 0,
    //         "final": 0,
    //         "sum": 0,
    //         "grade": ''
    //     }
    // ]
    
    // const inputRef = useRef([])

    // const [count,setCount] = useState<number>(0)

    // const [student,setStudent] = useState<Object[]>([])

    let components = []
    // let no = 1
    // let arr =[]
    // Array(count).fill().map((item,index)=>{
    //         if(index%4==0){
    //             if(no<10){
    //                 components.push(
    //                     <h1 className='inline ml-2' >{no}.</h1>
    //                 )
    //             }
    //             else{
    //                 components.push(
    //                     <h1 className='inline'>{no}.</h1>
    //                 )
    //             }
    //             no = no+1
    //             components.push(<input
    //                 key={index} ref={(element) => (inputRef.current[index] = element)}
    //                 className='mx-2 inline my-1'
    //                 />)
                    
    //         }else if(index%4==3){
    //             components.push(<input
    //                 key={index} ref={(element) => (inputRef.current[index] = element)}
    //                 className='mx-2 inline'
    //                 />
    //                 )
    //                 components.push(<h1 className='mx-2' ></h1>)
                
    //         }else{
    //             components.push(<input
    //                 key={index} ref={(element) => (inputRef.current[index] = element)}
    //                 className='mx-2 inline '
    //                 />
    //                 )
    //         }
    // })
    // const c = changeEachRecord()
    const changeEach = (nisitId,firstname,lastname,work,mid,final,id=null) =>{
        changeEachRecord(nisitId,firstname,lastname,work,mid,final,id)
    }

    // student.map((record,index)=>{
    //     components.push(
    //         <Student
    //             id= {record.id}
    //             pageNumber={record.pageNumber}
    //             nisitId={record.nisitId}
    //             firstname={record.firstname}
    //             lastname={record.lastname}
    //             mid={record.mid}
    //             final={record.final}
    //             changeEach={changeEach}
    //         />
    //     )
    // })

    const [currentPage, setCurrentPage] = useState(1);

    let totalPage = Math.ceil(student.length/10)

    const handlePage = (newPage) => {
        setCurrentPage(newPage)
    }
    const handleTotalPage = (newPage) => {
        totalPage = newPage
    }

    // console.log('totalPage: '+totalPage)
    // console.log('currentPage: '+currentPage)
    // const [studentPerPage] = useState(10);

    // const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='bg-gray-500 p-3'>
            <AddStudentButton changeEach={changeEach} currentPage={currentPage} totalPage={totalPage} handlePage={handlePage} />
            <Pagination student={student} currentPage={currentPage} totalPage={totalPage} handlePage={handlePage}/>
            <div className='flex justify-center items-center w-screen py-5'>
                <table className='bg-red-500 rounded-xl border-separate border-spacing-2 border border-slate-500 w-5/6'>
                    <tbody>
                        <Title/>
                        <StudentPage student={student} changeEach={changeEach} currentPage={currentPage}/>
                    </tbody>
                </table>
            </div>
            {/* <button onClick={()=>{
                setCurrentPage(2)
                // console.log('currentPage: '+currentPage)
                // console.log('indexOfLastPost: '+indexOfLastPost)
                // console.log('indexOfFirstPost: '+indexOfFirstPost)
                // console.log('currentPosts: '+currentPosts)
                
            }}>
                xxxx
            </button> */}
            <GoResultPageButton student={student} />
            <Outlet/>
        </div>
    )

}

const AddStudentButton = ({changeEach,currentPage,totalPage,handlePage}) => {
    return (
            <button className='border-2 bg-red-500'
                onClick={()=>{
                    changeEach(null,null,null,null,null,null)
                }}
            >
                เพิ่ม
            </button>
    )
}

const Title = () => {
    return (
            <tr className=''>
                <td className='border-2 rounded-md text-center w-1/12'>ลำดับ</td>
                <td className='border-2 rounded-md text-center w-1/6'>รหัสนิสิต</td>
                <td className='border-2 rounded-md text-center w-1/6'>ชื่อ</td>
                <td className='border-2 rounded-md text-center w-1/6'>นามสกุล</td>
                <td className='border-2 rounded-md text-center w-1/12'>คะแนนเก็บ</td>
                <td className='border-2 rounded-md text-center w-1/12'>คะแนนกลางภาค</td>
                <td className='border-2 rounded-md text-center w-1/12'>คะแนนปลายภาค</td>
            </tr>
        // <div className='flex bg-blue-500 justify-center items-center py-1'>
        //     <div className="w-1/5 flex items-center justify-center">
        //         <h1 className="mx-2">ลำดับ</h1>
        //     </div>
        //     <div className="w-1/5 flex items-center justify-center">
        //         <h1 className="mx-2">รหัสนิสิต</h1>
        //     </div>
        //     <div className="w-1/5 flex items-center justify-center">
        //         <h1 className="mx-2">ชื่อ</h1>
        //     </div>
        //     <div className="w-1/5 flex items-center justify-center">
        //         <h1 className="mx-2">นามสกุล</h1>
        //     </div>
        //     <div className="w-1/5 flex items-center justify-center">
        //         <h1 className="mx-2">คะแนนกลางภาค</h1>
        //     </div>
        //     <div className="w-1/5 flex items-center justify-center">
        //         <h1 className="mx-2">คะแนนปลายภาค</h1>
        //     </div>
        // </div>
    )
}

const GoResultPageButton = ({student}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-blue-500'>
            <Link to='/Result'
                onClick={()=>{
                    // console.log(student)
                    dispatch(addStudent(student))
                }}
            >หน้าถัดไป</Link>
        </div>
        // <Link className='border-2 bg-red-500'
        //         onClick={()=>{
        //             let arr_obj = []
        //             let arr = []
        //             let nisitId=''
        //             let name=''
        //             let mid=-1
        //             let final=-1
        //             Array(count).fill().map((_,index)=>{
        //                 if(index%4!=3){
        //                     arr.push(ref.current[index].value)
        //                 }
        //                 else{
        //                     arr.push(ref.current[index].value)
        //                     arr.map((value,index)=>{
        //                         if(index%4==0){
        //                             nisitId=value
        //                         }
        //                         if(index%4==1){
        //                             name=value
        //                         }
        //                         if(index%4==2){
        //                             mid=value
        //                         }
        //                         if(index%4==3){
        //                             final=value
        //                         }
        //                         if(nisitId!='' && name!='' && mid!=-1 && final!=-1){
        //                             // console.log('k')
        //                             arr_obj = [...arr_obj,{nisitId,name,mid,final}]
        //                             nisitId=''
        //                             name=''
        //                             mid=-1
        //                             final=-1
        //                             arr=[]
        //                         }
        //                     })
        //                 }

        //             })
        //             // dispatch(addStudent(arr_obj))
        //             setStudent(arr_obj)
        //             dispatch(addStudent(arr_obj))
        //         }}
        //         to='/Result'
        //     >
        //         หน้าถัดไป
        //     </Link>
    )
}

export default Student_Container