import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {
  const leftValues= value.slice(0,2).map(item=>{
return(
  <div  key={item.id} className='flex md:flex-row-reverse  items-center gap-7'>
<div>
  <span className='text-white text-3xl w-15 h-15 rounded-full flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500'>
    {item.icon}
    </span>
</div> 

<div className='md:text-right'>
  <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
  <p className='text-zinc-600 mt-2'>{item.para}</p>
</div>
  </div>
)
  })

  




  const rightValues= value.slice(2,4).map(item=>{
return(
  <div  key={item.id} className='flex items-center gap-7'>
<div>
  <span className='text-white text-3xl w-15 h-15 rounded-full flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500'>
    {item.icon}
    </span>
</div> 

<div className=''>
  <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
  <p className='text-zinc-600 mt-2'>{item.para}</p>
</div>
  </div>
)
  })


  return (
    <section>
      <div className='max-w-[1700px] mx-auto px-10 py-20 '>
        <Heading highlight="Our" heading="Values" /> 

<div className='flex md:flex-row flex-col gap-15 md:gap-5 mt-15'>

  {/* left values */}
<div className='md:min-h-100 gap-15 flex justify-between  flex-col'>
  {leftValues}
</div>


<div className='md:flex w-1/2 hidden'>
<img src={Basket} />
</div>


{/* right values */}
<div className='md:min-h-100 gap-15 flex justify-between flex-col'>
  {rightValues}
</div>
</div>

      </div>
    </section>
  )
}

export default Values

const value=[
{  id: 1,
  title: "Trust",
  para: "It is a long established fact that a reader will be distracted by the readable.",
  icon: <FaHeart />

},

{  id: 2,
  title: "Always Fresh",
  para: "It is a long established fact that a reader will be distracted by the readable.",
  icon: <FaLeaf />

},
{  id: 3,
  title: "Food Safety",
  para: "It is a long established fact that a reader will be distracted by the readable.",
  icon: <FaShieldAlt />

},
{  id: 4,
  title: "100% Organic",
  para: "It is a long established fact that a reader will be distracted by the readable.",
  icon: <FaSeedling />
},
]