import './Header.css';

export default function Header({Logo, Menu}){
    return(
        <header>
            <div className='logo'>
                <img src={Logo} alt="SpaceX logo" />
            </div>

            <div className="nav-links">
                <a href="/">FALCON 9</a>
                <a href="/">FALCON HEAVY</a>
                <a href="/">DRAGON</a>
                <a href="/">STARPSHIP</a>
                <a href="/">HUMAN SPACEFLIGHT</a>
                <a href="/">RIDESHARE</a>
                <a href="/">STARSHIELD</a>
                <a href="/">STARLINK</a>
            </div>

            <div className="nav-links-secondary">
                <a href="/">SHOP</a>
                <img src={Menu} alt="Menu" />
            </div>
            
        </header>
    );
}