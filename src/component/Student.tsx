import { Link, Outlet } from 'react-router-dom'
import { useRef,useState,useEffect } from 'react'
import Result from '../pages/Result'

const Student = ({id,nisitId,firstname,lastname,mid,final,changeEach}) => {
    return (
        <tr className=''>
            <td className='flex justify-center'>
                <h1>{id}</h1>
            </td>
            <td className=''>
                <input placeholder='รหัสนิสิต'
                className='rounded text-center w-full'
                value={nisitId}
                onChange={(e)=>{
                    changeEach(e.target.value,null,null,null,null,id)
                    // console.log(e.target.value)
                }}
                ></input>
            </td>
            <td>
                <input placeholder='ชื่อ'
                className='rounded text-center w-full'
                value={firstname}
                onChange={(e)=>{
                    changeEach(null,e.target.value,null,null,null,id)
                    // console.log(e.target.value)
                }}
                ></input>
            </td>
            <td>
                <input placeholder='นามสกุล'
                className='rounded text-center w-full'
                value={lastname}
                onChange={(e)=>{
                    changeEach(null,null,e.target.value,null,null,id)
                    // console.log(e.target.value)
                }}
                ></input>
            </td>
            <td >
                <input placeholder=''
                className='rounded text-center w-full'
                value={mid}
                onChange={(e)=>{
                    if(!isNaN(Number(e.target.value))){
                        changeEach(null,null,null,Number(e.target.value),null,id)
                    }
                    // changeEach(null,null,null,Number(e.target.value),null,id)
                    // console.log(e.target.value)
                }}
                ></input>
            </td>
            <td>
                <input placeholder=''
                className='rounded text-center w-full'
                value={final}
                onChange={(e)=>{
                    if(!isNaN(Number(e.target.value))){
                        changeEach(null,null,null,null,Number(e.target.value),id)
                    }
                    // console.log(e.target.value)
                }}
                ></input>
            </td>

        </tr>
    )

}

export default Student 
