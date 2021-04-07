import './HamburgerIcon.scss';
import { useState } from "react";
import { Link } from 'react-router-dom';

function BurgerMenuIcon() {

    const [ active, setActive ] = useState(true)

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
            <div className={!active ? "pull-out pull-out__inactive" : "pull-out pull-out__active"}>
                <nav>
                    <ul>
                        <li className="pull-out__link"><Link>HOME</Link></li>
                        <li className="pull-out__link"><Link>SHOPPING LIST</Link></li>
                        <li className="pull-out__link"><Link>MEAL PLAN</Link></li>
                        <li className="pull-out__link"><Link>RECIPE BOOK</Link></li>
                        <li className="pull-out__link"><Link>CUPBOARD</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );

}

export default BurgerMenuIcon;