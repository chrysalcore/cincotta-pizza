import Firm from './Firm'
import Cta from './Cta'
import '../assets/styles/BaseBanner.css'

function BaseBanner() {
    const links = [
        {
            href: '#hero',
            text: 'Home'
        },
        {
            href: '#about',
            text: 'About Us'
        },
        {
            href: '#dishes',
            text: 'Best Offers'
        },
        {
            href: '#testimonials',
            text: 'Testimonials'
        },
        {
            href: '#contact',
            text: 'Contact'
        }
    ]

    const clicked = () => {
        const obj = document.getElementById('contact')
        obj.scrollIntoView()
    }

    return (
        <section className='base-banner'>
            <Firm />
            <Nav items={links}/>
            <Cta text='Contact' clicked={clicked}/>
        </section>
    )
}

function Nav(props) {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                {props.items.map(item => <li className="nav-list__item" key={item.text}><a href={item.href} className="nav-list__link">{item.text}</a></li>)}
            </ul>
        </nav>
    )
}

export default BaseBanner