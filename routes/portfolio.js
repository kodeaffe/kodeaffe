
/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('portfolio', {
    title: 'portfolio | kodeaffe.de'
  });
};
