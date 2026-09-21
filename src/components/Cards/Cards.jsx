import React from 'react'
import Button from '../Button/Button.jsx'
import { FaHeart, FaPlus } from 'react-icons/fa'
const Cards = ({image ,name, price}) => {
    return (
        <div className='p-5 bg-zinc-100 rounded-xl '>
            {/* Card icons */}
            <div className='flex justify-between '>
                <span className='text-3xl text-zinc-300'> 
                    <FaHeart />
                </span>
                <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-4 py-3 rounded-lg'>
                    <FaPlus />
                </button>

            </div>

            {/* Card image */}
            <div className='w-full h-50 '>
                <img className='h-full w-full object-contain mx-auto' src={image}  />
            </div>
            {/* Card content  */}
            <div className='text-center'>
                <h3 className='text-2xl font-semibold'>{name}</h3>
                <p className='text-2xl font-bold mt-4 mb-3'>${price.toFixed(2)}</p>
                <Button content='Shop Now' />
            </div>
        </div>
    )
}

export default Cards