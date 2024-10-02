import AddItemForm from "./components/AddItemForm/AddItemForm";
import ShoppingItem from "./components/ShoppingItem/ShoppingItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from "./components/ShoppingList/ShoppingList";
import { ShoppingListProvider } from "./context";

const App = () => {
    return (
        <>
            <ShoppingListProvider>
                <ShoppingList />
            </ShoppingListProvider>
        </>
    );
}

export default App;