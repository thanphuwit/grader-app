import React from 'react';

const Pagination = ({student,currentPage,handlePage}) => {

  let components = []
  let totalPage = Math.ceil(student.length/10)
  // console.log(totalPage)
  Array(totalPage).fill().map((item,index)=>{
    components.push(
      <NumberPageButton pageNumber={index+1} currentPage={currentPage} handlePage={handlePage}/>
    )
  })

  return (
    <div className=' w-full h-10 flex justify-center '>
      <div className=' w-1/4 h-full flex justify-center '>
        {components}
      </div>
    </div>
  );
}

const NumberPageButton = ({pageNumber,currentPage,handlePage}) => {
  let style = ''
  if(currentPage==pageNumber){
    style='flex justify-center items-center border-2 px-4 mx-1 rounded-lg hover:bg-yellow-500 font-bold text-white bg-red-400'
  }else{
    style='flex justify-center items-center border-2 px-4 mx-1 rounded-lg hover:bg-yellow-500 font-bold text-white'
  }
  return (
    <button className={style}
      onClick={()=>{
        handlePage(pageNumber)
      }}
    >
        {pageNumber}
    </button>
  )
}

export default Pagination;
