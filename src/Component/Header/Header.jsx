import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

const Header = () => {
    return (
        <header className="max-w-screen-xl mx-auto">
            <nav className="flex items-center justify-between py-5">
                <h1 className="text-4xl font-bold"><span className="text-[#6E00FF]">Dream</span> House</h1>
                <ul className="flex items-center gap-x-8 text-lg font-medium">
                    <NavLink>Home</NavLink>
                    <NavLink>About Us</NavLink>
                    <NavLink>Contract</NavLink>
                </ul>
                <div className="flex items-center gap-x-3">
                        <button className="bg-[#010101] text-white py-2 px-5 font-medium text-base rounded-[50px]">Sign Up</button>
                        <div className="p-2 border-2 rounded-full cursor-pointer border-[#010101]">
                            <FaUser className="text-2xl"/>
                        </div>
                     </div>
                
            </nav>
        </header>
    );
};

export default Header;