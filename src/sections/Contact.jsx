import ContactInfo from '../components/ContactInfo'
import SocialInfo from '../components/SocialInfo'
import '../assets/styles/Contact.css'

function Contact() {
    const contactData = [
        {
            icon: 'cellphone.svg',
            name: 'Call Us',
            ref: '+5351505492',
            href: ''
        },
        {
            icon: 'gmail.svg',
            name: 'Email',
            ref: 'contact@gmail.com',
            href: ''
        },
        {
            icon: 'location.svg',
            name: 'Address',
            ref: 'Industry #71, Camaguey, Cuba',
            href: ''
        },
        {
            icon: 'clock.svg',
            name: 'Horary',
            ref: '7:00am - 10:00pm',
            href: ''
        }
    ]

    const socialData = [
        {
            icon: 'pinterest.svg',
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
        <section className='contact' id='contact'>
            <header className='section-header'>
                <h2 className='section-header__title'>Reserv our own <strong>Table</strong></h2>
                <p className='section-header__desc'>Let's discuss how we can address your specific requirements and come here now.</p>
            </header>
            <ContactInfo list={contactData} />
            <div className='contact-social'>
                <h3>Social Media</h3>
                <SocialInfo data={socialData} />
            </div>
        </section>
    )
}

export default Contact