const StudentList = ({ show, student, changeEach, currentPage }) => {

  let components = []

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

const Student = ({ student, changeEach }) => {
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
            changeEach(e.target.value, null, null, null, null, null, student.id)
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
            changeEach(null, e.target.value, null, null, null, null, student.id)
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
            changeEach(null, null, e.target.value, null, null, null, student.id)
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
              changeEach(null, null, null, Number(e.target.value), null, null, student.id)
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
              changeEach(null, null, null, null, Number(e.target.value), null, student.id)
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
              changeEach(null, null, null, null, null, Number(e.target.value), student.id)
            }
            // console.log(e.target.value)
          }}
          required={true}
        ></input>
      </td>
      <td className="flex justify-center bg-red-500 rounded">
        <button className="w-full rounded hover:bg-red-600">
        🗑️
        </button>
      </td>
    </tr>
  )
}

const Result = ({ student }) => {
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