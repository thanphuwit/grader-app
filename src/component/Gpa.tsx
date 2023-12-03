const Gpa = ({ gpa, totalStudent }) => {
    return (
        <div className='py-4 px-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-xl justify-center flex flex-row'>
            <h1 className='text-white text-2xl font-bold'>GPA: {(Math.floor((gpa / totalStudent) * 100) / 100)}</h1>
        </div>
    )
}

export default Gpa