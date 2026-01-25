import ContactInfo from './ContactInfo'
import '../assets/styles/LocalBanner.css'

function LocalBanner() {
    const data = [
        {
            icon: 'cellphone.svg',
            name: 'Call Us',
            ref: '+5351505492',
            href: ''
        },
        {
            icon: 'gmail.svg',
            name: 'Email',
            ref: 'contact@chrysalcore.com',
            href: ''
        },
        {
            icon: 'location.svg',
            name: 'Address',
            ref: 'Industria #71, Camaguey, Cuba',
            href: ''
        },
        {
            icon: 'clock.svg',
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