import './AddedToDBModal.scss';
import { Link } from 'react-router-dom';
import CloseIcon from '../../assets/icons/close.png';

function AddedToDBModal({ message, modalActive, linkURL, setShowAddedToDB }) {

    return (
        <div className={modalActive ? "added__modal" : "added__modal added__modal--inactive"}>
            <div className="added">
                <Link className="added__link" to={linkURL}><p>Items added. {message}</p></Link>
                <button className="added__btn" type="button" onClick={() => setShowAddedToDB(false)}>
                    <img className="added__close-icon" src={CloseIcon} alt="close modal" />
                </button>
            </div>  
        </div>
    );

}

export default AddedToDBModal;