
/*
 * GET kartuliflash page.
 */

exports.index = function(req, res) {
  res.render('kartuliflash', {
    title: 'kartuliflash | kodeaffe.de'
  });
};
