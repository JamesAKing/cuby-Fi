import './HomeTile.scss';
import { Link } from 'react-router-dom';

function HomeTile({ title, linkUrl, linkImg, reversed }) {

    return (
        <li className="tile">
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