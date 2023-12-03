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

const StudentList = ({ show, student, changeEach, currentPage }:
  {show:string, student:Student[], changeEach?:any, currentPage:number}) => {

  let components: React.ReactNode[] = []

  if (show == 'input') {
    student.map((item) => {
      if (item.page == currentPage) {
        components.push(
          <Student key={item.id} student={item} changeEach={changeEach} />)
      }
    })
  } else if (show == 'result') {
    student.map((item) => {
      if (item.page == currentPage) {
        components.push(
          <Result key={item.id} student={item} />)
      }
    })
  }

  return (
    components
  );
};

export default StudentList

const Student = ({ student, changeEach }:{student:Student, changeEach:(record:string, value:any, id:number)=>void}) => {
  return (
    <tr className=''>
      <td className='flex justify-center'>
        <h1 className='text-white'>{student.id}</h1>
      </td>
      <td className=''>
        <input placeholder='รหัสนิสิต'
          className='rounded text-center w-full'
          value={student.nisitId}
          onChange={(e) => {
            changeEach('nisitId', e.target.value, student.id)
            // console.log(e.target.value)
          }}
          required
        ></input>
      </td>
      <td>
        <input placeholder='ชื่อ'
          className='rounded text-center w-full'
          value={student.firstname}
          onChange={(e) => {
            changeEach('firstname', e.target.value, student.id)
            // console.log(e.target.value)
          }}
          required={true}
        ></input>
      </td>
      <td>
        <input placeholder='นามสกุล'
          className='rounded text-center w-full'
          value={student.lastname}
          onChange={(e) => {
            changeEach('lastname', e.target.value, student.id)
            // console.log(e.target.value)
          }}
          required={true}
        ></input>
      </td>
      <td >
        <input placeholder=''
          className='rounded text-center w-full'
          value={student.work}
          onChange={(e) => {
            if (!isNaN(Number(e.target.value))) {
              changeEach('work', Number(e.target.value), student.id)
            }
            // changeEach(null,null,null,Number(e.target.value),null,id)
            // console.log(e.target.value)
          }}
          required={true}
        ></input>
      </td>
      <td >
        <input placeholder=''
          className='rounded text-center w-full'
          value={student.mid}
          onChange={(e) => {
            if (!isNaN(Number(e.target.value))) {
              changeEach('mid', Number(e.target.value), student.id)
            }
            // changeEach(null,null,null,Number(e.target.value),null,id)
            // console.log(e.target.value)
          }}
          required={true}
        ></input>
      </td>
      <td>
        <input placeholder=''
          className='rounded text-center w-full'
          value={student.final}
          onChange={(e) => {
            if (!isNaN(Number(e.target.value))) {
              changeEach('final', Number(e.target.value), student.id)
            }
            // console.log(e.target.value)
          }}
          required={true}
        ></input>
      </td>
      <td className="flex justify-center bg-red-500 rounded">
        <button className="w-full rounded hover:bg-red-600"
          onClick={() => {
            changeEach('Del', 'NO VALUE', student.id)
          }}
        >
          🗑️
        </button>
      </td>
    </tr>
  )
}

const Result = ({ student }:{student:Student}) => {
  return (
    <tr className="">
      <td className='text-center rounded-lg '>
        <h1 className="text-white">{student.id}</h1>
      </td>
      <td className='text-center rounded-md border-2 bg-white'>
        <h1>{student.nisitId}</h1>
      </td>
      <td className='text-center rounded-md border-2 bg-white'>
        <h1>{student.firstname}</h1>
      </td>
      <td className='text-center rounded-md border-2 bg-white'>
        <h1>{student.lastname}</h1>
      </td>
      <td className='text-center rounded-md border-2 bg-white'>
        <h1>{student.work}</h1>
      </td>
      <td className='text-center rounded-md border-2 bg-white'>
        <h1>{student.mid}</h1>
      </td>
      <td className='text-center rounded-md border-2 bg-white'>
        <h1>{student.final}</h1>
      </td>
      <td className='text-center rounded-md border-2 bg-white'>
        <h1>{student.work + student.mid + student.final}</h1>
      </td>
      <td className='text-center rounded-md border-2 bg-white'>
        <h1>{student.grade}</h1>
      </td>
    </tr>
  )
}