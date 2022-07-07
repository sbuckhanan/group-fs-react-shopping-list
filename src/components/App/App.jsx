import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx';
import ItemForm from '../ItemForm/ItemForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import ItemList from '../ItemList/ItemList.jsx';

function App() {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        axios
            .get('/list')
            .then((response) => {
                setItemList(response.data);
            })
            .catch((err) => {
                alert('error getting items');
                console.log(err);
            });
    };

    return (
        <div className="App">
            <Header />
            <ItemForm />
            <ShoppingList />
            <ItemList items={itemList} />
        </div>
    );
}

export default App;
