const CourseTitle = ({courseId,courseName}:{courseId:string, courseName:string}) => {
    return (
        <div className='flex ml-40'>
            <div className=' p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:drop-shadow-xl'>
                <h1 className='text-white font-bold'>รหัสวิชา: {courseId}</h1>
            </div>
            <div className='ml-3 p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-xl'>
                <h1 className='text-white font-bold'>ชื่อวิชา: {courseName}</h1>
            </div>
        </div>
    )
}

export default CourseTitle