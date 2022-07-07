function ShoppingList() {
	const clearPurchaseStatus = () => {
		console.log('Click');
	};

	const removeAllItems = () => {
		console.log('Click');
	};

	return (
		<>
			<h1>Shopping List</h1>
			<button onClick={clearPurchaseStatus}>Reset</button>
			<button onClick={removeAllItems}>Clear</button>
		</>
	);
}

export default ShoppingList;
