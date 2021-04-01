import './ShoppingList.scss';

function ShoppingList(props) {
    return (
        <ul className="list">
            <li className="list__item">
                <h3>Sausages</h3>
                <div className="list__details">
                    <div>
                        <h4 className="list__heading">QUANTITY</h4>
                        <p>7 Units</p>
                    </div>
                    <div>
                        <h4 className="list__heading">Recipe</h4>
                        <p>Sausage and Mash</p>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default ShoppingList;