import axios from 'axios';

function ItemList({ items, getItems }) {
	const handleBuy = (event) => {
		console.log('Click Buy');
		const id = event.target.getAttribute('data-id');
		console.log(id);

		axios
			.put(`/list/${id}`)
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
					{items.map((item) => {
						if (item.purchased) {
							return (
								<tr key={item.id}>
									<td>{item.name}</td>
									<td>{item.quantity}</td>
									<td>{item.unit}</td>
									<td>
										<button type='delete'>Remove</button>
									</td>
									<td>PURCHASED</td>
								</tr>
							);
						} else {
							return (
								<tr key={item.id}>
									<td>{item.name}</td>
									<td>{item.quantity}</td>
									<td>{item.unit}</td>
									<td>
										<button type='delete'>Remove</button>
									</td>
									<td>
										<button type='Edit' onClick={handleBuy} data-id={item.id}>
											Buy
										</button>
									</td>
								</tr>
							);
						}
					})}
				</tbody>
			</table>
		</>
	);
}

export default ItemList;
