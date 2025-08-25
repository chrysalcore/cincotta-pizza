function ContactInfo(props) {
    return (
        <ul className='contact-info'>
            {props.list.map(item => <ContactLink name={item.name} href={item.href} ref={item.ref} icon={item.icon} key={item.name} />)}
        </ul>
    )
}

function ContactLink(props) {
    return (
        <li className="contact-link">
            <img src={new URL(props.icon, import.meta.url).href} alt={`${props.name} icon`} className="contact-link__icon" />
            <a href={props.href} className="contact-link__text" target="blank">
                <h3 className="contact-link__name">{props.name}</h3>
                <p className="contact-link__ref">{props.ref}</p>
            </a>
        </li>
    )
}

export default ContactInfo