import axios from 'axios';

function ShoppingList({ getItems }) {
	// The `Reset` button should clear the purchased status from all items, allowing the list to be re-used.
	const reset = () => {
		console.log('reset clicked!');
		axios
			.put('/list/reset')
			.then((response) => {
				console.log(response);
				getItems();
			})
			.catch((error) => {
				alert('Error with updating', error);
			});
	};

	// The `Clear` button should remove all items from the list, deleting them from the database.
	const clear = () => {
		console.log('clear clicked!');
		axios
			.delete(`/list/deleteAll`)
			.then((response) => {
				console.log(response);
				getItems();
			})
			.catch((error) => {
				alert('Error with updating', error);
			});
	};

	return (
		<>
			<h1>Shopping List</h1>
			<button onClick={reset}>Reset</button>
			<button onClick={clear}>Clear</button>
		</>
	);
}

export default ShoppingList;
