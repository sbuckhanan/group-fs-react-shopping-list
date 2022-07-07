import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx';
import './App.css';

function App() {
	const [itemList, setItemList] = useState([]);
	const [newItem, setNewItem] = useState('');
	const [newQuantity, setNewQuantity] = useState('');
	const [newUnit, setNewUnit] = useState('');

	// useEffect(() => {
	//     getItems()
	// }, [])

	// const getItems = () => {
	//     axios.get('/list')
	//     .then(response => {
	//         setItemList(response.data)
	//     })
	//     .catch(err => {
	//         alert('error getting items');
	//         console.log(err);
	//     })
	// }

	return (
		<div className='App'>
			<Header />
			<main>
				<h2>Add an Item</h2>

				<form>
					<label>Item: </label>
					<input onChange={(event) => setNewItem(event.target.value)} value={newItem} />
					<label>Quantity: </label>
					<input onChange={(event) => setNewQuantity(event.target.value)} value={newQuantity} />
					<label>Unit: </label>
					<input onChange={(event) => setNewUnit(event.target.value)} value={newUnit} />
					<button type='submit'>Save</button>
				</form>

				<h2>Item List</h2>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Quantity</th>
							<th>Unit</th>
							<th>Remove</th>
							<th>Buy</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Apples</td>
							<td>5</td>
							<td>2lbs</td>
							<td>
								<button type='delete'>Remove</button>
							</td>
							<td>
								<button type='Edit'>Buy</button>
							</td>
						</tr>
					</tbody>
				</table>
			</main>
		</div>
	);
}

export default App;
