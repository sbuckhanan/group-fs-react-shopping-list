const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
// GET
router.get('/', (req, res) => {
	const sqlText = `SELECT * FROM "items";`;

	pool
		.query(sqlText)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log('Error in ROUTER GET:', error);
			res.sendStatus(500);
		});
});

// POST
router.post('/', (req, res) => {
	const newItems = req.body;
	const sqlText = `INSERT INTO "items" ("name", "quantity", "unit", "purchased" )
    VALUES ($1, $2, $3, $4);`;

	pool
		.query(sqlText, [newItems.name, newItems.quantity, newItems.unit, newItems.purchased])
		.then((result) => {
			res.sendStatus(201);
		})
		.catch((error) => {
			console.log('Error in ROUTER POST:', error);
			res.sendStatus(500);
		});
});

//PUT
router.put('/reset', (req, res) => {
	const sqlText = `UPDATE "items" SET "purchased" = false;`;

	pool
		.query(sqlText)
		.then((dbResponse) => {
			res.send(dbResponse.rows);
		})
		.catch((error) => {
			console.log('Error in router PUT:', error);
			res.sendStatus(500);
		});
});

// PUT

router.put('/update/:id', (req, res) => {
	const itemsId = req.params.id;
	const sqlText = `UPDATE "items" SET "purchased" = true WHERE id = $1;`;

	pool
		.query(sqlText, [itemsId])
		.then((dbResponse) => {
			res.send(dbResponse.rows);
		})
		.catch((error) => {
			console.log('Error in router PUT:', error);
			res.sendStatus(500);
		});
});

// DELETE

router.delete('/:id', (req, res) => {
	const itemsId = req.params.id;
	console.log('item ID:', req.params.id);

	const sqlText = `DELETE FROM "items" WHERE id = $1;`;

	pool
		.query(sqlText, [itemsId])
		.then(() => {
			console.log('Item deleted');
			res.sendStatus(200);
		})
		.catch((error) => {
			console.log('Error in router DELETE:', error);
			res.sendStatus(500);
		});
});

module.exports = router;
