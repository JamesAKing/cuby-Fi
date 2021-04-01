import './ShoppingList.scss';
import ColumnHeader from "../components/global/ColumnHeader";
import ShoppingListItem from "../components/shopping-list/ShoppingListItem";

function ShoppingListPage() {
    return (
        <main className="shopping-list">
            <header className="shopping-list__header">
                <h1 className="shopping-list__title">SHOPPING LIST</h1>
            </header>
            <ColumnHeader
                columnOne ="ITEM"
                columnTwo ="QTY"
                columnThree ="RECIPE"
                columnFour ="ACTIONS"
            />
            <ShoppingListItem />
        </main>
    );
}

export default ShoppingListPage;