import './ShoppingList.scss';
import ShoppingList from "../components/shopping-list/ShoppingList";

function ShoppingListPage() {
    return (
        <main className="shopping-list">
            <header className="shopping-list__header">
                <h1 className="shopping-list__title">SHOPPING LIST</h1>
            </header>
            <div className="column-header">
                <p className="column-header__text column-header__column">ITEM</p>
                <p className="column-header__text column-header__column">QTY</p>
                <p className="column-header__text column-header__column">RECIPE</p>
                <p className="column-header__text column-header__column">ACTION</p>
            </div>
            <ShoppingList />
        </main>
    );
}

export default ShoppingListPage;