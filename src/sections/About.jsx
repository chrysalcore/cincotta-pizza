import '../assets/styles/About.css'

function About() {
    return (
        <section className='about section' id='about'>
            <div className='about-text'>
                <h2 className='section-header__title'>Our <strong>Approach</strong></h2>
                <h3 className='about__subtitle'>Beginings - 1995</h3>
                <p className='about__info'>This practice was established on a foundational belief that effective design is born from function and clarity.Our initial work was focused on solving core problems for clients, stripping away the non-essential to deliver digital solutions that were purposeful and reliable. This principle-first approach, centered on understanding user needs and client objectives, remains the cornerstone of everything we do.</p>
                <h3 className='about__subtitle'>Present Day - 2025</h3>
                <p className='about__info'>Today,we continue to evolve that core methodology. Our process has been refined through collaboration and experience, allowing us to tackle more complex challenges with the same disciplined approach. We now offer end-to-end project development, from strategic planning and user experience design to clean, functional code. Our commitment is to build lasting digital products that serve their purpose with integrity and precision.</p>
            </div>
        </section>
    )
}

export default About