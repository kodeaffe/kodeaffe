var Spacebears = {
  IMG: {
    base: '/spacebears/img/',
    width: 50,
    height: 75
  },

  SND: {
    num: 4,
    base: '/spacebears/snd/',
    applause: '/spacebears/snd/applause.wav',
    bung: '/spacebears/snd/bung.wav'
  },


  Sprite: function(id) {
    this.num_sounds = 4;
    this.id = id;
    this.img = new Image(Spacebears.IMG.width, Spacebears.IMG.height);
    this.img.src = Spacebears.IMG.base + 'sprite.png';
    this.pos = { x: 0, y: 0 };

    var filename = Spacebears.SND.base + (id % Spacebears.SND.num) + '.wav';
    this.sound = new Audio(filename);
    this.sound.preload = 'auto';
  },


  Game: function() {
    /* sounds */
    this.applause = new Audio(Spacebears.SND.applause);
    this.bung = new Audio(Spacebears.SND.bung);


    /* current (hi)score */
    this.fastest = 0;

    this.miss = 0;
    this.setMiss = function(value) {
      /* set miss value and ui */
      this.miss = value;
      document.getElementById('miss').innerHTML = value;
    };
    this.addMiss = function(value) {
      /* add value to miss */
      this.setMiss(this.miss + value);
    };

    this.score = 0;
    this.setScore = function(value) {
      /* set score value and ui */
      this.score = value;
      document.getElementById('score').innerHTML = value;
    };
    this.addScore = function(value) {
      /* add value to score */
      this.setScore(this.score + value);
    };


    /* timer */
    this.timeout_id = undefined;
    this.timeout = 1000;
    this.elapsed = 0;
    this.setElapsed = function(value) {
      /* set elapsed time */
      this.elapsed = value;
      var elapsed = document.getElementById('elapsed');
      elapsed.innerHTML = Math.floor(this.elapsed / 1000);
    };
    this.tick = function() {
      /* tick-tock the clock */
      this.setElapsed(this.elapsed + this.timeout);
      // setTimeout needs a reference to the proper context; lame
      var game = this;
      this.timeout_id = window.setTimeout(
        function() { game.draw(); }, this.timeout);
    };


    /* canvas */
    this.sprites = undefined;
    this.canvas = document.getElementById('board');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.globalCompositeOperation = 'destination-over';

    this.clearCanvas = function() {
      /* clear the game board */
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    this.draw = function() {
      /* draw the game board */
      this.clearCanvas();
      for (i = 0; i < this.sprites.length; i++) {
        var sprite = this.sprites[i];
        sprite.pos.x = Spacebears.random(this.canvas.width, sprite.img.width);
        sprite.pos.y = Spacebears.random(this.canvas.height, sprite.img.height);
        this.ctx.drawImage(sprite.img, sprite.pos.x, sprite.pos.y);
      }
      this.tick();
    };


    /* game flow */
    this.paused = true;
    this.startpause = function() {
      /* handle when user clicks on start/pause button */
      button = document.getElementById('startpause');
      if (this.paused) {
        button.innerHTML = 'Pause';
        this.start();
      } else {
        button.innerHTML = 'Continue';
        this.pause();
      }
    };

    this.start = function() {
      /* start the game */
      this.paused = false;
      this.draw();
    };

    this.pause = function() {
      /* pause the game */
      this.paused = true;
      window.clearTimeout(this.timeout_id);
    };

    this.reset = function() {
      /* reset the game state */
      this.pause();
      this.clearCanvas();
      this.setMiss(0);
      this.setScore(0);
      this.setElapsed(0);

      var startpause = document.getElementById('startpause');
      startpause.innerHTML = 'Start';
    };


    /* settings */
    this.winscore = 10;
    this.setWinScore = function() {
      /* set the winning score */
      var winscore = document.getElementById('settings-winscore');
      this.winscore = winscore.value;
    };

    this.setSpeed = function() {
      /* set movement speed of the bears */
      var speed = document.getElementById('settings-speed');
      this.timeout = 1000 - ((speed.value - 1) * 100);
    };

    this.setBears = function() {
      /* set number of bears in game */
      var bears = document.getElementById('settings-bears');
      var sprites = new Array();
      for (i = 0; i < bears.value; i++) {
        sprites.push(new Spacebears.Sprite(i));
      }
      this.sprites = sprites;
    };


    /* user interaction */
    this.win = function() {
      /* enact user win situation */
      this.pause();
      this.applause.play();

      var elapsed = Math.floor(this.elapsed / 1000);
      window.alert("Well done!\nYou needed " + elapsed + 's to catch the bears.');

      if (this.elapsed < this.fastest || this.fastest == 0) {
        this.fastest = this.elapsed;
        var fastest = Math.floor(this.fastest / 1000);
        document.getElementById('fastest').innerHTML = fastest;
      }
      this.reset();
    };

    this.evaluateClick = function(evt) {
      /* evaluate the click: hit or miss */
      var bung = true;
      var x = evt.pageX - evt.target.offsetLeft;
      var y = evt.pageY - evt.target.offsetTop;

      for (i = 0; i < this.sprites.length; i++) {
        var s = this.sprites[i];
        in_x = x > s.pos.x && x < s.pos.x + s.img.width;
        in_y = y > s.pos.y && y < s.pos.y + s.img.height;
        if (in_x && in_y) {
          this.addScore(1);
          s.sound.play();
          bung = false;
          break;
        }
      }

      if (bung) {
        this.addMiss(1);
        this.addScore(-1);
        this.bung.play();
      }
    };

    this.mouseClicked = function(evt) {
      /* handle when the mouse was clicked on the canvas */
      if (this.paused) {
        return;
      }

      this.evaluateClick(evt);

      if (this.score >= this.winscore) {
        this.win();
      }
    };


    this.run = function() {
      /* run the game */
      var game = this;
      document.getElementById('settings-winscore').onchange = function(evt){
        game.setWinScore();
      }
      game.setWinScore();

      document.getElementById('settings-speed').onchange = function(evt){
        game.setSpeed();
      };
      game.setSpeed();

      document.getElementById('settings-bears').onchange = function(evt){
        game.setBears();
      };
      game.setBears();

      document.getElementById('board').onmousedown = function(evt) {
        game.mouseClicked(evt);
      };
      document.getElementById('startpause').onclick = function(evt) {
        game.startpause();
      };
      document.getElementById('reset').onclick = function(evt) {
        game.reset();
      };
    }
  }, /* end Game */


  random: function(max, pos) {
    /* get a random position different from pos, but within max */
    var val = Math.floor(Math.random() * max);
    if (val - pos < 0) {
      // could as well be 0
      return Spacebears.random(max, pos);
    } else if (val + pos > max) {
      // could as well be max
      return Spacebears.random(max, pos);
    } else {
      return val;
    }
  }
};



document.addEventListener('DOMContentLoaded', function (evt) {
  new Spacebears.Game().run();
});
