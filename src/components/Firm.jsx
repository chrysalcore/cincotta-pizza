function Firm(props) {
    return (
        <div className='firm'>
            <img className='firm__logo' src={new URL('../assets/icons/cheff.svg', import.meta.url).href} alt={`${props.title} icon`} />
            <h1 className='firm__title'>Cincotta Pizza</h1>
        </div>
    )
}

export default Firm