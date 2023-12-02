const AddButton = ({ changeEach, currentPage, totalPage, handlePage, totalStudent }) => {
    return (
        <button className='border-2 px-12 py-1.5 drop-shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 font-bold text-white rounded-lg hover:text-yellow-400 mx-5'
            onClick={() => {
                if ((totalStudent % 10) != 0) {
                    changeEach(null, null, null, null, null, null)
                } else {
                    changeEach(null, null, null, null, null, null)
                    handlePage(totalPage + 1)
                }
            }}
        >
            + 1 จำนวนนักเรียน
        </button>
    )
}

export default AddButton