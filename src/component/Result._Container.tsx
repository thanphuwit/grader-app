const Result_Container = ({student}) => {
    // console.log(student)
    // student = {
    //     "id": 1,
    //     "page": 1,
    //     "nisitId": "",
    //     "firstname": "",
    //     "lastname": "",
    //     "mid": 0,
    //     "final": 0,
    //     "sum": 0,
    //     "grade": 0
    // }
    
    // let courseName = data.courseName
    // let courseId = data.courseId
    // let student = data.student
    // console.log(data)

    let components = []
    student.map((item,index)=>{
        // console.log(item)
        components.push(
            <div className="flex flex-row bg-green-200 items-center w-2/3    justify-around border-2">
                <div className="border-black w-1/8 flex items-center justify-center">
                    <h1>{item.id}</h1>
                </div>
                <div className=" border-black w-1/8 flex items-center justify-center">
                    <h1>{item.nisitId}</h1>
                </div>
                <div className=" border-black w-1/8 flex items-center justify-center">
                    <h1>{item.firstname}</h1>
                </div>
                <div className=" border-black w-1/8 flex items-center justify-center">
                    <h1>{item.lastname}</h1>
                </div>
                <div className=" border-black w-1/8 flex items-center justify-center">
                    <h1>{item.mid}</h1>
                </div>
                <div className=" border-black w-1/8 flex items-center justify-center">
                    <h1>{item.final}</h1>
                </div>
                <div className=" border-black w-1/8 flex items-center justify-center">
                    <h1>{item.sum}</h1>
                </div>
                <div className=" border-black w-1/8 flex items-center justify-center">
                    <h1>{item.grade}</h1>
                </div>
            </div>
        )
    })

    
    return (
        <div className="flex flex-row justify-center items-center w-screen">
            <div className="flex flex-col bg-gray-500 w-screen justify-center items-center">
                <div className="flex flex-row bg-green-200 items-center w-2/3    justify-around border-2">
                    <div className=" border-black w-1/8 flex items-center justify-center">
                        <p>ลำดับ</p>
                    </div>
                    <div className=" border-black w-1/8 flex items-center justify-center">
                        <p>ชื่อ</p>
                    </div>
                    <div className=" border-black w-1/8 flex items-center justify-center">
                        <p>นามสกุล</p>
                    </div>
                    <div className="border-black w-1/8 flex items-center justify-center">
                        <p>คะแนนกลางภาค</p>
                    </div>
                    <div className=" border-black w-1/8 flex items-center justify-center">
                        <p>คะแนนปลายภาค</p>
                    </div>
                    <div className=" border-black w-1/8 flex items-center justify-center">
                        <p>คะแนนรวม</p>
                    </div>
                    <div className=" border-black w-1/8 flex items-center justify-center">
                        <p>เกรด</p>
                    </div>
                </div>
                {components}
            </div>
        </div>
    )
}
export default Result_Container