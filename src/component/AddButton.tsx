const AddButton = ({ text, quantity ,changeEach, currentPage, totalPage, handlePage, totalStudent }:
    {text:string ,quantity:string, changeEach:(record:string)=>void, currentPage:number, totalPage:number, handlePage:(newPage:number)=>void, totalStudent:number}) => {
    return (
        <button className='border-2 px-12 py-1.5 drop-shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 font-bold text-white rounded-lg hover:text-yellow-400 mx-5'
            onClick={() => {
                
                if(quantity=='Add1'){
                    if ((totalStudent % 10) != 0) {
                        changeEach(quantity)
                    } else {
                        changeEach(quantity)
                        handlePage(totalPage + 1)
                    }
                }
                else if(quantity=='Add10'){
                    changeEach(quantity)
                    handlePage(totalPage + 1)
                }
            }}
        >
            {text}
        </button>
    )
}

export default AddButton