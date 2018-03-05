/* * * * * * * * * * *  JITTER.JS  * * * * * * * * * * * #
 *
 *  @todo
 *    Library for control over objects. It's game oriented.
 *
 *  @author
 *    Erik Martinez <erik.mj69@gmail.com>
 *
 *  @license
 *    Copyright (C) 2016 Erik Martinez
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

  // DEFINE ELEMENTS
  var bodyMain = document.getElementsByClassName('bodyMain')[0],
      gameBox = document.getElementById('gameBox'),
      car_1 = document.getElementById('car_1'),
      car_2 = document.getElementById('car_2');

  // FUNCTION FOR RESIZING
  function resizeElm() {
    var h = bodyMain.clientHeight,
        dw = h / 1.77,
        hlf = Math.round(dw / 2),
        qtr = Math.round(dw / 4),
        csz = Math.round(qtr * 0.60);

    gameBox.style.width = Math.round(dw) + "px";

    car_1.style.width = csz + "px";
    car_1.style.height = Math.round(csz * 1.5) + "px";
    car_2.style.width = csz + "px";
    car_2.style.height = Math.round(csz * 1.5) + "px";
    car_1.style.left = Math.round(qtr * 0.2) + "px";
    car_2.style.left = Math.round((qtr * 3) + (qtr * 0.2)) + "px";
  };
  
  // EVENT FOR RESIZING
  window.addEventListener("resize", resizeElm);
  
  // INITIALIZATION
  resizeElm();

})();