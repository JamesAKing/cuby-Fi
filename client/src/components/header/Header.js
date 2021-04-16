import './Header.scss';
import SquirrelLogo from "../../assets/logos/squirrel-white.png";
import { Link } from 'react-router-dom';
import Logo from '../global/Logo';
import HamburgerIcon from '../hamburger-menu/HamburgerIcon';

function Header() {
    return (
        <>
            <div className="header__spacer"></div>
            <header className="header">
                <Link to="/">
                    <img className="header__logo" src={SquirrelLogo} alt="inFridge logo" />
                </Link>
                <Logo />
                <nav>
                    <HamburgerIcon />
                </nav>
            </header>
        </>
    );
}

export default Header;