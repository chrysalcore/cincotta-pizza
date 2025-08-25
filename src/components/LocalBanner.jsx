import ContactInfo from './ContactInfo'
import '../assets/styles/LocalBanner.css'

function LocalBanner() {
    const data = [
        {
            icon: '../assets/icons/cellphone.svg',
            name: 'Call Us',
            ref: '+5351505492',
            href: ''
        },
        {
            icon: '../assets/icons/gmail.svg',
            name: 'Email',
            ref: 'contact@gmail.com',
            href: ''
        },
        {
            icon: '../assets/icons/location.svg',
            name: 'Address',
            ref: 'Industry #71, Camaguey, Cuba',
            href: ''
        },
        {
            icon: '../assets/icons/clock.svg',
            name: 'Horary',
            ref: '7:00am - 10:00pm',
            href: ''
        }
    ]

    return (
        <section className='local-banner'>
            <ContactInfo list={data} />
        </section>
    )
}

export default LocalBanner