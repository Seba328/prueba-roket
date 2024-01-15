const express = require('express');
const db = require('../../database/db');
const router = express.Router();


//Se obtienen todos los árboles
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM roket.arboles');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener los árboles' });
    }
});

module.exports = router;
