import { useRef } from 'react'

const InputData = (props) => {

    return (
        <div className="bg-red-200 flex">
            <h1 className='px-2'>{props.ref}</h1>
            <input className="border-2"
            ></input>
            <input className="border-2"></input>
            <input className="border-2"></input>
            <button className="px-2"
                onClick={()=>{
                    console.log(props.ref)
                }}
            >เบิ่ง</button>
        </div>
        
    )
}

export default InputData