import React from 'react'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

import Heading from "../Heading/Heading.jsx"

const Process = () => {
    const rendersteps = steps.map(item => {
        return (
            <div key={item.id} className={`w-full ${item.id % 2 === 0 ? 'lg:-mt-20'  : ''}`}>

                {/* Number Circle Responsive Sizes */}
                <span className="flex justify-center items-center mx-auto h-16 w-16 md:h-20 md:w-20  text-white text-8xl  rounded-full outline-[3px] outline-dashed outline-offset-7  outline-zinc-800  bg-zinc-800">
                    {item.number}
                </span>

                {/* Icon and Text Container */}
                <div className="flex items-center gap-x-4 mt-6 md:mt-8">

                    {/* Orange Icon */}
                    <span className="flex shrink-0 justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 text-white w-12 h-12 md:w-14 md:h-14 text-2xl md:text-3xl rounded-full">
                        {item.icon}
                    </span>

                    {/* Text Container */}
                    <div className="flex-1">
                        <h4 className="text-zinc-800 font-bold text-lg md:text-xl">{item.title}</h4>
                        <p className="text-zinc-600 text-sm mt-1">{item.para}</p>
                    </div>

                </div>

            </div>
        )
    })

    return (
        <section>
            {/* Fixed typo: max-w-[1400px] */}
            <div className='max-w-[1400px] py-12 md:py-20 px-6 md:px-10 mx-auto'>
                <div className='mr-auto w-fit mb-10'>
                    <Heading highlight='Our' heading='Process' />
                </div>
                
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:mt-24 ">
                    {rendersteps}
                </div>

            </div>
        </section>
    )
}

export default Process

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'It is a long established fact that a reader',
        icon: <PiPlant />
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'It is a long established fact that a reader',
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: 'It is a long established fact that a reader',
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: 'It is a long established fact that a reader',
        icon: <BsTruck />
    }
]