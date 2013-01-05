Spacebears = {
  TIMEOUT_BASE:  1000,
  TIMEOUT:  1000,
  WINSCORE: 10,
  SNDBASE: '/spacebears/snd/',
  IMGBASE: '/spacebears/img/',


  Sprite: function(id) {
    this.img = new Image(50, 75);
    this.pos = { x: 0, y: 0 };
    this.sound = new Audio(Spacebears.SNDBASE + id + '.wav');
    this.sound.preload = 'auto';
    this.show = true;
  },


  Game: function() {
    this.sprites = new Array(
      new Spacebears.Sprite(0),
      new Spacebears.Sprite(1),
      new Spacebears.Sprite(2),
      new Spacebears.Sprite(3)
    );
    this.score = 0;
    this.miss = 0;
    this.applause = new Audio(Spacebears.SNDBASE + 'applause.wav');
    this.bung = new Audio(Spacebears.SNDBASE + 'bung.wav');
    this.to = undefined;
    this.is_paused = true;
    this.elapsed = -Spacebears.TIMEOUT;
    this.fastest = 0;
  },
  game: undefined,


  getRandom: function(max, pos) {
    var val = Math.floor(Math.random() * max);
    if (val - pos < 0) {
      return Spacebears.getRandom(max, pos);
    } else if (val + pos > max) {
      return Spacebears.getRandom(max, pos);
    } else {
      return val;
    }
  },


  clearCanvas: function(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0 , 0, canvas.width, canvas.height);
  },


  draw: function() {
    c = document.getElementById('board');
    ctx = c.getContext('2d');
    Spacebears.clearCanvas(c);

    var sprites = Spacebears.game.sprites;
    for (i = 0; i < sprites.length; i++) {
      if (!sprites[i].show) {
        continue;
      }
      sprites[i].pos.x = Spacebears.getRandom(c.width, sprites[i].img.width);
      sprites[i].pos.y = Spacebears.getRandom(c.height, sprites[i].img.height);
      ctx.drawImage(sprites[i].img, sprites[i].pos.x, sprites[i].pos.y);
    }

    Spacebears.game.elapsed += Spacebears.TIMEOUT;
    var elapsed = document.getElementById('elapsed')
    elapsed.innerHTML = Math.floor(Spacebears.game.elapsed / 1000);

    Spacebears.game.to = window.setTimeout(Spacebears.draw, Spacebears.TIMEOUT);
  },


  startpause: function() {
    var game = Spacebears.game;
    button = document.getElementById('startpause');
    if (game.is_paused) {
      button.innerHTML = 'Pause';
      Spacebears.start();
    } else {
      button.innerHTML = 'Continue';
      Spacebears.pause();
    }
  },


  start: function() {
    Spacebears.game.is_paused = false;
    Spacebears.draw();
  },


  pause: function() {
    Spacebears.game.is_paused = true;
    window.clearTimeout(Spacebears.game.to);
  },


  reset: function() {
    Spacebears.pause();

    var canvas = document.getElementById('board');
    Spacebears.clearCanvas(canvas);

    Spacebears.game.miss = 0;
    document.getElementById('miss').innerHTML = 0;

    Spacebears.game.score = 0;
    document.getElementById('score').innerHTML = 0;

    Spacebears.game.elapsed = -Spacebears.TIMEOUT;
    document.getElementById('elapsed').innerHTML = 0;

    var startpause = document.getElementById('startpause');
    startpause.innerHTML = 'Start';
  },


  setWinScore: function() {
    var input = document.getElementById('settings-winscore');
    Spacebears.WINSCORE = input.value;
  },


  setSpeed: function() {
    var speed = document.getElementById('settings-speed').value;
    Spacebears.TIMEOUT = Spacebears.TIMEOUT_BASE - ((speed - 1) * 100);
  },


  setSprites: function() {
    var sprites = Spacebears.game.sprites;
    var settings = document.getElementById('settings-bears');

    if (settings.value > sprites.length || settings.value < 1) {
      settings.value = sprites.length;
      return;
    }

    for (i = 0; i < settings.value; i++) {
      sprites[i].show = true;
    }
    for (i = settings.value; i < sprites.length; i++) {
      sprites[i].show = false;
    }
  },


  validateClick: function(event) {
    var bung = true;
    var sprites = Spacebears.game.sprites;
    var x = event.pageX - event.target.offsetLeft;
    var y = event.pageY - event.target.offsetTop;

    for (i = 0; i < sprites.length; i++) {
      var s = sprites[i];
      in_x = x > s.pos.x && x < s.pos.x + s.img.width;
      in_y = y > s.pos.y && y < s.pos.y + s.img.height;
      if (in_x && in_y) {
        Spacebears.game.score++;
        document.getElementById('score').innerHTML = Spacebears.game.score;
        s.sound.play();
        bung = false;
        break;
      }
    }

    if (bung) {
      Spacebears.game.miss++;
      document.getElementById('miss').innerHTML = Spacebears.game.miss;
      Spacebears.game.score--;
      document.getElementById('score').innerHTML = Spacebears.game.score;
      Spacebears.game.bung.play();
    }
  },


  gameWon: function() {
    Spacebears.pause();
    Spacebears.game.applause.play();

    var elapsed = Math.floor(Spacebears.game.elapsed / 1000);
    window.alert("Well done!\nIt took you " + elapsed + 's to catch the bears.');

    var faster = Spacebears.game.elapsed < Spacebears.game.fastest;
    if (faster || Spacebears.game.fastest == 0) {
      Spacebears.game.fastest = Spacebears.game.elapsed;
      var fastest = Math.floor(Spacebears.game.fastest / 1000);
      document.getElementById('fastest').innerHTML = fastest;
    }
    Spacebears.reset();
  },


  mouseClicked: function(event) {
    if (Spacebears.game.is_paused) {
      return;
    }

    Spacebears.validateClick(event);
    if (Spacebears.game.score >= Spacebears.WINSCORE) {
      Spacebears.gameWon();
    }
  },


  run: function() {
    Spacebears.game = new Spacebears.Game();
    var sprites = Spacebears.game.sprites;
    for (i = 0; i < sprites.length; i++) {
      Spacebears.game.sprites[i].img.src = Spacebears.IMGBASE + 'sprite.png';
    }

    document.getElementById('board').onmousedown = Spacebears.mouseClicked;

    var winscore = document.getElementById('settings-winscore');
    winscore.value = Spacebears.WINSCORE;
    winscore.onchange = Spacebears.setWinScore;

    var speed = document.getElementById('settings-speed');
    speed.value = 1;
    speed.onchange = Spacebears.setSpeed;

    var bears = document.getElementById('settings-bears');
    bears.value = sprites.length;
    bears.max = sprites.length;
    bears.onchange = Spacebears.setSprites;

    document.getElementById('startpause').onclick = Spacebears.startpause;
    document.getElementById('reset').onclick = Spacebears.reset;
  }
};



document.addEventListener('DOMContentLoaded', Spacebears.run);
