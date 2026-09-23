import React from 'react'
import Banner from '../Banner/Banner'
import productList from '../productList/productList.js'
import Cards from '../Cards/Cards'
function CategoryPage() {
   
    const renderProduct = productList.map(product => {
        return (
            <Cards />)
    })
          return(
           <div>
             <Banner />
            <div>
                {renderProduct}
            </div>
           </div>
     
   
  )
}

export default CategoryPage
