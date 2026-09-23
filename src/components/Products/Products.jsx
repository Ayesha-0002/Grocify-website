import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import productList from '../productList/productList.js'
import Cards from '../Cards/Cards.jsx'
import Button from '../Button/Button.jsx'
import { Link } from 'react-router-dom'
const Products = () => {
  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
  const [activeTab, setactiveTab] = useState('All')
  let filteredItems = activeTab === 'All' ? productList : productList.filter(item=>
    item.category === activeTab
  )

  const renderCards = filteredItems.slice(0, 8).map(products => {
    return (
      <Cards image={products.image} name={products.name} price={products.price} />
    )
  })
  return (
    <section>
      <div className=' max-w-[1700px] mx-auto px-10 py-20'>

      <Heading highlight='Our' heading='Products' />

      {/* Tabs */}
      <div className='flex flex-wrap gap-3 justify-center mt-10'>
        {categories.map(category => {
          return (
            <button
            key={category}
            className={`text-lg px-5 py-2 rounded-lg cursor-pointer
            ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}
              onClick={() => { setactiveTab(category) }}>
              {category}
            </button>
          )
        })}
      </div>
      {/* render Cards  */}
      <div className=' grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
        {renderCards}
      </div>



<div className='flex justify-center mt-15'>
  <Link to= "/AllProducts" className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>View All</Link>
</div>
</div>
    </section>
  )
}

export default Products