
/*
 * GET home page.
 */

var portfolio = require('../data/portfolio').portfolio;

exports.index = function(req, res) {
  res.render('portfolio', {
    title: 'portfolio | kodeaffe.de',
    portfolio: portfolio
  });
};
