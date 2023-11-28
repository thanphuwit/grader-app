import InputData from './InputData'
import { useRef,useState,useEffect } from 'react'

const Student = () => {
    
    const inputRef = useRef([])

    const [count,setCount] = useState<number>(0)

    const [student,setStudent] = useState<Object[]>([])

    let components = []
    let no = 1
    let arr =[]
    Array(count).fill().map((item,index)=>{
        // if(index%4!=3){
        //     arr.push(<input
        //         key={index} ref={(element) => (inputRef.current[index] = element)}
        //         className='mx-2 '
        //         />)
        // }
        // else{
        //     arr.push(<input
        //         key={index} ref={(element) => (inputRef.current[index] = element)}
        //         className='mx-2 '
        //         />)
        //     components.push(
        //         <div></div>
        //     )
        // }
            if(index%4==0){
                if(no<10){
                    components.push(
                        <h1 className='inline ml-2'>{no}.</h1>
                    )
                }
                else{
                    components.push(
                        <h1 className='inline'>{no}.</h1>
                    )
                }
                no = no+1
                components.push(<input
                    key={index} ref={(element) => (inputRef.current[index] = element)}
                    className='mx-2 inline my-1'
                    />)
                    
            }else if(index%4==3){
                components.push(<input
                    key={index} ref={(element) => (inputRef.current[index] = element)}
                    className='mx-2 inline'
                    />
                    )
                    components.push(<h1 className='mx-2'></h1>)
                
            }else{
                components.push(<input
                    key={index} ref={(element) => (inputRef.current[index] = element)}
                    className='mx-2 inline '
                    />
                    )
            }
    })

    const count1 = useRef(0)
    useEffect(()=>{ 
        count1.current = count1.current + 1;
    })

    return (
        <div className='bg-gray-500 p-3'>
            <button className='border-2 bg-red-500'
                onClick={()=>{
                    let newCount = count+4
                    setCount(newCount)
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

            <button className='border-2 bg-red-500'
                onClick={()=>{
                    let arr_obj = []
                    let arr = []
                    let nisitId=''
                    let name=''
                    let mid=-1
                    let final=-1
                    Array(count).fill().map((_,index)=>{
                        if(index%4!=3){
                            arr.push(inputRef.current[index].value)
                        }
                        else{
                            arr.push(inputRef.current[index].value)
                            arr.map((value,index)=>{
                                if(index%4==0){
                                    nisitId=value
                                }
                                if(index%4==1){
                                    name=value
                                }
                                if(index%4==2){
                                    mid=value
                                }
                                if(index%4==3){
                                    final=value
                                }
                                if(nisitId!='' && name!='' && mid!=-1 && final!=-1){
                                    console.log('k')
                                    arr_obj = [...arr_obj,{nisitId,name,mid,final}]
                                    nisitId=''
                                    name=''
                                    mid=-1
                                    final=-1
                                    arr=[]
                                }
                            })
                        }

                    })
                    setStudent(arr_obj)
                }}
            >
                ดึงค่าจากทุกref
            </button>
            <br/>
            <input className='border-2'>
            </input>
            <input className='border-2'>
            </input>
            <input className='border-2'>
            </input>
            <input className='border-2'>
            </input>
            <br/>
            <input className='border-2'>
            </input>
            <input className='border-2'>
            </input>
            <input className='border-2'>
            </input>
            <input className='border-2'>
            </input>
            <h1>Render Count: {count1.current}</h1>
        </div>
    )

}

export default Student