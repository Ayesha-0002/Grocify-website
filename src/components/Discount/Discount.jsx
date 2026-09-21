import React from 'react'
import Button from '../Button/Button'
import freshfruits from '../../assets/fresh-fruits.png'
const Discount = () => {
    return (
        <section className='bg-zinc-100 bg-no-repeat bg-right bg-contain ' style={{backgroundImage: `url(${freshfruits})`}}>  
            <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10 '>
                <span className='md:text-9xl text-6xl font-bold text-orange-500 transform md:-rotate-90 md:self-center h-fit  '>20%</span>
                
                
                <div className='max-w-[700px]'>
                    <h3 className='md:text-7xl text-4xl font-bold text-zinc-800 '>First Order <br /> Discount!</h3>
                    <p className='text-zinc-600 my-6'>
                        Enjoy an exclusive first order discount on our grocery website! Shop fresh <br /> essentials and save big on your first purchase. Fast delivery and quality guaranteed.
                    </p>
                    <Button content="Get a Discount" />
                </div>
            </div>

        </section>
    )
}

export default Discount