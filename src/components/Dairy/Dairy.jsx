import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgDairy from '../../assets/Dairy-banner.jpg'
const Dairy = () => {
  return (
    <CategoryPage title= "Dairy & Eggs" bgImage={BgDairy} categories={["Dairy"]} />
  )
}

export default Dairy