var Kartuliflash = {
  modifier: null,
  current: null,
  letters: [
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
  ],
  score: {
    correct: 0,
    total: 0
  },


  addLetterTableColumnSet: function(tr, idx, set) {
    if (idx + set < Kartuliflash.letters.length) {
      var td = $('<td/>');
      td.html(Kartuliflash.letters[idx+set][0]);
      tr.append(td);

      td = $('<td/>');
      td.html(
        Kartuliflash.letters[idx+set][1] +
        ' ' +
        Kartuliflash.letters[idx+set][2]);
      tr.append(td);
    } else {
      tr.append($('<td/>'), $('<td/>'));
    }
  },


  populateLetterTable: function() {
    var table = $('#letter-table');
    var letters_length = Kartuliflash.letters.length;
    var num_sets = 3;
    for (var i = 0; i < letters_length; i += num_sets) {
      var tr = $('<tr/>');
      for (var set = 0; set < num_sets; set++) {
        Kartuliflash.addLetterTableColumnSet(tr, i, set);
      }
      table.append(tr);
    }
  },


  init: function() {
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
        var idx = Math.round(Math.random() * (Kartuliflash.letters.length - 1));
        Kartuliflash.current = Kartuliflash.letters[idx];

        $('#solution').removeAttr('disabled');
        $('#solution').val('');
        $('#solution').focus();
        $('#georgian').html(Kartuliflash.current[0]);
        $('#english').hide();
        $('#english').html(Kartuliflash.current[1] + ' ' + Kartuliflash.current[2]);
        $('#english').removeClass('text-success').removeClass('text-error');
        $('#english').parent().parent().removeClass('success').removeClass('error');
        $('#check').show();
        return false;
    });

    $('#check').click(function(){
        var solution = $('#solution').val();
        if (!solution) return false;

        var correct = false;
        if (solution == Kartuliflash.current[1]) {
            correct = true;
        } else {
            var vw = Kartuliflash.current[1].split('/');
            if (vw.length == 2) {
                if (solution == vw[0] || solution == vw[1]) {
                    correct = true;
                }
            }
        }

        if (correct) {
           $('#english').addClass('text-success');
           $('#english').parent().parent().addClass('success');
           Kartuliflash.score.correct += 1;
        } else {
           $('#english').addClass('text-error');
           $('#english').parent().parent().addClass('error');
        }
        Kartuliflash.score.total += 1;
        $('#score').html(Kartuliflash.score.correct + ' / ' + Kartuliflash.score.total);

        $('#english').show();
        $('#check').hide();
        $('#solution').attr('disabled', true);
        $('#new').focus();
        return false;
    });

    $(document).keydown(function (event) {
        if (Kartuliflash.modifier == 18 && event.which == 78) { // Alt+n
            $('#new').click()
        }
        Kartuliflash.modifier = event.which;
    });

    $('#sidebar').hide();
    $('#new').click();

    Kartuliflash.populateLetterTable();
  }
};


$(function() { Kartuliflash.init(); });
