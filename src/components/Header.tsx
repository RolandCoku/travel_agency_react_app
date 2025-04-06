import {NavLink, Link} from 'react-router-dom'
import logo from '../assets/images/full-logo.webp'

export default function Header() {
    return (
        <header className="navbar">
            <div className="container">
                {/* Logo */}
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>

                {/* Search bar */}
                <div className="search-bar">
                    <label htmlFor="travel-search"></label>
                    <input id="travel-search" name="travel-search" type="text" placeholder="search ..."/>
                </div>

                {/* Navigation links */}
                <nav className="nav-links">
                    <NavLink to='/about'>about</NavLink>
                    <NavLink to='/contact'>contact</NavLink>
                    <NavLink to='/login'>login</NavLink>
                    <NavLink to='/register'>register</NavLink>
                </nav>
            </div>
        </header>
    )
}