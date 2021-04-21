import './AddedToDBModal.scss';
import { Link } from 'react-router-dom';

function AddedToDBModal({ message, modalActive, linkURL, toggleAddedModal }) {

    message = "Items Added to";
    modalActive = true;

    return (
        <div className={modalActive ? "added__modal" : "added__modal added__modal--inactive"}>
            <div className="added">
                <p>{message} <Link to={linkURL}>Place</Link></p>
                <button className="btn" type="button" onClick={toggleAddedModal}>CLOSE</button>
            </div>  
        </div>
    );

}

export default AddedToDBModal;