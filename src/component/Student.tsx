import InputData from './InputData'
import { useRef,useState,useEffect } from 'react'

const Student = (props) => {
    
    const inputRef = useRef([])
    const [count,setCount] = useState<number>(0)

    const [student,setStudent] = useState<Object[]>([])

    let components = []
    // props.data.map((record,index)=>{
    //     components.push( 
    //     <InputData
    //     key={index}
    //     ref={(element)=>{
    //         refs.current[index] = element
    //     }}
    //     id={record.id} 
    //     nisitId={record.nisitId} 
    //     name={record.name} 
    //     mid={record.mid} 
    //     final={record.final}
    //     /> )
    // })
    Array(count).fill().map((item,index)=>{
        // console.log(inputRef.cur)
        components.push(<input
            key={index} ref={(element) => (inputRef.current[index] = element)}
            
            className='mx-2'
            />)
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

            {components}

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

                        
                        // if(index%4!=3){
                        //     obj.push(inputRef.current[index].value)
                        // }
                        // console.log(inputRef.current[index].value)
                        // if(index%4==0){
                        //     nisitId={nisitId:inputRef.current[index].value}
                        //     console.log('nisit pass')
                        // }
                        // if(index%4==1){
                        //     name={name:inputRef.current[index].value}
                        //     console.log('name pass')
                        // }
                        // if(index%4==2){
                        //     mid={mid:inputRef.current[index].value}
                        //     console.log('mid pass')
                        // }
                        // if(index%4==3){
                        //     final={final:inputRef.current[index].value}
                        //     console.log('final pass')
                        // }
                        // // console.log(nisitId)
                        // //     console.log(name)
                        // //     console.log(mid)
                        // //     console.log(final)
                        // if(Object.keys(nisitId).length!=0 && Object.keys(name).length!=0 && Object.keys(mid).length!=0 && Object.keys(final).length!=0){
                        //     console.log(nisitId)
                        //     console.log(name)
                        //     console.log(mid)
                        //     console.log(final)
                            
                        //     obj.assign({nisitId,name,mid,final})
                        // }
                    })
                    setStudent(arr_obj)
                }}
            >
                ดึงค่าจากทุกref
            </button>
            <h1>Render Count: {count1.current}</h1>
        </div>
    )

}

export default Student