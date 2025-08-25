function Cta(props) {
    return (
        <div className='cta-container'>
            <button className="cta" onClick={props.clicked}>{props.text}</button>
        </div>
        
    )
}

export default Cta