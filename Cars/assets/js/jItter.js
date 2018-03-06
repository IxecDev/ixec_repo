/* * * * * * * * * * *  JITTER.JS  * * * * * * * * * * * #
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

      BgAudio = document.getElementsByClassName('bg-audio'),
      TapAudio = document.getElementById('tap-audio');

  // UI ELEMENTS
  var GameMainMenu = document.getElementById('game-main-menu'),
      GamePauseMenu = document.getElementById('game-pause-menu'),

      PlayButton = document.getElementById('play-button'),
      StatsButtons = document.getElementsByClassName('stats-button'),
      DownloadButton = document.getElementById('download-button'),
      BgSoundButton = document.getElementById('bg-sound-button'),
      FxSoundButton = document.getElementById('fx-sound-button'),
      ResumeButton = document.getElementById('resume-button'),
      PauseButton = document.getElementById('pause-button');

  // SETTINGS
  var audioOff = false; // THIS COULD BE TEMPORAL
  var audioFxOff = false;


  /* DECLARATION OF FUNCTIONS */
  // FUNCTION FOR RESIZING
  function resizeElm() {
    var h = BodyMain.clientHeight,
        dw = h / 1.77,
        hlf = Math.round(dw / 2),
        qtr = Math.round(dw / 4),
        csz = Math.round(qtr * 0.60);

    GameBox.style.width = Math.round(dw) + 'px';

    RedCar.style.width = csz + 'px';
    RedCar.style.height = Math.round(csz * 1.5) + 'px';
    BlueCar.style.width = csz + 'px';
    BlueCar.style.height = Math.round(csz * 1.5) + 'px';
    RedCar.style.left = Math.round(qtr * 0.2) + 'px';
    BlueCar.style.left = Math.round((qtr * 3) + (qtr * 0.2)) + 'px';
  };

  function startGame() {
    tapSound();

    GameMainMenu.style.display = 'none';
  }

  function showStatsMenu() {
    tapSound();

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

    GamePauseMenu.style.display = 'block';
  }

  function tapSound() {
    if (!audioFxOff) TapAudio.play();
  }
  
  /* INITIALIZATION */
  resizeElm();

  /* EVENTS */
  // UI EVENTS
  PlayButton.addEventListener('click', startGame);

  StatsButtons[0].addEventListener('click', showStatsMenu);

  StatsButtons[1].addEventListener('click', showStatsMenu);

  DownloadButton.addEventListener('click', download);

  BgSoundButton.addEventListener('click', toggleAudio);

  FxSoundButton.addEventListener('click', toggleAudioFx);

  ResumeButton.addEventListener('click', resumeGame);

  PauseButton.addEventListener('click', pauseGame);

  // EVENT FOR RESIZING
  window.addEventListener('resize', resizeElm);

})();