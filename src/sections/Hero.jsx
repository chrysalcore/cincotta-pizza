import Cta from '../components/Cta'
import '../assets/styles/Hero.css'

function Hero() {
    return (
        <section className='hero section'>
            <div className='hero-content'>
                <h2 className='hero__title'>A Taste of Tradition</h2>
                <p className='hero__desc'>Dedicated to the authentic recipes and ingredients of Italy,our cuisine is a reflection of meticulous preparation and respect for tradition. We focus on the essence of flavor, crafting each dish with time-honored techniques and the finest available ingredients</p>
                <Cta text='Reserv Now' />
            </div>
        </section>
    )
}

export default Hero