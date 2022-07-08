import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx';
import axios from 'axios';
import './App.css';
import ItemForm from '../ItemForm/ItemForm.jsx';
import ItemList from '../ItemList/ItemList';
import ShoppingList from '../ShoppingList/ShoppingList';

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
		<div className='App'>
			<Header />
			<ItemForm getItems={getItems} />
			<ShoppingList />
			<ItemList items={itemList} getItems={getItems} />
		</div>
	);
}

export default App;
