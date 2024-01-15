const express = require('express');
const db = require('../../database/db');
const router = express.Router();

//Se crea un nuevo comentario
router.post('/:id/comentario', async (req, res) => {
    try {
        const newComment = req.body;
        const result = await db.query('INSERT INTO roket.comentarios (arbol_id, postulante_id, comentario) VALUES ($1, $2, $3) RETURNING *', [newComment.arbol_id, 'SIFA328', newComment.comentario]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al crear el comentario' });
    }
});


module.exports = router;
