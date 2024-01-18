const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const arbolesRouter = require('./api/arboles');
const ubicacionesRouter = require('./api/ubicaciones');
const comentariosRouter = require('./api/comentarios');
const fotosRouter = require('./api/fotos');

const app = express();

//Se configuran los middlewares
app.use(bodyParser.json(), cors());

//Se cargan los endpoints
app.use('/arboles', arbolesRouter);
app.use('/ubicaciones', ubicacionesRouter);
app.use('/comentarios', comentariosRouter);
app.use('/fotos', fotosRouter);

//Se levanta el servidor
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));




