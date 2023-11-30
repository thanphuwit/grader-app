import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Student_Container from "../component/Student_Container";

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
    grade:'',
    },
  ]

const Grade = () => {

    const data: {courseId:string,coruseName:string,
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

    const fromWhere = () => {
        if(data.student.length>1){
            let obj = [...data.student]
            return obj
        }
        else{
            return DATA_INIT
        }
    }

    const [student,setStudent] = useState(fromWhere)

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
                return [...student,{id:lastId, page:pageNumber, nisitId:'', firstname:'',lastname:'',work:0, mid:0, final:0, grade:''}]
            })
        }
        //change nisitId
        else if(nisitId!=null){
            let newStudent = [...student]
            newStudent.find((element)=>{
                if(element.id==id){
                    element.nisitId = nisitId
                    return element
                }
            })
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
                console.log(element)
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

    return (
        <div>
            <div>
                <Student_Container student={student} changeEachRecord={changeEachRecord}/>
            </div>
        </div>
    )
}
export default Grade