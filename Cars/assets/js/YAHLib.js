/* * * * * * * * * * *  YAHLIB.JS  * * * * * * * * * * * #
 *
 *  @todo
 *    Library for control over objects. It's game oriented.
 *
 *  @author
 *    Erik Martinez <erik12.ixec@gmail.com>
 *
 *  @license
 *    Copyright (C) 2018 Erik Martinez
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

(function() {

  /* DECLARATION OF VARIABLES */
  // DYNAMIC ELEMENTS
  var BodyMain = document.getElementsByClassName('body-main')[0],
      GameBox = document.getElementById('game-box'),

      RedCar = document.getElementById('red-car'),
      BlueCar = document.getElementById('blue-car'),
      Score = document.getElementById('score'),
      Particles = document.getElementsByClassName('particle'),

      BgAudio = document.getElementsByClassName('bg-audio'),
      TapAudio = document.getElementById('tap-audio');

  // UI ELEMENTS
  var GameMainMenu = document.getElementById('game-main-menu'),
      GamePauseMenu = document.getElementById('game-pause-menu'),
      GameOverMenu = document.getElementById('game-over-menu'),
      GameEnv = document.getElementById('game-env'),

      PlayButton = document.getElementById('play-button'),
      HomeButtons = document.getElementsByClassName('home-button'),
      StatsButtons = document.getElementsByClassName('stats-button'),
      DownloadButton = document.getElementsByClassName('download-button'),
      BgSoundButton = document.getElementById('bg-sound-button'),
      FxSoundButton = document.getElementById('fx-sound-button'),
      ResumeButton = document.getElementById('resume-button'),
      PauseButton = document.getElementById('pause-button'),
      ResetButton = document.getElementById('reset-button'),
      TwitterButton = document.getElementById('twitter-button');

  // BROWSER SETTINGS
  var BODY_HEIGHT = BodyMain.clientHeight,
      DIV_WIDTH = BODY_HEIGHT / 1.77,
      QUARTER = Math.round(DIV_WIDTH / 4),
      CAR_SIZE = Math.round(QUARTER * 0.60);

  // SETTINGS
  var audioOff = false; // THIS COULD BE TEMPORAL
  var audioFxOff = false;

  var score = 0;

  var speedPGenerator = 3000;
  var speedParticles = 10;
  var iPGenerator = null;
  var iParticles = null;

  var stopSignal = true;

  var pathCombinations = [
    [0, 1], [0, 2], [0, 3],
    [1, 2], [1, 3], [2, 3]
  ];
  var particleCombinations = [
    [0, 0], [0, 1],
    [1, 0], [1, 1]
  ];


  /* DECLARATION OF FUNCTIONS */
  // MANAGEMENT FUNCTIONS
  function addEventToElements(elementList, event, func) {
    for(var i = 0; elementList[i]; i++)
      elementList[i].addEventListener(event, func);
  }

  // TOOL-FUNCTIONS
  function resizeElm() {
    var h = BodyMain.clientHeight,
        dw = h / 1.77,
        hlf = Math.round(dw / 2),
        qtr = Math.round(dw / 4),
        csz = Math.round(qtr * 0.60);

    GameBox.style.width = Math.round(dw) + 'px';

    RedCar.style.width = csz + 'px';
    RedCar.style.height = Math.round(csz * 1.2) + 'px';
    BlueCar.style.width = csz + 'px';
    BlueCar.style.height = Math.round(csz * 1.2) + 'px';
    RedCar.style.top = BlueCar.style.top = (BODY_HEIGHT * 0.8) + 'px';
    RedCar.style.left = Math.round(qtr * 0.2) + 'px';
    BlueCar.style.left = Math.round((qtr * 3) + (qtr * 0.2)) + 'px';
  };

  function tapSound() {
    if (!audioFxOff) TapAudio.play();
  }

  function getPath(path) {
    switch (path) {
      case 0:
        return 0.4;
      case 1:
        return 1.4;
      case 2:
        return 2.4;
      case 3:
        return 3.4;
    }
  }

  function sumScore() {
    score += 1;
    Score.textContent = score;
  }

  // GAME OBJECTS
  function Particle(type, path, color, index) {
    var _color = color === 0 ? 'pink' : 'blue';
    var _type = type === 0 ? 'particle-' + _color + '-circle' : 'particle-' + _color + '-square';
    var _path = getPath(path);
    var particleId = Particles.length;
    
    this.particle = document.createElement('div');
    this.particle.className = 'particle ' + _type;
    this.particle.id = 'particle-n' + particleId;
    this.particle.style.top = '-50px';
    this.particle.style.left = Math.round(QUARTER * _path) + 'px';
    this.enemy = index === 0 ? RedCar : BlueCar;
    console.log('$ ', this.enemy.id, index, _color, _type, this.particle.id);
  }

  Particle.prototype = {
    particle: null,
    moveInterval: null,
    path: [],

    go: function () {
      var self = this;
      GameEnv.appendChild(this.particle);

      self.moveInterval = setInterval(function () {
        self.move.apply(self);
      }, speedParticles);
    },

    move: function () {
      if (stopSignal) this.stop();

      var top = parseInt(this.particle.style.top.replace(/px/g, ''));
      var left = parseInt(this.particle.style.left.replace(/px/g, ''));
      var eTop = parseInt(this.enemy.style.top.replace(/px/g, ''));
      var eLeft = parseInt(this.enemy.style.left.replace(/px/g, ''));
      var self = this;

      top += 1;
      this.particle.style.top = top + "px";

      if ((this.particle.className.indexOf('circle') !== -1) && (top + 30 >= eTop) && (eLeft + 50 > left) && (eLeft < left)) {
        console.log(top, left, eTop, eLeft);
        sumScore();
        self.destruct.apply(self);
        return;
      }

      if ((this.particle.className.indexOf('circle') !== -1) && (top > eTop)) {
        console.log('> ', top, left, eTop, eLeft, this.enemy.id, this.particle.id);
        gameOver();
        //self.destruct.apply(self);
      }

      if ((this.particle.className.indexOf('square') !== -1) && (top > GameEnv.clientHeight)) {
        self.destruct.apply(self);
      }

      //if (left >)
    },

    destruct: function () {
      var element = document.getElementById(this.particle.id);
      GameEnv.removeChild(element);
      this.particle = null;
      clearInterval(this.moveInterval);
    },

    stop: function () {
      clearInterval(this.moveInterval);
    }
  };

  // GAME FUNCTIONS
  function generateParticles() {
    var date = new Date();
    var init, limit;
    var color = [];
    color[0] = date.getSeconds() % 2 === 0;
    color[1] = color[0] === 0 ? 1 : 0;

    var particleCombination = Math.floor((Math.random() * 4) + 1) - 1;
    var currentParticles = particleCombinations[particleCombination];

    if ((currentParticles[0] === 0 && currentParticles[1] === 0) ||
        (currentParticles[0] === 1 && currentParticles[1] === 1)) {
      init = 2;
      limit = 4;
    } else {
      init = 1;
      limit = 6;
    }

    var pathCombination = Math.floor((Math.random() * limit) + init) - 1;
    var currentPath = pathCombinations[pathCombination];

    currentParticles.forEach(function (value, index) {
      new Particle(value, currentPath[index], color[index], index).go();
    });
  }

  // UX FUNCTIONS
  function startGame() {
    tapSound();

    GameMainMenu.style.display = 'none';

    stopSignal = false;
    iPGenerator = setInterval(generateParticles, speedPGenerator);
  }

  function gameOver() {
    stopSignal = true;

    clearInterval(iPGenerator);
  }

  function showMainMenu() {
    tapSound();

    GamePauseMenu.style.display = 'none';
    GameOverMenu.style.display = 'none';
    GameMainMenu.style.display = 'block';
  }

  function showStatsMenu() {
    tapSound();

    console.log('Stats Menu!');
  }

  function download() {
    tapSound();

    window.open('https://play.google.com/store/apps/details?id=com.ketchapp.twocars&hl=en', '_BLANK');
  }

  function toggleAudio() {
    tapSound();

    audioOff = !audioOff;
    for (var i = 0; BgAudio[i]; i++) {
      if(audioOff)
        BgAudio[i].pause();
      else
        BgAudio[i].play();
    }
  }

  function toggleAudioFx() {
    tapSound();

    audioFxOff = !audioFxOff;
  }

  function resumeGame() {
    tapSound();

    GamePauseMenu.style.display = 'none';
  }

  function pauseGame() {
    tapSound();

    stopSignal = true;
    clearInterval(iPGenerator);
    GamePauseMenu.style.display = 'block';
  }

  function resetGame() {
    tapSound();

    console.log('Reset game!');
  }

  function sendTweet() {
    tapSound();

    window.open('https://twitter.com/intent/tweet?text=OMG!%20I%20have%20scored%20' +
      (score) +
      '%20points%20in%20the%20%232Cars%20game%20on%20Web.%20Download%20the%20Android' +
      '%20App%20in%20https://play.google.com/store/apps/details?id=com.ketchapp.twocars',
      '_BLANK');
  }

  function moveCarTo(carId, direction) {
    var h = BodyMain.clientHeight,
        dw = h / 1.77,
        qtr = Math.round(dw / 4),
        csz = Math.round(qtr * 0.60);

    var _direction;

    if (carId === 0) {
      _direction = direction === 'left' ? qtr * 0.2 : qtr * 1.2;
      RedCar.style.left = Math.round(_direction) + 'px';
    } else if (carId === 1) {
      _direction = direction === 'left' ? qtr * 2.2 : (qtr * 3) + (qtr * 0.2);
      BlueCar.style.left = Math.round(_direction) + 'px';
    }
  }


  /* INITIALIZATION */
  resizeElm();


  /* EVENTS */
  // UI EVENTS
  PlayButton.addEventListener('click', startGame);

  addEventToElements(HomeButtons, 'click', showMainMenu);

  addEventToElements(StatsButtons, 'click', showStatsMenu);

  addEventToElements(DownloadButton, 'click', download);

  BgSoundButton.addEventListener('click', toggleAudio);

  FxSoundButton.addEventListener('click', toggleAudioFx);

  ResumeButton.addEventListener('click', resumeGame);

  PauseButton.addEventListener('click', pauseGame);

  ResetButton.addEventListener('click', resetGame);

  TwitterButton.addEventListener('click', sendTweet);

  window.addEventListener('keydown', function (event) {
    if (stopSignal) return;

    switch (event.keyCode) {
      case 65:
        moveCarTo(0, 'left');
        break;
      case 68:
        moveCarTo(0, 'right');
        break;
      case 74:
        moveCarTo(1, 'left');
        break;
      case 76:
        moveCarTo(1, 'right');
        break;
      case 80:
        pauseGame();
        break;
      case 81:
        gameOver();
        break;
      default:
        break;
    }
  });

  // EVENT FOR RESIZING
  window.addEventListener('resize', resizeElm);

})();