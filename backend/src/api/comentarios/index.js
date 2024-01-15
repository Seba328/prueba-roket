const express = require('express');
const db = require('../../database/db');
const router = express.Router();

//Se crea un nuevo comentario
router.post('/:id/comentario', async (req, res) => {
    try {
        const { id } = req.params;
        const { comentario } = req.body; 
        // consulta SQL
        const insertQuery = `
            INSERT INTO roket.comentarios (arbol_id, postulante_id, comentario)
            VALUES ($1, 'SIFA328', $2)
        `;
        // ejecutar la consulta SQL
        await db.query(insertQuery, [id, comentario]);
        res.status(200).json({ status: 'success', message: 'Comentario insertado correctamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'error', message: 'Algo salió mal' });
    }
});

module.exports = router;
