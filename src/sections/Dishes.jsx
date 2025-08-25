import Cta from '../components/Cta'
import '../assets/styles/Dishes.css'

function Dishes() {
    const dishes = [
        {
            img: 'lasagna.webp',
            name: 'Classic Lasagna',
            desc: 'Traditional layers of fresh pasta, beef ragu, béchamel, and Parmigiano-Reggiano.',
            price: 8.99
        },
        {
            img: 'pizza.webp',
            name: 'Italian Pizza',
            desc: 'A classic example with a thin crust, San Marzano tomatoes, fresh mozzarella, and basil.',
            price: 4.79
        },
        {
            img: 'dessert.webp',
            name: 'Tropical Bowl',
            desc: 'Coconut ice cream served in a fresh pineapple, topped with toasted coconut and a dark rum caramel sauce.',
            price: 3.59
        }
    ]

    return (
        <section className='dishes section' id='dishes'>
            <header className='section-header'>
                <h2 className='section-header__title'>Selected <strong>Dishes</strong></h2>
                <p className='section-header__desc'>A focus on key projects that represent our core capabilities and standards.</p>
            </header>
            <ul className='dishes-list'>
                {dishes.map(dish => {
                    return <Dish img={dish.img} name={dish.name} desc={dish.desc} price={dish.price} key={dish.name} />
                })}
            </ul>
        </section>
    )
}

function Dish(props) {
    return (
        <li className='dish'>
            <div className='dish-top'>
                <img className='dish__img' src={new URL(`../assets/imgs/${props.img}`, import.meta.url).href} alt={`${props.name} image`} />
                <h3 className='dish__name'>{props.name}</h3>
                <p className='dish__desc'>{props.desc}</p>
            </div>
            <div className='dish-bottom'>
                <strong className='dish__price'>${props.price}</strong>
                <Cta text='Order Now' />
            </div>
        </li>
    )
}

export default Dishes