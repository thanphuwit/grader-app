import { Link, Outlet } from 'react-router-dom'
import { useRef,useState,useEffect, forwardRef } from 'react'
import { addStudent } from "../component/Slice";
import { useSelector, useDispatch } from 'react-redux'
import Student from './Student';

const Student_Container = ({data,changeEachRecord}) => {
    const dispatch = useDispatch()
    
    const inputRef = useRef([])

    const [count,setCount] = useState<number>(0)

    const [student,setStudent] = useState<Object[]>([])

    let components = []
    let no = 1
    let arr =[]
    // Array(count).fill().map((item,index)=>{
    //         if(index%4==0){
    //             if(no<10){
    //                 components.push(
    //                     <h1 className='inline ml-2' >{no}.</h1>
    //                 )
    //             }
    //             else{
    //                 components.push(
    //                     <h1 className='inline'>{no}.</h1>
    //                 )
    //             }
    //             no = no+1
    //             components.push(<input
    //                 key={index} ref={(element) => (inputRef.current[index] = element)}
    //                 className='mx-2 inline my-1'
    //                 />)
                    
    //         }else if(index%4==3){
    //             components.push(<input
    //                 key={index} ref={(element) => (inputRef.current[index] = element)}
    //                 className='mx-2 inline'
    //                 />
    //                 )
    //                 components.push(<h1 className='mx-2' ></h1>)
                
    //         }else{
    //             components.push(<input
    //                 key={index} ref={(element) => (inputRef.current[index] = element)}
    //                 className='mx-2 inline '
    //                 />
    //                 )
    //         }
    // })

    const changeEach = (name,mid,final,id=null) =>{
        changeEachRecord(name,mid,final,id)
    }

    data.map((record,index)=>{
        components.push(
            <Student
                id={record.id}
                pageNumber={record.pageNumber}
                name={record.name}
                mid={record.mid}
                final={record.final}
                changeEach={changeEachRecord}
            />
        )
    })

    const handleStudent = ({student}) => {
        setStudent(student)
    }

    return (
        <div className='bg-gray-500 p-3'>
            <button className='border-2 bg-red-500'
                onClick={()=>{
                    // let newCount = count+4
                    // setCount(newCount)
                    changeEach(null,null,null,null)
                }}
            >
                เพิ่ม
            </button>
            <button className='border-2 bg-red-500'
                onClick={()=>{
                    console.log(student)
                }}
            >
                ดูค่าในobject
            </button>
            <div className='flex justify-center items-center bg-red-500'>
                <div className='justify-center items-center bg-green-500 p-2'>
                    {components}
                </div>
            </div>

            <NextPageButton handleStudent={handleStudent} count={count} ref={inputRef}/>
            {/* <div>
                <Link to='/Result'>หน้าถัดไป</Link>
            </div> */}
            <br/>
            <Outlet/>
        </div>
    )

}

const NextPageButton = forwardRef((props,handleStudent,count,ref) => {
    const dispatch = useDispatch()
    return (
        <div>

        </div>
        // <Link className='border-2 bg-red-500'
        //         onClick={()=>{
        //             let arr_obj = []
        //             let arr = []
        //             let nisitId=''
        //             let name=''
        //             let mid=-1
        //             let final=-1
        //             Array(count).fill().map((_,index)=>{
        //                 if(index%4!=3){
        //                     arr.push(ref.current[index].value)
        //                 }
        //                 else{
        //                     arr.push(ref.current[index].value)
        //                     arr.map((value,index)=>{
        //                         if(index%4==0){
        //                             nisitId=value
        //                         }
        //                         if(index%4==1){
        //                             name=value
        //                         }
        //                         if(index%4==2){
        //                             mid=value
        //                         }
        //                         if(index%4==3){
        //                             final=value
        //                         }
        //                         if(nisitId!='' && name!='' && mid!=-1 && final!=-1){
        //                             // console.log('k')
        //                             arr_obj = [...arr_obj,{nisitId,name,mid,final}]
        //                             nisitId=''
        //                             name=''
        //                             mid=-1
        //                             final=-1
        //                             arr=[]
        //                         }
        //                     })
        //                 }

        //             })
        //             // dispatch(addStudent(arr_obj))
        //             setStudent(arr_obj)
        //             dispatch(addStudent(arr_obj))
        //         }}
        //         to='/Result'
        //     >
        //         หน้าถัดไป
        //     </Link>
    )
})

export default Student_Container