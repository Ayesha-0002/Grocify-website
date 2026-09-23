import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgAll from '../../assets/all-banner.jpg'
const AllProducts = () => {
  return (
    <CategoryPage title= "All Products" bgImage={BgAll} categories={["All"]} />
  )
}

export default AllProducts