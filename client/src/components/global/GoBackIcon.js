import './GoBackIcon.scss';
import GoBackSVG from '../../assets/icons/go-back.svg';

function GoBackIcon(routerProps) {

    const { goBack } = routerProps.routerProps.history

    return (
        <div onClick={goBack}>
            <img className="go-back__img" src={GoBackSVG} alt="to previous page" />
        </div>
    );
}

export default GoBackIcon;