const express = require('express');
const db = require('../../database/db');
const router = express.Router();

//Se obtienen todas las ubicaciones
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM roket.ubicaciones');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener las ubicaciones' });
    }
});

//Se obtienen la ubicación del árbol
router.get('/:id/ubicacion', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query('SELECT u.* FROM roket.ubicaciones AS u JOIN roket.arboles AS a ON a.ubicacion_id = u.ubicacion_id WHERE a.arbol_id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener la ubicación del árbol' });
    }
});

module.exports = router;
