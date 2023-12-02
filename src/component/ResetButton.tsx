const ResetButton = ({handleStudent, handlePage }) => {
    return (
        <div className="mr-40">
            <button className=' p-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 drop-shadow-xl'
                onClick={() => {
                    handleStudent()
                    handlePage(1)
                }}
            >
                <h1 className='text-white font-bold'>ล้างค่า</h1>
            </button>
        </div>
    )
}

export default ResetButton