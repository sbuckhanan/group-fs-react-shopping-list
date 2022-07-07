function ItemList() {
    return (
        <>
            <h2>Item List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    <td>Apples</td>
                    <td>5</td>
                    <td>2lbs</td>
                    <button type="delete">Remove</button>
                    <button type="Edit">Buy</button>
                </tbody>
            </table>
        </>
    );
}

export default ItemList;
