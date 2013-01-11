
/*
 * GET home page.
 */

var portfolio = require('../data/portfolio').portfolio;




function compareIgnoreCase(a, b) {
 // alphabetical ignore case
 if (a.toUpperCase() > b.toUpperCase())
    return 1;
 if (b.toUpperCase() > a.toUpperCase())
    return -1;
 return 0;
}

function getTechnologies(portfolio) {
  var result = [];
  for (var i in portfolio) {
    for (var j in portfolio[i].items) {
      for (var k in portfolio[i].items[j].technologies) {
        var technology = portfolio[i].items[j].technologies[k];
        var found = false;
        for (var l in result) {
          if (result[l] == technology) {
            found = true;
            break;
          }
        }
        if (!found) {
          result.push(technology);
        }
      }
    }
  }
  result.sort(compareIgnoreCase);
  return result;
};


exports.index = function(req, res) {
  res.render('portfolio', {
    title: 'portfolio | kodeaffe.de',
    technologies: getTechnologies(portfolio),
    portfolio: portfolio
  });
};
