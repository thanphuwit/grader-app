import { Link, Outlet, useNavigation } from 'react-router-dom'
import { useRef,useState,useEffect, forwardRef } from 'react'
import { addStudent } from "./Slice";
import { useSelector, useDispatch } from 'react-redux'
import Student from './Student';
import Pagination from './Pagination';
import Page from './StudentList';
import { useNavigate } from 'react-router-dom';
import StudentList from './StudentList';
import Header from './Header'

const Student_Container = ({student,courseId,courseName,changeEachRecord,handleStudent}) => {
    const navigate = useNavigate()
    // console.log(courseId)
    // console.log(courseName)
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
            <div className='bg-blue-100 h-screen'>
                <Headerr/>
                <AddStudentButton changeEach={changeEach} currentPage={currentPage} totalPage={totalPage} handlePage={handlePage} totalStudent={student.length}/>
                <Pagination student={student} currentPage={currentPage} totalPage={totalPage} handlePage={handlePage}/>
                <Title courseId={courseId} courseName={courseName} handleStudent={handleStudent} handlePage={handlePage}/>
                <div className='flex justify-center items-center w-screen py-5 '>
                    <table className='rounded-lg border-separate border-spacing-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-5/6 drop-shadow-2xl'>
                        <tbody className=''>
                            <TableHead/>
                            <StudentList student={student} changeEach={changeEach} currentPage={currentPage}/>
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
                <GoResultPageButton student={student} courseId={courseId}  courseName={courseName}/>
                {/* <button onClick={()=>{
                    console.log(student)
                }}>
                    xxxxx
                </button> */}
                <Outlet/>
            </div>

    )

}

const Headerr = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-between mt-5 p-1 mx-40 bg-red-500'>
            <div className='p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-xl'>
                <h1 className='text-white font-bold'>โปรแกรมตัดเกรด / กรอกคะแนน</h1>
            </div>
            <button className='p-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 drop-shadow-xl'
                onClick={()=>{
                    navigate('/Course')
                }}
            >
                <h1 className='text-white font-bold'>ย้อนกลับ / แก้ไข</h1>
            </button>
        </div>
    )
}

const Title = ({courseId,courseName,handleStudent,handlePage}) => {
    return (
        <div className='flex justify-between mt-5 p-1 mx-40 '>
            <div className='flex p'>
                <div className=' p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:drop-shadow-xl'>
                    <h1 className='text-white font-bold'>รหัสวิชา: {courseId}</h1>
                </div>
                <div className='ml-3 p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-xl'>
                    <h1 className='text-white font-bold'>ชื่อวิชา: {courseName}</h1>
                </div>
            </div>
            <div>
                <button className=' p-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 drop-shadow-xl'
                    onClick={()=>{
                        handleStudent()
                        handlePage(1)
                    }}
                >
                    <h1 className='text-white font-bold'>ล้างค่า</h1>
                </button>
            </div>
        </div>
    )
}

const AddStudentButton = ({changeEach,currentPage,totalPage,handlePage,totalStudent}) => {
    return (
            <div className='flex justify-center p-5'>
                <button className='border-2 px-12 py-1.5 drop-shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 font-bold text-white rounded-lg hover:text-yellow-400 mx-5'
                    onClick={()=>{
                        if((totalStudent%10)!=0){
                            changeEach(null,null,null,null,null,null)
                        }else{
                            changeEach(null,null,null,null,null,null)
                            handlePage(totalPage+1)
                        }
                    }}
                >
                    + 1 จำนวนนักเรียน
                </button>
                {/* <button className='border-2 px-12 py-1.5 drop-shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 font-bold text-white rounded-lg hover:text-orange-500 mx-5'
                    onClick={()=>{
                        useEffect(()=>{
                            changeEach(null,null,null,null,null,null)
                        })
                    }}
                >
                    + 10 จำนวนนักเรียน
                </button> */}
            </div>
    )
}

const TableHead = () => {
    return (
            <tr className=' border-bottom-2'>
                <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>ลำดับ</td>
                <td className='border-2 text-white font-bold rounded-md text-center w-1/6'>รหัสนิสิต</td>
                <td className='border-2 text-white font-bold rounded-md text-center w-1/6'>ชื่อ</td>
                <td className='border-2 text-white font-bold rounded-md text-center w-1/6'>นามสกุล</td>
                <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>คะแนนเก็บ</td>
                <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>คะแนนกลางภาค</td>
                <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>คะแนนปลายภาค</td>
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

const GoResultPageButton = ({student,courseId,courseName}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let page = '/Grade'
    return (
        <div className='flex justify-center items-center'>
            <button
                className='p-3 bg-green-500 rounded-md font-bold text-white drop-shadow-lg hover:bg-green-600'
                onClick={()=>{
                    // console.log(student)
                    // dispatch(addStudent(student))
                    let found = false
                    student.map((item)=>{
                        if(item.nisitId=='' || item.firstname=='' || item.lastname==''){
                            found = true
                        }
                    })
                    if(!found){
                        dispatch(addStudent(student))
                        navigate('/Result')
                    }
                    // let test = {courseId:courseId,courseName:courseName,student:[student]}
                    // dispatch(addStudent(test))
                    // navigate('/Result')
                }}
            >หน้าถัดไป</button>
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