/*
 * GET home page.
 */

var interestingLinks = require('../data/interesting_links').interestingLinks;

exports.index = function(req, res) {
  res.render('index', {
    title: '\'Io Malo | kodeaffe.de',
    interestingLinks: interestingLinks
  });
};
