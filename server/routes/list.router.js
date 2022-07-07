const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
// GET
router.get('/', (req, res) => {
    const sqlText =  `SELECT * FROM "items";`;

    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in ROUTER GET:', error);
            res.sendStatus(500);
        });
});

// POST
router.post('/', (req, res) => {
    const newItems = req.body
    const sqlText = `INSERT INTO "items" VALUES $1`

    pool.query(sqlText, [newItems])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error in ROUTER POST:', error);
            res.sendStatus(500);
        })
})

// PUT

router.put('/:id', (req, res) =>{
    let itemsID = req.params.id
    let buyItems = req.body. //make changes here??

    console.log('Put request:', buyItems);
    let sqlText;
    if (buyItems !== true){ 
        sqlText = `UPDATE "items" SET "purchased" = true WHERE id = $1;`;
    } else {res.sendStatus(500);
    }
    pool.query(sqlText, [itemsID])
        .then((dbResponse) => {
            res.send(dbResponse.rows);
        }).catch((error) => {
            console.log('Error in router PUT:', error);
            res.sendStatus(500);
        })

})

// DELETE

router.delete('/:id', (req, res) => {
    const itemsId = req.params.id;
    console.log('item ID:', req.params.id);

    const sqlText = `DELETE FROM "items" WHERE id = $1`
    
    pool.query(sqlText, [itemsId])
        .then(() => {
            console.log('Item deleted');
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error in router DELETE:', error);
            res.sendStatus(500);
        })
})



module.exports = router;