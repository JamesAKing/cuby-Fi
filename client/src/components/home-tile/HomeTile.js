import './HomeTile.scss';
import { Link } from 'react-router-dom';

function HomeTile({ title, linkUrl, linkImg, reversed }) {

    let tile = "tile "

    switch (title) {
        case "Shopping List":
            tile += "tile__color-shopping-list";
            break;
        case "Cupboard":
            tile += "tile__color-cupboard";
            break;
        case "Weekly Meal Plan":
            tile += "tile__color-meal-plan";
            break;
        case "Recipe Book":
            tile += "tile__color-recipe-book";
            break;
        default: 
            tile += null
    }

    console.log(tile)

    return (
        <li className={tile}>
            <Link to={linkUrl} className={!reversed ? "tile__link" : "tile__link tile__link--reverse"}>
                <div className="tile__content">
                    <h2 className="tile__text">{title}</h2>
                </div>
                <div className="tile__content">
                    <img className="tile__icon" src={linkImg} alt ="placeholder" />
                </div>
            </Link>
        </li>
    );

}

export default HomeTile;