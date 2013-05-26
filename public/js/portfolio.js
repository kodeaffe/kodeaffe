/* Javascript for portfolio */

$(function() {
  $('#portfolio .toggle').click(function() {
    var items = $(this).parent().siblings('.items');
    var arrow = $(this).find('.arrow');
    if ($(items).is(':visible')) {
      $(items).hide();
      $(arrow).removeClass('icon-arrow-down');
      $(arrow).addClass('icon-arrow-right');
    } else {
      $(items).show();
      $(arrow).removeClass('icon-arrow-right');
      $(arrow).addClass('icon-arrow-down');
    }
    return false;
  });

  $('#portfolio .year .items').hide();
  var currentYear = new Date().getFullYear();
  for (year = currentYear; year > currentYear - 5; year--) {
    $('#portfolio #year-' + year + ' .items').show();
    var arrow = $('#portfolio #year-' + year + ' .arrow');
    $(arrow).removeClass('icon-arrow-right');
    $(arrow).addClass('icon-arrow-down');
  }
});
