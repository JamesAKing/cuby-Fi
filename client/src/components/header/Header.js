import './Header.scss';
import SquirrelLogo from "../../assets/logos/squirrel-white.png";
import { Link, useLocation } from 'react-router-dom';
import Logo from '../global/Logo';
import HamburgerIcon from '../hamburger-menu/HamburgerIcon';

function Header() {

    const currentUrl = useLocation().pathname.split('/')[1];
    let headerCSS = "header ";

    switch (currentUrl) {
        case "shopping-list":
            headerCSS += "header__color-secondary";
            break;
        case "meal-plan":
            headerCSS += "header__color-three";
            break;
        case "recipe-book":
            headerCSS += "header__color-four";
            break;
        case "cupboard":
            headerCSS += "header__color-five";
            break;
        default:
            break;
    };   

    return (
        <>
            <div className="header__spacer"></div>
            <header className={headerCSS}>
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