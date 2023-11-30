import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Student_Container from "../component/Student_Container";

const DATA_INIT = [
    {id:1,
    page:1,
    nisitId:'',
    firstname:'',
    lastname:'',
    mid:'',
    final:'',
    },
  ]

const Grade = () => {

    const data = useSelector((state) => state.data)
    // console.log(data)
    // data = {courseId: '1', courseName: '2', student: Array(0)}
    // const fromEdit = () => {
    //     if(data.student.length==1){
    //         return DATA_INIT
    //     }else{
    //         return data.student
    //     }
    // }
    const fromWhere = () => {
        if(data.student.length>1){
            let obj = data.student
            return obj
        }
        else{
            return DATA_INIT
        }
    }

    const [student,setStudent] = useState(fromWhere)

    const changeEachRecord = (nisitId,firstname,lastname,mid,final,id) => {

        //new student
        if((nisitId==null)&&(firstname==null)&&(lastname==null)&&(mid==null)&&(final==null)){
            const ids = student.map(object => {
                return object.id
            })
            const lastId = Math.max(...ids)+1
            // set total student per page at below 
            const pageNumber = Math.floor((lastId-1)/10)+1
            setStudent(student => {
                return [...student,{id:lastId, page:pageNumber, nisitId:'', firstname:'',lastname:'', mid:'', final:''}]
            })
        }
        //change nisitId
        else if(nisitId!=null){
            let newStudent = [...student]
            newStudent.find((element)=>{
                if(element.id==id){
                    (element as any).nisitId = nisitId
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
            newStudent.find((element)=>{
                console.log(element)
                if(element.id==id){
                    (element.firstname as any) = firstname
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
                    (element.lastname as any) = lastname
                    return element
                }
            })
            // console.log(newStudent)
            setStudent(newStudent)
        }
        //change mid
        else if(mid!=null){
            let newStudent = [...student]
            newStudent.find((element)=>{
                if(element.id==id){
                    (element.mid as any) = mid
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
                    (element.final as number) = final
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