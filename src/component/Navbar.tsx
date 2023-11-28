import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="bg-black h-16">
          <nav className="flex justify-center">
            <div className="flex space-x-10 mt-2.5">
                <div className="ml-3 flex items-baseline space-x-2">
                    <Link to='/Course' className='text-white hover:bg-red-800 px-10 py-2 rounded-md text-md font-medium border-2'>1</Link>
                    <Link to='/Grade' className='text-white hover:bg-red-800 px-10 py-2 rounded-md text-md font-medium border-2'>2</Link>
                    <Link to='/Result' className='text-white hover:bg-red-800 px-10 py-2 rounded-md text-md font-medium border-2'>3</Link>
                </div>
            </div>
          </nav>
          <Outlet/>
        
        </div>
      )
}

export default Navbar