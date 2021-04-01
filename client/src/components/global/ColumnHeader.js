import './ColumnHeader.scss';

function ColumnHeader({ columnOne, columnTwo, columnThree, columnFour}) {

    return (
        <div className="column-header">
            <p className="column-header__text column-header__column">{columnOne}</p>
            <p className="column-header__text column-header__column">{columnTwo}</p>
            <p className="column-header__text column-header__column">{columnThree}</p>
            <p className="column-header__text column-header__column">{columnFour}</p>
        </div>
    );

}

export default ColumnHeader;