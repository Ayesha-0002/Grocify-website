import Navbar from "../Navbar/Navbar.jsx"
import Category from "../Category/Category.jsx"
import Hero from "../Hero/Hero.jsx"
import Values from "../Values/Values.jsx"
import Products from "../Products/Products.jsx"
import Discount from "../Discount/Discount.jsx"
import Process from "../Process/Process.jsx"
import Testimonials from "../Testimonials/Testimonials.jsx"
import Footer from "../Footer/Footer.jsx"


const Home = () => {
  return (
  <>
  <Hero />
  <Category />
  <Values />
  <Products />
  <Discount />
  <Process />
  <Testimonials />
  </>
  )
}

export default Home