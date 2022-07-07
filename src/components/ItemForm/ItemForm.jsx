import React, { useState } from 'react';

function ItemForm() {
	//states
	const [newItem, setNewItem] = useState('');
	const [newQuantity, setNewQuantity] = useState('');
	const [newUnit, setNewUnit] = useState('');

	return (
		<>
			<h2>Add an Item</h2>
			<form>
				<label>Item:</label>
				<input onChange={(event) => setNewItem(event.target.value)} value={newItem} />
				<label>Quantity:</label>
				<input onChange={(event) => setNewQuantity(event.target.value)} value={newQuantity} />
				<label>Unit:</label>
				<input onChange={(event) => setNewUnit(event.target.value)} value={newUnit} />
				<button type='submit'>Save</button>
			</form>
		</>
	);
}

export default ItemForm;
