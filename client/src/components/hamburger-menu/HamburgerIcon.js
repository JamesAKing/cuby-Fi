import './HamburgerIcon.scss';

function BurgerMenuIcon(props) {
    return (
        <div>
            <div className="menu__icon">
                <div className="menu__line"></div>
                <div className="menu__line"></div>
                <div className="menu__line"></div>
            </div>
            <ul>
                {/* <li></li>  */}
            </ul>
        </div>
    );
}

export default BurgerMenuIcon;