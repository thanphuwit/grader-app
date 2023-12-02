import React from 'react';

const Pagination = ({ student, currentPage, totalPage, handlePage }) => {

  let components = []
  // console.log(totalPage)
  Array(totalPage).fill().map((item, index) => {
    components.push(
      <NumberPageButton key={index + 1} pageNumber={index + 1} currentPage={currentPage} handlePage={handlePage} />
    )
  })

  return (
    <div className=' w-1/4 h-full flex justify-center '>
      <button className='flex justify-center items-center border-2 px-4 mx-1 rounded-lg bg-purple-400 hover:bg-pink-500 font-bold text-white'
        onClick={() => {
          if (currentPage != 1) {
            handlePage(currentPage - 1)
          }
        }}
      >
        &lt;
      </button>
      {components}
      <button className='flex justify-center items-center border-2 px-4 mx-1 rounded-lg bg-purple-400 hover:bg-pink-500 font-bold text-white'
        onClick={() => {
          if (currentPage != totalPage) {
            handlePage(currentPage + 1)
          }
        }}
      >
        &gt;
      </button>
    </div>

  );
}

const NumberPageButton = ({ pageNumber, currentPage, handlePage }) => {
  let style = ''
  if (currentPage == pageNumber) {
    style = 'flex justify-center items-center border-2 px-4 mx-1 rounded-lg font-bold text-white bg-purple-500'
  } else {
    style = 'flex justify-center items-center border-2 px-4 mx-1 rounded-lg hover:bg-pink-500 font-bold text-white bg-purple-400'
  }
  return (
    <button className={style}
      onClick={() => {
        handlePage(pageNumber)
      }}
    >
      {pageNumber}
    </button>
  )
}

export default Pagination;
