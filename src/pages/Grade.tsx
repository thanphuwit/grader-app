import { Link, Outlet } from "react-router-dom";
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


const DATA_INIT: {
    id:number,
    page:number,
    nisitId:string,
    firstname:string,
    lastname:string,
    work:number,
    mid:number,
    final:number,
    grade:string,
 }[] = 
 [
    {id:1,
    page:1,
    nisitId:'',
    firstname:'',
    lastname:'',
    work:0,
    mid:0,
    final:0,
    grade:'F',
    },
  ]

const Grade = () => {
    document.title = 'กรอกคะแนน'

    
    
    const data: {courseId:string,courseName:string,
        student:{id:number,page:number,nisitId:string,firstname:string,lastname:string,work:number,mid:number,final:number,grade:string}[]
    } = useSelector((state) => state.data)
    // console.log(data)
    // data = {courseId: '1', courseName: '2', student: Array(0)}
    // const fromEdit = () => {
    //     if(data.student.length==1){
    //         return DATA_INIT
    //     }else{
    //         return data.student
    //     }
    // }
    
    const courseId = data.courseId
    const courseName = data.courseName
    // console.log(courseId)
    // console.log(courseName)

    const fromResult = () => {
        if(data.student.length>1){
            let obj = data.student
            let obj2 = [...obj]
            // console.log('fromResult')
            return obj2
        }
        else{
            // console.log('fromNormal')
            return DATA_INIT
        }
    }

    const [student,setStudent] = useState(fromResult)
    // console.log(typeof(student))

    const calGrade = (work,mid,final) => {
        let total = work+mid+final
        if(total>=80){
            return 'A'
        }
        else if(total>=75){
            return 'B+'
        }
        else if(total>=70){
            return 'B'
        }
        else if(total>=65){
            return 'C+'
        }
        else if(total>=60){
            return 'C'
        }else if(total>=55){
            return 'D+'
        }
        else if(total>=50){
            return 'D'
        }
        else if(total<=49){
            return 'F'
        }
    }


    const changeEachRecord = (nisitId:string,firstname:string,lastname:string,work:number,mid:number,final:number,id:number) => {

        //new student.
        if((nisitId==null)&&(firstname==null)&&(lastname==null)&&(work==null)&&(mid==null)&&(final==null)){
            const ids = student.map(object => {
                return object.id
            })
            const lastId = Math.max(...ids)+1
            // set total student per page at below 
            const pageNumber = Math.floor((lastId-1)/10)+1
            setStudent(student => {
                return [...student,{id:lastId, page:pageNumber, nisitId:'', firstname:'',lastname:'',work:0, mid:0, final:0, grade:'F'}]
            })
        }
        //change nisitId
        else if(nisitId!=null){
            // newStudent.find((element)=>{
            //     if(element.id==id){
            //         // let test1 = nisitId
            //         element.nisitId = nisitId
            //         // console.log(element)
            //         // let test = {id:element.id,page:element.page,nisitId:nisitId,firstname:element.firstname,lastname:element.lastname,work:element.work,mid:element.mid,final:element.final,grade:element.grade}
            //         // console.log(test)
            //         return element
            //     }
            // })
            let newStudent = []
            student.find((element)=>{
                if(element.id!=id){
                    newStudent.push(element)
                }
                else{
                    newStudent.push({id:element.id,page:element.page,nisitId:nisitId,firstname:element.firstname,lastname:element.lastname,work:element.work,mid:element.mid,final:element.final,grade:element.grade})
                }
            })
            // console.log(obj1)
            // console.log(newStudent)
            setStudent(newStudent)
        }
        //change name
        else if(firstname!=null){
            // console.log(name)
            // console.log(student)
            let newStudent = [...student]
            // console.log(newStudent  )
            newStudent.find((element)=>{
                // console.log(element)
                if(element.id==id){
                    element.firstname = firstname
                    return element
                }
            })
            // console.log(newStudent)
            setStudent(newStudent)
        }
        //change lastname
        else if(lastname!=null){
            // console.log(name)
            // console.log(student)
            let newStudent = [...student]
            newStudent.find((element)=>{
                if(element.id==id){
                    element.lastname = lastname
                    return element
                }
            })
            // console.log(newStudent)
            setStudent(newStudent)
        }
        //change work
        else if(work!=null){
            let newStudent = [...student]
            newStudent.find((element)=>{
                // console.log(element)
                if(element.id==id){
                    element.work = work
                    element.grade = calGrade(work, element.mid, element.final)
                    return element
                }
            })
            setStudent(newStudent)
        }
        //change mid
        else if(mid!=null){
            let newStudent = [...student]
            newStudent.find((element)=>{
                if(element.id==id){
                    element.mid = mid
                    element.grade = calGrade(element.work, mid, element.final)
                    return element
                }
            })
            setStudent(newStudent)
        }
        //change final
        else if(final!=null){
            let newStudent = [...student]
            newStudent.find((element)=>{
                if(element.id==id){
                    element.final = final
                    element.grade = calGrade(element.work, element.mid, final)
                    return element
                }
            })
            setStudent(newStudent)
        }
    }

    const handleStudent = () => {
        setStudent([
            {id:1,
            page:1,
            nisitId:'',
            firstname:'',
            lastname:'',
            work:0,
            mid:0,
            final:0,
            grade:'F',
            },
          ])
    }

    const [currentPage, setCurrentPage] = useState(1);

    let totalPage = Math.ceil(student.length/10)

    const handlePage = (newPage) => {
        setCurrentPage(newPage)
    }

    return (
        <div className=" min-h-screen bg-blue-100 flex flex-col">
            <div className='flex justify-between mt-5 py-2 '>
                <Header text={'กรอกคะแนน'}/>
                <BackButton destination={'/Course'}/>
            </div>
            <div className='flex justify-center p-5 '>
                <AddButton changeEach={changeEachRecord} currentPage={currentPage} totalPage={totalPage} totalStudent={student.length} handlePage={handlePage}/>
            </div>
            <div className=' w-full h-10 flex justify-center '>
                <Pagination student={student} currentPage={currentPage} totalPage={totalPage} handlePage={handlePage}/>
            </div>
            <div className='flex justify-between py-1 '>
                <CourseTitle courseId={courseId} courseName={courseName}/>
                <ResetButton handleStudent={handleStudent} handlePage={handlePage}/>
            </div>
            <div className='flex justify-center items-center w-screen py-5 '>
                <Table show={'input'} student={student} changeEach={changeEachRecord} currentPage={currentPage}/>
            </div>
            <div className='flex justify-center items-center '>
                <NextPageButton destination={'/Result'} student={student} courseId={courseId} courseName={courseName} text={'ถัดไป'}/>
            </div>
        </div>
    )
}
export default Grade