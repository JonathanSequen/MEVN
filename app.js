import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//conexion a DB
const mongoose = require('mongoose');
const uri ='mongodb://localhost:27017/menu';
const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };
mongoose.connect(uri, options).then(
  () => { console.log('Conectado a DB') },
  err => { err }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/menuu'));

// Rutas
/*app.get('/', (req, res) => {
  res.send('Hello World!');
});*/

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('conectando al puerto '+ app.get('puerto'));
});