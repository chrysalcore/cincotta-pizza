import BaseBanner from '../components/BaseBanner'
import LocalBanner from '../components/LocalBanner'
import '../assets/styles/Header.css'

function Header(props) {
    return (
        <header className='header'>
            <BaseBanner />
            <LocalBanner />
        </header>
    )
}

export default Header