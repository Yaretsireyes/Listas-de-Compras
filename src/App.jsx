import AddItemForm from "./components/AddItemForm/AddItemForm";
import ShoppingItem from "./components/ShoppingItem/ShoppingItem";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <ShoppingItem />
            <ShoppingList />
        </>
    );
}

export default App;