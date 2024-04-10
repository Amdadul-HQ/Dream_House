import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/ContextComponent";
import Swal from 'sweetalert2';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Tooltip } from 'react-tooltip'

const Header = () => {
    const[showMenu,setShowMenu] = useState(false)
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

    const handleMenuBar = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className="max-w-screen-xl mx-auto md:mb-0 mb-14 overflow-x-hidden">
            <nav className="flex items-center justify-between py-5 md:px-0 px-5">
                <Link to='/' className="md:text-4xl text-xl font-bold"><span className="text-[#6E00FF]">Dream</span> House</Link>
                <ul className={`flex md:static fixed top-20 ${showMenu ? "left-10" : "-left-96"} transition-all duration-500 fixed items-center gap-x-1 md:gap-x-8 text-lg font-medium`}>
                    <NavLink className={({isActive}) => isActive ? 'text-indigo-600 md:font-semibold px-2 py-1 rounded-lg border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all' : 'px-2 py-1 transition-all duration-500 hover:bg-indigo-600 hover:text-white border border-transparent rounded-lg'} to='/'>Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-indigo-600 md:font-semibold px-2 py-1 rounded-lg border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all' : 'px-2 py-1 transition-all duration-500 hover:bg-indigo-600 hover:text-white border border-transparent rounded-lg'} to='/about'>About Us</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-indigo-600 md:font-semibold px-2 py-1 rounded-lg border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all' : 'px-2 py-1 transition-all duration-500 hover:bg-indigo-600 hover:text-white border border-transparent rounded-lg'} to='/faq'>FAQ</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-indigo-600 md:font-semibold px-2 py-1 rounded-lg border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all' : 'px-2 py-1 transition-all duration-500 hover:bg-indigo-600 hover:text-white border border-transparent rounded-lg'} to='/profile'>Profile</NavLink>
                    
                </ul>
                <div className="md:flex md:flex-row hidden fixed md:static items-center gap-x-3">
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
                    <svg className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative">Log in</span>
                </Link>
                }
                {
                    user ? <div className="p-1 rounded-full border-2">
                        <img className="w-10 h-10 rounded-full" data-tooltip-id="my-tooltip" data-tooltip-place="right" data-tooltip-content={user?.displayName}  src={user?.photoURL || <FaUser className="text-2xl"></FaUser>} alt="" />
                    </div> : <div className="p-2 border-2 rounded-full cursor-pointer border-[#010101]">
                    <FaUser className="text-2xl"/>
                </div>
                }
                </div>
                <div className="md:hidden items-center gap-x-3 text-3xl flex">
                {
                        user ? <Link onClick={handleLogOut} className="border-2 md:hidden border-indigo-600 backdrop-blur-3xl relative inline-flex items-center px-2 py-1 overflow-hidden text-lg font-medium text-indigo-600  bg-gray-50 rounded-full hover:text-white group ">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        {/* <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"> */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        {/* </span> */}
                        <span className="relative">Log Out</span>
                    </Link>  :
                     <Link to='/login' className="border-2 md:hidden border-indigo-600 backdrop-blur-3xl relative inline-flex items-center px-2 py-1 overflow-hidden text-lg font-medium text-indigo-600  bg-gray-50 rounded-full hover:text-white group ">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        {/* <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"> */}
                        {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                        {/* </span> */}
                        <span className="relative">Log in</span>
                    </Link>
                    }
                    {
                        showMenu ? <IoClose onClick={handleMenuBar}></IoClose> : <IoMenu onClick={handleMenuBar}></IoMenu>
                    }
                </div>
                <Tooltip id="my-tooltip" />
            </nav>
        </header>
    );
};

export default Header;