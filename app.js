/**
 * app.js for kodeaffe.de
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
  app.set('host', 'localhost');
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

  if (app.get('env') == 'production') {
    var fs = require('fs');
    var access_logfile = fs.createWriteStream('log/access.log', {flags: 'a'});
    app.use(express.logger({format: 'default', stream: access_logfile }));
    app.enable('trust proxy');
  } else {
    app.use(express.logger('dev'));
    app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  }

  app.use(express.favicon(__dirname + '/public/img/favicon.ico'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.directory(__dirname + '/public'));
});




urls([
  { pattern: '/', view: routes.index, name: 'index' },
  { pattern: '/portfolio', view: portfolio.index, name: 'portfolio' },
  { pattern: '/spacebears', view: spacebears.index, name: 'spacebears' },
  { pattern: '/kartuliflash', view: kartuliflash.index, name: 'kartuliflash' }
], app);

http.createServer(app).listen(
  app.get('port'),
  app.get('host'),
  function() {
    console.log("Express server listening on " + app.get('host') +
      ':' + app.get('port'));
  }
);
