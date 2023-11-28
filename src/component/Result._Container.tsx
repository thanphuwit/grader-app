const Result_Container = ({data}) => {
    let courseName = data.courseName
    let courseId = data.courseId
    let student = data.student



    let components = []
    student.map((item,index)=>{
        // console.log(item)
        components.push(
            <div className="flex flex-row bg-green-200 items-center w-2/3    justify-around border-2">
                <div className="border-2 border-black w-1/5 flex items-center justify-center">
                    <h1 className="p-2">{item.nisitId}</h1>
                </div>
                <div className="border-2 border-black w-1/5 flex items-center justify-center">
                    <h1 className="p-2">{item.name}</h1>
                </div>
                <div className="border-2 border-black w-1/5 flex items-center justify-center">
                    <h1 className="p-2">{item.mid}</h1>
                </div>
                <div className="border-2 border-black w-1/5 flex items-center justify-center">
                    <h1 className="p-2">{item.final}</h1>
                </div>
                <div className="border-2 border-black w-1/5 flex items-center justify-center">
                    <h1 className="p-2">{item.nisitId}</h1>
                </div>
            </div>
        )
    })
    console.log(data)
    
    return (
        <div className="flex flex-row justify-center items-center w-screen">
            <div className="flex flex-col bg-gray-500 w-screen justify-center items-center">
                <div className="flex flex-row bg-green-200 items-center w-2/3    justify-around border-2">
                    <div className="border-2 border-black w-1/5 flex items-center justify-center">
                        <p>ลำดับ</p>
                    </div>
                    <div className="border-2 border-black w-1/5 flex items-center justify-center">
                        <p>ชื่อ-นามสกุล</p>
                    </div>
                    <div className="border-2 border-black w-1/5 flex items-center justify-center">
                        <p>คะแนนกลางภาค</p>
                    </div>
                    <div className="border-2 border-black w-1/5 flex items-center justify-center">
                        <p>คะแนนปลายภาค</p>
                    </div>
                    <div className="border-2 border-black w-1/5 flex items-center justify-center">
                        <p>เกรด</p>
                    </div>
                </div>
                {components}
            </div>
        </div>
    )
}
export default Result_Container