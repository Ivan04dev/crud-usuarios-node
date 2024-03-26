import express from 'express'
import router from './routes/index.js';
import db from './config/db.js';

// Instancia de express 
const app = express();

// Conectar a la base de datos 
db.authenticate()
    .then( () => console.log('Conexion OK'))
    .catch( error => console.log(error))

// Definir puerto 
const port = process.env.PORT || 4000;

// Habilitar Pug 
app.set('view engine', 'pug');

// Middleware 


// Definir la carpeta publica 
app.use(express.static('public'));

// Router 
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
})