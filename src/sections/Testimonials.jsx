import Cta from '../components/Cta'
import '../assets/styles/Testimonials.css'

function Testimonials() {
    const data = [
        {
            name: 'John Doe',
            role: 'Web Developer',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat consequatur itaque sapiente veniam consectetur sequi doloribus, similique laborum consequuntur alias nobis quod.'
        }
    ]

    return (
        <section className='testimonials section' id='testimonials'>
            <div className='testimonials-info'>
                <header className='section-header'>
                    <h2 className='section-header__title'>Client <strong>Feedback</strong></h2>
                    <p className='section-header__desc'>Insights and perspectives from those we have collaborated with.</p>
                </header>
                <section className='testimonials-list'>
                    {data.map(test => <Testimonial name={test.name} role={test.role} info={test.info} key={test.name} />)}
                </section>
                <Cta text='View More' />
            </div>
        </section>
    )
}

function Testimonial(props) {
    return (
        <article className='testimonial'>
            <p className='testimonial__info'>{props.info}</p>
            <div className='testimonial-personal'>
                <h3 className='testimonial__name'>{props.name}</h3>
                <h4 className='testimonial__role'>{props.role}</h4>
            </div>
        </article>
    )
}

export default Testimonials