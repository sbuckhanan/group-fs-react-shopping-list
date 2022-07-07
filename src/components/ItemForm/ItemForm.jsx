import React, { useState } from 'react';
import axios from 'axios';

function ItemForm({getItems}) {
    //states
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');

    const handleSubmit = (event) => {
        console.log('submit button');
        event.preventDefault();

console.log(newItem);
console.log(newQuantity);
console.log(newUnit);

        axios({
            method: 'POST',
            url: '/list',
            data: {
                name: newItem,
                quantity: newQuantity,
                unit: newUnit
            }
        }).then((response) => {
            console.log(response);
            getItems();
            clearFields();
        }).catch((error) => {
            console.log('Error in client add:', error);
        });
    }


    const clearFields = () => {
        setNewItem('');
        setNewQuantity('');
        setNewUnit('');
    }

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
                <button onClick={handleSubmit} type='submit'>Save</button>
            </form>
        </>
    );
}

export default ItemForm;
