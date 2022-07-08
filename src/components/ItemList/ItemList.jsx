import Item from '../Item/Item';

function ItemList({ items, getItems }) {
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
					{items.map((item) => (
						<Item key={item.id} item={item} getItems={getItems} />
					))}
				</tbody>
			</table>
		</>
	);
}

export default ItemList;
