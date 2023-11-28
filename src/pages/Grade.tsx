import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Student_Container from "../component/Student_Container";


const Grade = () => {

    const data = useSelector((state) => state.data)

    return (
        <div>
            <div>
                <Student_Container/>
            </div>
        </div>
    )
}
export default Grade