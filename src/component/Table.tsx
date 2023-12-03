import StudentList from "./StudentList"

interface Student {
    id: number,
    page: number,
    nisitId: string,
    firstname: string,
    lastname: string,
    work: number,
    mid: number,
    final: number,
    grade: string,
}

const Table = ({ show, student, changeEach, currentPage }:
    {show:string, student:Student[], changeEach?:(record:string,value:any,id:number)=>void, currentPage:number}) => {

    if (show == 'input') {
        return (
            <table className='rounded-lg border-separate border-spacing-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-5/6 drop-shadow-2xl'>
                <tbody>
                    <tr className=' border-bottom-2'>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>ลำดับ</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-2/12'>รหัสนิสิต</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-2/12'>ชื่อ</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-2/12'>นามสกุล</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>คะแนนเก็บ</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>คะแนนกลางภาค</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>คะแนนปลายภาค</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>แก้ไข</td>
                    </tr>
                    <StudentList show={'input'} student={student} changeEach={changeEach} currentPage={currentPage} />
                </tbody>
            </table>
        )
    }
    else if (show == 'result') {
        return (
            <table className='rounded-lg border-separate border-spacing-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-5/6 drop-shadow-2xl'>
                <tbody>
                    <tr className=''>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>ลำดับ</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/6'>รหัสนิสิต</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/6'>ชื่อ</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/6'>นามสกุล</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>คะแนนเก็บ</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>กลางภาค</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>ปลายภาค</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>รวม</td>
                        <td className='border-2 text-white font-bold rounded-md text-center w-1/12'>เกรด</td>
                    </tr>
                    <StudentList show={'result'} student={student} currentPage={currentPage} />
                </tbody>
            </table>
        )
    }
}

export default Table