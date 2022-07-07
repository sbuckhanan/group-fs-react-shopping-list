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
                            <th>Remove</th>
                            <th>Buy</th>
                        </tr>
                    </thead>
                <tbody>
                        {itemList.map((item) => { 
                        return(
                            <tr>
                            <td>{item.n}</td>
                            <td>{item.quantity}</td>
                            <td>{item.unit}</td>
                            <td>
                                <button type='delete'>Remove</button>
                            </td>
                            <td>
                                <button type='Edit'>Buy</button>
                            </td>
                        </tr>
                        )})}
                </tbody>
            </table>
        </>
    );
}


export default ItemList;
