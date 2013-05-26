var Modifier = null;
var Letters = [
    ['ბ', 'b', 'as in bat'],
    ['გ', 'g', 'as in go'],
    ['დ', 'd', 'as in dog'],
    ['ვ', 'v/w', 'as in very/weary'],
    ['ზ', 'z', 'as in zoo'],
    ['თ', 't', 'as in top'],
    ['კ', 'k\'', 'non-aspirated'],
    ['ლ', 'l', 'as in love'],
    ['მ', 'm', 'as in mint'],
    ['ნ', 'n', 'as in nose'],
    ['პ', 'p\'', 'non-aspirated'],
    ['ჟ', 'zh', 'as in pleasure'],
    ['რ', 'r', 'as in spanish roja'],
    ['ს', 's', 'as in sad'],
    ['ტ', 't\'', 'non-aspirated'],
    ['ფ', 'p', 'as in poof'],
    ['ქ', 'k', 'as in kick'],
    ['ღ', 'gh', 'as in french bonjour'],
    ['ყ', 'q\'', 'non-aspirated'],
    ['შ', 'sh', 'as in shoot'],
    ['ჩ', 'ch', 'as in chimp'],
    ['ც', 'ts', 'as in hot sauce'],
    ['ძ', 'dz', 'as in foods'],
    ['წ', 'ts\'', 'non-aspirated'],
    ['ჭ', 'ch\'', 'non-aspirated'],
    ['ხ', 'kh', 'as in german loch'],
    ['ჯ', 'j', 'as in jump'],
    ['ჰ', 'h', 'as in hot'],
    ['ა', 'ah', 'as in car'],
    ['ე', 'eh', 'as in pet'],
    ['ი', 'ee', 'as in knee'],
    ['ო', 'oh', 'as in doh'],
    ['უ', 'oo', 'as in boot'],
];
var Current = null;
var Score = {
    correct: 0,
    total: 0,
}


function populateLetterTable() {
  var table = $('#letter-table');
  for (var i = 0; i < Letters.length; i += 2) {
    var tr = $('<tr/>');

    var td = $('<td/>');
    td.addClass('georgian-table');
    td.html(Letters[i][0]);
    tr.append(td);

    td = $('<td/>');
    td.html(Letters[i][1] + ' ' + Letters[i][2]);
    tr.append(td);

    if (i + 1 < Letters.length) {
      td = $('<td/>');
      td.html(Letters[i+1][0]);
      tr.append(td);
      td = $('<td/>');
      td.html(Letters[i+1][1] + ' ' + Letters[i+1][2]);
      tr.append(td);
    }

    table.append(tr);
  }
};


function showCorrect() {
}

$(function() {
    $('#showtable').click(function(){
        if ($('#sidebar').is(':visible')) {
            $('#sidebar').hide();
            $('#showtable').html('Show  Table');
        } else {
            $('#sidebar').show();
            $('#showtable').html('Hide  Table');
        }
        return false;
    });

    $('#new').click(function(){
        var idx = Math.round(Math.random() * (Letters.length - 1));
        Current = Letters[idx];

        $('#solution').removeAttr('disabled');
        $('#solution').val('');
        $('#solution').focus();
        $('#georgian').html(Current[0]);
        $('#english').hide();
        $('#english').html(Current[1] + ' ' + Current[2]);
        $('#english').removeClass('text-success').removeClass('text-error');
        $('#english').parent().parent().removeClass('success').removeClass('error');
        $('#check').show();
        return false;
    });

    $('#check').click(function(){
        var solution = $('#solution').val();
        if (!solution) return false;

        var correct = false;
        if (solution == Current[1]) {
            correct = true;
        } else {
            var vw = Current[1].split('/');
            if (vw.length == 2) {
                if (solution == vw[0] || solution == vw[1]) {
                    correct = true;
                }
            }
        }

        if (correct) {
           $('#english').addClass('text-success');
           $('#english').parent().parent().addClass('success');
           Score.correct += 1;
        } else {
           $('#english').addClass('text-error');
           $('#english').parent().parent().addClass('error');
        }
        Score.total += 1;
        $('#score').html(Score.correct + ' / ' + Score.total);

        $('#english').show();
        $('#check').hide();
        $('#solution').attr('disabled', true);
        $('#new').focus();
        return false;
    });

    $(document).keydown(function (event) {
        if (Modifier == 18 && event.which == 78) { // Alt+n
            $('#new').click()
        }
        Modifier = event.which;
    });

    $('#sidebar').hide();
    $('#new').click();

    populateLetterTable();
});
