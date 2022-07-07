function ItemList({ items }) {
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
						return (
							<tr key={item.id}>
								<td>{item.name}</td>
								<td>{item.quantity}</td>
								<td>{item.unit}</td>
								<td>
									<button type='delete'>Remove</button>
								</td>
								<td>
									<button type='Edit'>Buy</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default ItemList;
