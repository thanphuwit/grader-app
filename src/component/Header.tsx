const Header = ({text}) => {
    return (
        <div className='p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-xl ml-40'>
            <h1 className='text-white font-bold'>โปรแกรมตัดเกรด / {text}</h1>
        </div>

    )
}

export default Header