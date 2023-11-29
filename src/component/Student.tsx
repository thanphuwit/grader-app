import { Link, Outlet } from 'react-router-dom'
import { useRef,useState,useEffect } from 'react'
import Result from '../pages/Result'

const Student = ({id,nisitId,firstname,lastname,mid,final,changeEach}) => {
    return (
        // <tr>
        //     <td className='jusitify-center flex w-1/5 '><h1>{id}</h1></td>
        //     <td><input placeholder='รหัสนิสิต'
        //         className='rounded text-center'
        //         onChange={(e)=>{
        //             changeEach(e.target.value,null,null,null,null,id)
        //             // console.log(e.target.value)
        //         }}
        //         ></input></td>
        //     <td>2</td>
        // </tr>
        <tr className=''>
            <td className='flex justify-center'>
                <h1>{id}</h1>
            </td>
            <td className=''>
                <input placeholder='รหัสนิสิต'
                className='rounded text-center w-full'
                onChange={(e)=>{
                    changeEach(e.target.value,null,null,null,null,id)
                    // console.log(e.target.value)
                }}
                ></input>
            </td>
            <td>
                <input placeholder='ชื่อ'
                className='rounded text-center w-full'
                onChange={(e)=>{
                    changeEach(null,e.target.value,null,null,null,id)
                    // console.log(e.target.value)
                }}
                ></input>
            </td>
            <td>
                <input placeholder='นามสกุล'
                className='rounded text-center w-full'
                onChange={(e)=>{
                    changeEach(null,null,e.target.value,null,null,id)
                    // console.log(e.target.value)
                }}
                ></input>
            </td>
            <td >
                <input placeholder=''
                className='rounded text-center w-full'
                onChange={(e)=>{
                    changeEach(null,null,null,e.target.value,null,id)
                    // console.log(e.target.value)
                }}
                ></input>
            </td>
            <td>
                <input placeholder=''
                className='rounded text-center w-full'
                onChange={(e)=>{
                    changeEach(null,null,null,null,e.target.value,id)
                    // console.log(e.target.value)
                }}
                ></input>
            </td>

        </tr>
    )

}

export default Student 
