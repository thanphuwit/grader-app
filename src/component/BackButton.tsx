import { useNavigate } from "react-router-dom";

const BackButton = ({destination}) => {
    const navigate = useNavigate()
    return (
        <button className='p-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 drop-shadow-xl mr-40'
            onClick={()=>{
                navigate(destination)
             }}
            >
            <h1 className='text-white font-bold'>ย้อนกลับ / แก้ไข</h1>
        </button>
    )
}

export default BackButton