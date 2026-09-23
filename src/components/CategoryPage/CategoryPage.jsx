import React from 'react'
import Banner from '../Banner/Banner'
import productList from '../productList/productList.js'
import Cards from '../Cards/Cards'
function CategoryPage({ title, bgImage }) {

    const renderProduct = productList.map(product => {
        return (
            <Cards image={product.image} name={product.name} price={product.price} />
        )
    })
    return (
        <div>
            <Banner title={title} bgImage={bgImage} />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10'>
                {renderProduct}
            </div>
        </div>


    )
}

export default CategoryPage
