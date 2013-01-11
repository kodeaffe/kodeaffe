/* Javascript for portfolio */

$(function() {
  $('#portfolio .toggle').click(function() {
    var tables = $(this).parent().siblings('table');
    var arrow = $(this).find('.arrow');
    if ($(tables).is(':visible')) {
      $(tables).hide();
      $(arrow).html('&rarr;');
    } else {
      $(tables).show();
      $(arrow).html('&darr;');
    }
    return false;
  });

  $('#portfolio table').hide();
  var currentYear = new Date().getFullYear();
  for (year = currentYear; year > currentYear - 5; year--) {
    $('#portfolio #year-' + year + ' table').show();
    $('#portfolio #year-' + year + ' .arrow').html('&darr;');
  }
});
