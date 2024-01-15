const express = require('express');
const db = require('../../database/db');
const router = express.Router();


//Se obtienen todas las fotos del árbol
router.get('/:id/foto', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query('SELECT * FROM roket.fotos WHERE arbol_id = $1', [id]);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener las fotos del árbol' });
    }
})
module.exports = router;
