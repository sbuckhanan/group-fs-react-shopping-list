import axios from 'axios';

function Item({ item, getItems }) {
	const handleBuy = (event) => {
		console.log('Click Buy');
		const id = event.target.getAttribute('data-id');
		console.log(id);

		axios
			.put(`/list/update/${id}`)
			.then((response) => {
				console.log(response);
				getItems();
			})
			.catch((error) => {
				alert('Error with updating', error);
			});
	};

	const handleDelete = (event) => {
		console.log('Click Delete');
		const id = event.target.getAttribute('data-id');
		console.log(id);
		axios
			.delete(`/list/${id}`)
			.then((response) => {
				console.log(response);
				getItems();
			})
			.catch((error) => {
				alert('Error with updating', error);
			});
	};

	if (item.purchased) {
		return (
			<>
				<tr>
					<td>{item.name}</td>
					<td>{item.quantity}</td>
					<td>{item.unit}</td>
					<td>PURCHASED</td>
					<td>PURCHASED</td>
				</tr>
			</>
		);
	} else {
		return (
			<>
				<tr key={item.id}>
					<td>{item.name}</td>
					<td>{item.quantity}</td>
					<td>{item.unit}</td>
					<td>
						<button type='submit' onClick={handleDelete} data-id={item.id}>
							Remove
						</button>
					</td>
					<td>
						<button type='Edit' onClick={handleBuy} data-id={item.id}>
							Buy
						</button>
					</td>
				</tr>
			</>
		);
	}
}

export default Item;
