import './HamburgerIcon.scss';
import { useState } from "react";
import PulloutMenu from "./PulloutMenu";

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
            </div>
            <PulloutMenu active={active} rotateIcon={rotateIcon} />
        </>
    );

}

export default BurgerMenuIcon;