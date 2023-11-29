import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Student_Container from "../component/Student_Container";

const DATA_INIT = [
    {id:1,
    page:1,
    name:'',
    mid:0,
    final:0,
    },
  ]

const Grade = () => {

    const data = useSelector((state) => state.data)
    const [student,setStudent] = useState(DATA_INIT)
    // const [name,setName] = useState()
    // const [mid,setMid] = useState()
    // const [final,setFinal] = useState()

    const changeEachRecord = (name,mid,final,id) => {

        //new student
        if((name==null)&&(mid==null)&&(final==null)){
            const ids = student.map(object => {
                return object.id
            })
            const lastId = Math.max(...ids)+1
            const pageNumber:Number = (lastId/10)+1
            setStudent(student => {
                return [...student,{id:lastId, page:pageNumber, name:'', mid:0, final:0}]
            })
        }
        //change name
        else if(name!=null){
            let newStudent = [...student]
            newStudent.find((element)=>{
                if(element.id==id){
                    element.name = name
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
                    element.name = name
                    return element
                }
            })
            setStudent(newStudent)
        }
    }

    return (
        <div>
            <div>
                <Student_Container data={student} changeEachRecord={changeEachRecord}/>
            </div>
        </div>
    )
}
export default Grade