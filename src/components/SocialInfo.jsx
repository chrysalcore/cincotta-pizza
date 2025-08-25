function SocialInfo(props) {
    return (
        <ul className='social-info'>
            {props.data.map(item => <SocialLink href={item.href} name={item.name} icon={item.icon} key={item.name} />)}
        </ul>
    )
}

function SocialLink(props) {
    return (
        <li className="social-info__item">
            <a href={props.href} className="social-info__link" target="blank">
                <img src={new URL(`../assets/icons/${props.icon}`, import.meta.url).href} alt={`${props.name} icon`} className="social-info__icon" />
            </a>
        </li>
    )
}

export default SocialInfo