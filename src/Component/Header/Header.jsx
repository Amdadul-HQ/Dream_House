import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Context/ContextComponent";
import Swal from 'sweetalert2'

const Header = () => {
    const { user , logOut } = useContext(AuthContext)
    
    const handleLogOut = () => {
        logOut()
        .then(()=>{
            Swal.fire({
                title: "Log Out Successful!",
                text: "Click Ok!",
                icon: "success"
              })
        })
        .catch( errors =>{
            Swal.fire({
                title: `${errors.message.split('/')[1].split(')')[0]}`,
                text: "Click Ok For Close!",
                icon: "error"
              })
        })
    }


    return (
        <header className="max-w-screen-xl mx-auto">
            <nav className="flex items-center justify-between py-5">
                <Link to='/' className="text-4xl font-bold"><span className="text-[#6E00FF]">Dream</span> House</Link>
                <ul className="flex items-center gap-x-8 text-lg font-medium">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='/contract'>Contract</NavLink>
                    <NavLink to='/profile'>Profile</NavLink>
                </ul>
                <div className="flex items-center gap-x-3">
                {
                    user ? <Link onClick={handleLogOut} className="border-2 border-indigo-600 backdrop-blur-3xl relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600  bg-gray-50 rounded-full hover:text-white group ">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative">Log Out</span>
                </Link>  :
                 <Link to='/login' className="border-2 border-indigo-600 backdrop-blur-3xl relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600  bg-gray-50 rounded-full hover:text-white group ">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative">Log in</span>
                </Link>
                }
                        <div className="p-2 border-2 rounded-full cursor-pointer border-[#010101]">
                            <FaUser className="text-2xl"/>
                        </div>
                     </div>
            </nav>
        </header>
    );
};

export default Header;