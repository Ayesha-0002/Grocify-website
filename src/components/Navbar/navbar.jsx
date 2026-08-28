import { useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";



const Navbar = () => {
    const [ShowMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!ShowMenu);
    }
    return (


        <header className="bg-white fixed top-0 right-0 left-0">

            <nav className='max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] px-10 flex justify-between align items-center'>

                {/* Logo */}
                <a href="#" className="text-3xl font-bold">Gr<span className="text-orange-500 uppercase">o</span>cify
                </a>

                {/* {Desktop menu} */}
                <ul className="md:flex items-center gap-x-15 hidden">
                    <li><a href="#" className="font-semibold tracking-wider text-orange-500">Home</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About Us</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact Us</a></li>
                </ul>

                {/* nav actions */}
                <div className="flex items-center gap-x-5">



                    {/* input field */}
                    <div className=" md:flex items-center p-1 border-2 border-orange-500 rounded-full hidden">
                        <input type="text" name="text" id="text" placeholder='Search..' autoComplete="off"
                            className="flex-1 h-[5vh] px-3 focus:outline-none" />
                        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                            <IoSearchSharp />
                        </button>

                    </div>

                    <a href="#" className="text-2xl text-zinc-800"><IoIosHeart /></a>
                    <a href="#" className="text-2xl text-zinc-800"><RiShoppingBag4Fill /></a>

                    {/* hamburger */}
                    <a herf="#" className="text-zinc-800 text-3xl md:hidden" onClick={toggleMenu}> {ShowMenu ? <TbMenu3 /> : <TbMenu2 />}


                    </a>
                </div>
                {/* Mobile menu */}
                <ul className={`flex flex-col items-center bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 gap-y-12 md:hidden absolute top-30 -left-full transform -translate-x-1/2  transition-all duration-500 ${ShowMenu ? 'left-1/2' : ""}`}>
                    <li><a href="#" className="font-semibold tracking-wider text-orange-500">Home</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About Us</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact Us</a></li>

                    <li className=" flex items-center p-1 border-2 border-orange-500 rounded-full md:hidden">
                        <input type="text" name="text" id="text" placeholder='Search..' autoComplete="off"
                            className="flex-1 h-[5vh] px-3 focus:outline-none" />
                        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                            <IoSearchSharp />
                        </button>

                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar