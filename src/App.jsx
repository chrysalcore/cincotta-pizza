import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Categories from './sections/Categories'
import About from './sections/About'
import Dishes from './sections/Dishes'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Reservation from './sections/Reservation'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Hero />
      <Header />
      <Categories />
      <About />
      <Dishes />
      <Testimonials />
      <div className='contact-container section'>
        <Contact />
        <Reservation />
      </div>
      <Footer />
    </>
  )
}

export default App
