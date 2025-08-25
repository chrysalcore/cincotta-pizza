import Firm from './Firm'
import Cta from './Cta'
import '../assets/styles/BaseBanner.css'

function BaseBanner() {
    const links = [
        {
            href: '',
            text: 'Home'
        },
        {
            href: '',
            text: 'About Us'
        },
        {
            href: '',
            text: 'Best Offers'
        },
        {
            href: '',
            text: 'Testimonials'
        },
        {
            href: '',
            text: 'Contact'
        }
    ]

    return (
        <section className='base-banner'>
            <Firm />
            <Nav items={links}/>
            <Cta text='Contact'/>
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