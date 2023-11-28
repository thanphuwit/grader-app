import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Result_Container from "../component/Result._Container";

const Result = () => {
    const data = useSelector((state) => state.data)
    const count1 = useRef(0)
    useEffect(()=>{
        count1.current = count1.current + 1;
    })

    return (
        <div>
            <Result_Container data={data}/>
            <button onClick={()=>{
                console.log(data)
            }}>
            ดูค่าหน่อย
            </button>
        </div>
    )
}
export default Result