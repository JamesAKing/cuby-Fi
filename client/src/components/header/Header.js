import './Header.scss';
import SquirrelLogo from "../../assets/logos/squirrel-white.png";
import { Link } from 'react-router-dom';
import Logo from '../global/Logo';
import HamburgerIcon from '../hamburger-menu/HamburgerIcon';

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={SquirrelLogo} alt="inFridge logo" />
            </Link>
            <Logo />
            <nav>
                <HamburgerIcon />
                {/* <ul className="header__links">
                    <li><Link className="header__link" to="/about">About</Link></li>
                    <li><Link className="header__link" to="/contact-us">Contact Us</Link></li>
                    <li><Link className="header__link" to="/cupboard">Cupboard</Link></li>
                    <li><Link className="header__link" to="/recipe-book">Recipe Book</Link></li>
                    <li><Link className="header__link" to="/schedule">Food Plan</Link></li>
                    <li><Link className="header__link" to="/shopping-list">Shopping List</Link></li>
                </ul> */}
            </nav>
        </header>
    );
}

export default Header;