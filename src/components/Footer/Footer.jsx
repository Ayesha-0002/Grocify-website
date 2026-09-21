import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='bg-zinc-100 py-20'>
            <div className='flex flex-wrap max-w-[1400px] mx-auto px-10 gap-y-12 '>

                <div className=' flex-1 basis-[300px]'>
                    <a href="#" className="text-3xl font-bold">Gr<span className="text-orange-500 uppercase">o</span>cify
                    </a>
                    <p className='text-zinc-600 max-w-[350px] mt-6'>
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>

                    <p className='text-zinc-800 mt-6'>
                        2025 &copy; All Rights Reserved
                    </p>
                </div>


                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800'>About</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800'>FAQ'S</a>
                    </li>
                </ul>

                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800'>Support Center</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800'>Feedback</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800'>Contact Us</a>
                    </li>
                </ul>

                
                    <div className='flex-1'>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
                        <p className='text-zinc-600  mt-6'>
                            Question or Feedback? <br /> we'd love to here from you.
                        </p>

                        <div className='flex p-1 rounded-lg mt-6 bg-white'>
                            <input type="email" name="email" id="email" autoComplete='off' placeholder='Email Address' className='h-[5vh] pl-4 flex-1 focus:outline-none' />
                            <button className=' bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg p-2 cursor-pointer hover:to-orange-600 text-white'>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>

                
            </div>

        </footer>
    )
}

export default Footer
