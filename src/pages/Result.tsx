import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'

import Result_Container from "../component/Result._Container";

const Result = () => {
    const count1 = useRef(0)
    useEffect(()=>{
        count1.current = count1.current + 1;
    })

    return (
        <div>
            <Result_Container/>
        </div>
    )
}
export default Result