import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'

import InputData from '../component/InputData'
import Student from '../component/Student'


const Grade = () => {


    const DATA_INIT = [ {
        id:1,
        nisitId:'',
        name:'',
        mid:0,
        final:0,
    }]

    // const [student,setStudent] = useState<Object[]>(DATA_INIT)
    // const [no,setNo] = useState<
    const count1 = useRef(0)

    // const inputRef = useRef([])


    useEffect(()=>{
        count1.current = count1.current + 1;
    })

    // const changeEachRecord = (record,record_e,id) => {
    //     if((record == null)&&(record_e == null)){
    //         const ids = student.map(object => {
    //             return object.id
    //         })
    //         const lastId = Math.max(...ids) + 1
    //         setStudent ( student => {
    //             return [...student,{id:lastId,nisitId:'',name:'',mid:0,final:0}]
    //         })
    //     }
    //     else if(record!=null){
    //         let newNisitId=[...student]
    //         newNisitId.find((element)=>{
    //             if(element.id==id){
    //                 console.log(element.id)
    //                 element.nisitId=record
    //                 return element
    //             }
    //         })
    //     }
    // }


    const addRecord = (id)=>{
        const ids = student.map(object=>{
            return object.id
        })
        const lastId = Math.max(...ids) + 1
        setStudent ( student => {
            return [...student,{id:lastId,nisitId:'',name:'',mid:0,final:0}]
        })
    }


    return (
        <div>
            <h1>รหัสวิชา</h1>
            <input className="border-2 border-black">
            </input>
            <h1>ชื่อวิชา</h1>
            <input className="border-2 border-black">
            </input>
            <br/>
            <button className="p-2 bg-blue-500"
            >
                เพิ่ม
            </button>


            <div>
                <Student />
            </div>

            <h1>Render Count: {count1.current}</h1>
        </div>
    )
}
export default Grade