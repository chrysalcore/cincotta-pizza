import '../assets/styles/Categories.css'

function Categories() {
    const categs = [
        {
            name: 'Pizzas',
            desc: 'Handcrafted dough and carefully selected toppings, baked to traditional standards.',
            icon: '../assets/icons/pizza.svg'
        },
        {
            name: 'Pastas',
            desc: 'Fresh, house-made pasta served with classic and thoughtfully executed sauces.',
            icon: '../assets/icons/pasta.svg'
        },
        {
            name: 'Drinks',
            desc: 'A selection of wines, spirits, and non-alcoholic beverages chosen to complement our food.',
            icon: '../assets/icons/drink.svg'
        },
        {
            name: 'Desserts',
            desc: 'A concise offering of traditional Italian sweets and house specialties.',
            icon: '../assets/icons/icecream.svg'
        }
    ]

    return (
        <section className='categories section'>
            <header className='section-header'>
                <h2 className='section-header__title'>Our <strong>Offerings</strong></h2>
                <p className='section-header__desc'>A curated selection of our work, organized by type and style.</p>
            </header>
            <ul className='categories-list'>
                {categs.map(cat => {
                    return (
                        <Category icon={cat.icon} name={cat.name} desc={cat.desc}  key={cat.name} />
                    )
                })}
            </ul>
        </section>
    )
}

function Category(props) {
    return (
        <li className='category'>
            <img className='category__icon' src={new URL(props.icon, import.meta.url).href} alt={`${props.name} icon`} />
            <h3 className='category__name'>{props.name}</h3>
            <p className='category__desc'>{props.desc}</p>
        </li>
    )
}

export default Categories