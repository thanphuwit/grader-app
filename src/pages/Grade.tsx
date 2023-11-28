import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Student_Container from "../component/Student_Container";


const Grade = () => {
    const data = useSelector((state) => state.data)
    // console.log(data)


    const count1 = useRef(0)

    useEffect(()=>{
        count1.current = count1.current + 1;
    })

    return (
        <div>
            <div>
                <Student_Container/>
            </div>
            <button onClick={()=>{
                console.log(data)
            }}>
                sss
            </button>
            <h1>Render Count: {count1.current}</h1>
        </div>
    )
}
export default Grade