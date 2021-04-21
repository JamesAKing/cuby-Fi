import './MobCamControls.scss';
import CloseIcon from "../../assets/icons/close.png";
import DeleteIcon from "../../assets/icons/delete.png";
import AddIcon from "../../assets/icons/add.png";

function MobCamControls({ items, scanning, scanItem, resetItems, setShowObjectDetectionModal }) {
    return (
        <div className="mob-controls__container">
            <div className="mob-controls__mob-close-container" onClick={() => setShowObjectDetectionModal(false)}>
                <img className="mob-controls__mob-close-icon" src={CloseIcon} alt="close camera" />
            </div>
            <div className="mob-controls__controller">
                <div className="mob-controls__text">
                    <p>
                        {items ?
                            items :
                            scanning ?
                            "SCANNING" : 
                            "CLICK TO SCAN"}
                    </p>
                </div>
                <div className="mob-controls__mob-btns">
                    <div className="mob-controls__btn-column">
                        <button type="button" className="mob-controls__btn" onClick={resetItems}>
                            <img className="mob-controls__icon" src={DeleteIcon} alt="clear item" />
                        </button>
                    </div>
                    <div className="mob-controls__btn-column">
                        <button type="button" className="mob-controls__scan-mobile" onClick={scanItem}></button>
                    </div>
                    <div className="mob-controls__btn-column">
                        <button type="button" className="mob-controls__btn">
                            <img className="mob-controls__icon" src={AddIcon} alt="add item to cupboard" />
                        </button>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default MobCamControls;