import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";

import Heading from '../Heading/Heading'
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <section>
      <div className='max-w-[1400px] px-10 py-20 mx-auto'>
        <Heading highlight='Customers' heading='Saying' />
        {/* main card div */}
        <div className='flex justify-end gap-x-3 py-5 mt-5   '>

          <button className='custom-prev text-2xl rounded-lg flex justify-center items-center text-zinc-800 bg-zinc-100 h-11 w-11 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer '>
            <IoIosArrowBack />
          </button>
            <button className='custom-next text-2xl rounded-lg flex justify-center items-center text-zinc-800 bg-zinc-100 h-11 w-11 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
              <IoIosArrowForward />
            </button >
        </div>


        <Swiper navigation={
          {
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
          }}
          loop={true}
          breakpoints={{ 
            640: {slidesPerView : 1, spaceBetween : 20},
            768: {slidesPerView : 2, spaceBetween : 20},
            1024: {slidesPerView : 3, spaceBetween : 20},
          }
          }
          modules={[Navigation]}
          className="mySwiper">
          {
            review.map(item => {
              return (
                /* testimonials card */

                <SwiperSlide key={item.id} className='bg-zinc-100 p-8 rounded-xl'>
                  <div className=' flex gap-5 items-center'>
                    <div className='w-16 h-16 rounded-full  outline-2 outline-offset-4 outline-orange-500 overflow-hidden'>
                     <img src= {item.image}className='w-full h-full ' />
                    </div>
                    <div className='flex flex-col'>

                    <h1 className='text-xl font-bold'>{item.name}</h1>
                    <p className='text-zinc-600'>{item.profession}</p>
                    <span className='flex text-yellow-400 text-xl gap-1 mt-3'>
                      {Array.from({length: item.rating}, (_, index)=>(
                        <FaStar />
                      ))}
                    </span>
                      </div>

                  </div>
                  <div className='mt-10 min-h-[15vh]'>
                    <p className='text-zinc-600'>{item.para}</p>
                  </div>
                </SwiperSlide>

              )
            })
          }
        </Swiper>

      </div>

    </section>
  )
}


export default Testimonials

const review = [
  {
    id: 1,
    name: ' Emily Johnson',
    profession: 'Food Blogger',
    rating: 3,
    para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
    image: Customer1,
  },
  {
    id: 2,
    name: 'David Smith',
    profession: 'Chef',
    rating: 4,
    para: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!',
    image: Customer2,
  },
  {
    id: 3,
    name: 'Alya Zahra',
    profession: 'Model',
    rating: 5,
    para: 'Shopping online with FreshBasket has saved me so much time. I trust them for my family weekly groceries—always fresh, affordable, and reliable',
    image: Customer3,
  },
  {
    id: 4,
    name: ' Carlos Mendes',
    profession: 'Fitness Coach',
    rating: 3,
    para: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!',
    image: Customer4,
  },
  {
    id: 5,
    name: ' Natcha Phongchai',
    profession: 'Nutritionist',
    rating: 5,
    para: 'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.',
    image: Customer5,
  },

]