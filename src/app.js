require('dotenv').config();

const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');

const moviesRouter = require('./routes/moviesRoutes');
const genresRouter = require('./routes/genresRoutes');
const actorsRouter = require('./routes/actorsRoutes');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use('/genres', genresRouter);
app.use('/actors', actorsRouter);

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));