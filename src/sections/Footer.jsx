import Firm from '../components/Firm'
import SocialInfo from '../components/SocialInfo'
import '../assets/styles/Footer.css'

function Footer() {
    const infoData = [
        {
            title: 'Contact',
            items: [
                {
                    href: '',
                    text: '+5351505492'
                },
                {
                    href: '',
                    text: 'Industria #71, Camaguey, Cuba'
                },
                {
                    href: '',
                    text: '7:00am - 10:00pm'
                },
                {
                    href: '',
                    text: 'contact@gmail.com'
                }
            ]
        },
        {
            title: 'Links',
            items: [
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
        }
    ]

    const socialData = [
        {
            icon: 'whatsapp.svg',
            name: 'pinterest',
            href: ''
        },
        {
            icon: 'facebook.svg',
            name: 'facebook',
            href: ''
        },
        {
            icon: 'instagram.svg',
            name: 'instagram',
            href: ''
        },
        {
            icon: 'twitter.svg',
            name: 'twitter',
            href: ''
        }
    ]

    return (
        <footer className='footer section'>
            <div className='footer-content'>
                <div className='footer-firm'>
                    <img className='firm__logo' src={new URL('../assets/icons/cheff.svg', import.meta.url).href} alt='main icon' />
                    <h2 className='firm__title'>Houselife</h2>
                </div>
                {infoData.map(item => <FooterInfo title={item.title} items={item.items} key={item.title} />)}
            </div>
            <SocialInfo data={socialData} />
            <div className='footer-rights'>
                <small className='footer-rights__item'>&copy;All rights reserved 2025</small>
                <small className='footer-rights__item'>Powered by <a href="" target='blank'>Chrysal Core</a></small>
            </div>
        </footer>
    )
}

function FooterInfo(props) {
    return (
        <section className='footer-info'>
            <h3 className='footer__title'>{props.title}</h3>
            <ul className='footer-list'>
                {props.items.map(item => {
                    return (
                        <li className='footer__item' key={item.text}>
                            <a className='footer__link' href={item.href} target='blank' >{item.text}</a>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Footer