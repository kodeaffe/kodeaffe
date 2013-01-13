/* Javascript for index page */

$(function() {
  $("#identica-widget").liveTwitter('shensche', {
    limit: 5,
    service: 'identi.ca',
    mode: 'user_timeline',
    refresh: false,
    showAuthor: false
  });
});
