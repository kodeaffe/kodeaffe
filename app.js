
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , urls = require('urls')
  , routes = require('./routes')
  , portfolio = require('./routes/portfolio')
  , kartuliflash = require('./routes/kartuliflash')
  , spacebears = require('./routes/spacebears');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon(__dirname + '/public/img/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});
app.configure('production', function(){
  app.enable('trust proxy');
});

urls([
  { pattern: '/', view: routes.index, name: 'index' },
  { pattern: '/portfolio', view: portfolio.index, name: 'portfolio' },
  { pattern: '/spacebears', view: spacebears.index, name: 'spacebears' },
  { pattern: '/kartuliflash', view: kartuliflash.index, name: 'kartuliflash' }
], app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
