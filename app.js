var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

//var salasRouter = require('./routes/salas');
var clientesRouter = require('./routes/clientesRoute');
var pontos_turisticosRouter = require('./routes/pontos_turisticosRoute');
//var funcionariosRouter = require('./routes/funcionarios');
//var reservasRouter = require('./routes/reservas');

var app = express();

// CORS
app.use(cors({origin:'http://localhost:5000'}));//alterado 3000 para 5000
app.options('*', cors());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/salas', salasRouter);
app.use('/clientes', clientesRouter);
app.use('/pontos_turisticos', pontos_turisticosRouter);
//app.use('/funcionarios', funcionariosRouter);
//app.use('/reservas', reservasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; //trocar 'development' p/ bild quando for publicar

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;