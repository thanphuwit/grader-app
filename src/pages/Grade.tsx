import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'

import Student from '../component/Student'


const Grade = () => {

    const count1 = useRef(0)

    useEffect(()=>{
        count1.current = count1.current + 1;
    })

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