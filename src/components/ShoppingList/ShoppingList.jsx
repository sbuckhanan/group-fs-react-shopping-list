function ShoppingList() {
    return (
        <>
            <h1>Shopping List</h1>
            <button onClick={clearPurchaseStatus}>Reset</button>
            <button onClick={removeAllItems}>Clear</button>
        </>
    );
}

export default ShoppingList;
