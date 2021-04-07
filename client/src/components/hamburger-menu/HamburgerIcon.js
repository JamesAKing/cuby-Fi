import './HamburgerIcon.scss';
import { useState } from "react";

function BurgerMenuIcon() {

    const [ active, setActive ] = useState(false)

    const rotateIcon = () => {
        setActive(!active)
    }

    return (
        <>
            <div className={!active ? "menu" : "menu menu__rotate"} onClick={rotateIcon}>
                <div className="menu__icon">
                    <div className="menu__line"></div>
                    <div className="menu__line"></div>
                    <div className="menu__line"></div>
                </div>
                <ul>
                    {/* <li></li>  */}
                </ul>
            </div>
            <div className={!active ? "pull-out pull-out__inactive" : "pull-out pull-out__active"}>
                
            </div>
        </>
    );

}

export default BurgerMenuIcon;