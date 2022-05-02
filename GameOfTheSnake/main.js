var raf = window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame;
window.requestAnimationFrame = raf;

var CONTAINER_WIDTH = 300;
var CONTAINER_HEIGHT = 250;

var BIT_SIZE = 5; // SIZE OF EACH POINT
var SNAKE_SPEED = 500; // SNAKE'S SPEED
var SP = [[50, 50], [50, 50]]; // SNAKE'S LOCATION AND SIZE
var AP = new Array(2); // APPLE'S LOCATION

var DIRECTION_TOP = "."; // SNAKE'S TOP DIRECTION
var DIRECTION_LEFT = "+"; // SNAKE'S TOP DIRECTION

var SCORE = 0;
var GO = 1; // GAME OVER FLAG
var st;

// DOM ELEMENTS
var score = document.getElementById('score');
var c = document.getElementById("c");
var up = document.getElementById("up");
var left = document.getElementById("left");
var right = document.getElementById("right");
var down = document.getElementById("down");
var scoreScreen = document.getElementById('game-over-screen');
var scoreNumber = document.getElementById('game-over-score-number');
var retryButton = document.getElementById('retry-btn');


c.width = CONTAINER_WIDTH;
c.height = CONTAINER_HEIGHT;
var ctx = c.getContext("2d");

function game() {
	ctx.clearRect(0, 0, 500, 350);

	// SET NEXT MOVEMENT SNAKE
  if(DIRECTION_TOP === "+") SP[0][1] += 5;
  if(DIRECTION_TOP === "-") SP[0][1] -= 5;
  if(DIRECTION_LEFT === "+") SP[0][0] += 5;
  if(DIRECTION_LEFT === "-") SP[0][0] -= 5;
  
  // SELF COLLISION DETECTION
  for (var j = SP.length - 1; j > 0; j--) {
  	if (SP[0][0] === SP[j][0] && SP[0][1] === SP[j][1]) {
			gameOver();
    }
  }

	// DRAW SNAKE'S NEXT MOVEMENT
	if (SP.length === 1) {
    ctx.beginPath();
    ctx.rect(SP[0][0], SP[0][1], BIT_SIZE, BIT_SIZE);
    ctx.fillStyle = "#FFF";
    ctx.fill();
    ctx.closePath();  
  } else {
		for (j = SP.length - 1; j > 0; j--) {
      SP[j][0] = SP[j - 1][0];
      SP[j][1] = SP[j - 1][1];
  
      ctx.beginPath();
      ctx.rect(SP[j][0], SP[j][1], BIT_SIZE, BIT_SIZE);
      ctx.fillStyle = "#FFF";
      ctx.fill();
      ctx.closePath();
    }
  }

  // APPLE'S COLLISION DETECTION
  if(SP[0][0] === AP[0] && SP[0][1] === AP[1]) {
    SP.push([SP[SP.length - 1][0], SP[SP.length - 1][1]]);

		// INCREASE SCORE
    SCORE += 1;
    score.textContent = SCORE;
    
    // INCREASE SPEED
    if (SNAKE_SPEED - 10 > 20) SNAKE_SPEED -= 20;
    
    generateApple();
  }

  // BORDER COLLISION DETECTION
  if(SP[0][0] === -5 || SP[0][0] === CONTAINER_WIDTH || SP[0][1] === -5 || SP[0][1] === CONTAINER_HEIGHT) {
  	gameOver();
  }
  
  // DRAW APPLE
  ctx.beginPath();
  ctx.rect(AP[0], AP[1], BIT_SIZE, BIT_SIZE);
  ctx.fillStyle = "#F00";
 	ctx.fill();
  ctx.closePath();

  if(GO !== 0) {
    st = setTimeout(function() {
      raf(game);
    }, SNAKE_SPEED);
  }
}

function resetGame() {
  scoreNumber.innerHTML = 0;

  SNAKE_SPEED = 500; // SNAKE'S SPEED
  SP = [[50, 50], [50, 50]]; // SNAKE'S LOCATION AND SIZE
  AP = new Array(2); // APPLE'S LOCATION

  DIRECTION_TOP = "."; // SNAKE'S TOP DIRECTION
  DIRECTION_LEFT = "+"; // SNAKE'S TOP DIRECTION

  SCORE = 0;
  GO = 1; // GAME OVER FLAG
  st = null;

	setTimeout(generateApple, 3000);
	raf(game);
}

function gameOver() {
	ctx.clearRect(0, 0, 500, 350);
	clearTimeout(st);
  GO = 0;

  scoreNumber.innerHTML = SCORE;
  scoreScreen.style.display = 'block';
  scoreScreen.style.opacity = 1;
}

function generateApple() {
	AP[0] = Math.floor(Math.random() * (CONTAINER_WIDTH - 10)) + 10;
  AP[1] = Math.floor(Math.random() * (CONTAINER_HEIGHT - 10)) + 10;

	AP[0] -= AP[0] % 5;
  AP[1] -= AP[1] % 5;
}

// CONTROLS' EVENTS
up.addEventListener("click", function() {
	if (SP.length > 2 && (DIRECTION_TOP === '+' || (SP[2] && SP[2][1] + 5 === SP[0][1]))) return;
  console.log(SP);
	DIRECTION_TOP = "-";
  DIRECTION_LEFT = ".";
}, false);

left.addEventListener("click", function() {
	if (SP.length > 2 && (DIRECTION_LEFT === '+' || (SP[2] && SP[2][0] + 5 === SP[0][0]))) return;
	DIRECTION_TOP = ".";
  DIRECTION_LEFT = "-";
}, false);

right.addEventListener("click", function() {
	if (SP.length > 2 && (DIRECTION_LEFT === '-' || (SP[2] && SP[2][0] - 5 === SP[0][0]))) return;
	DIRECTION_TOP = ".";
  DIRECTION_LEFT = "+";
}, false);

down.addEventListener("click", function() {
	if (SP.length > 2 && (DIRECTION_TOP === '-' || (SP[2] && SP[2][1] - 5 === SP[0][1]))) return;
	DIRECTION_TOP = "+";
  DIRECTION_LEFT = ".";
}, false);

retryButton.addEventListener('click', function () {
	score.innerHTML = 0;
	scoreScreen.style.opacity = 0;
  ctx.clearRect(0, 0, 500, 350);

	setTimeout(function () {
  	scoreScreen.style.display = 'none';
		resetGame();
  }, 2000);
}, false);

window.addEventListener("keydown", function(e) {
	//log(e.keyCode)
  switch(e.keyCode) {
  	case 38: // UP
    	if (SP.length > 2 && (DIRECTION_TOP === '+' || (SP[2] && SP[2][1] + 5 === SP[0][1]))) return;
    	DIRECTION_TOP = "-";
		  DIRECTION_LEFT = ".";
    	break;
    case 37: // LEFT
    	if (SP.length > 2 && (DIRECTION_LEFT === '+' || (SP[2] && SP[2][0] + 5 === SP[0][0]))) return;
    	DIRECTION_TOP = ".";
		  DIRECTION_LEFT = "-";
    	break;
    case 39: // RIGHT
    	if (SP.length > 2 && (DIRECTION_LEFT === '-' || (SP[2] && SP[2][0] - 5 === SP[0][0]))) return;
    	DIRECTION_TOP = ".";
		  DIRECTION_LEFT = "+";
    	break;
    case 40: // DOWN
    	if (SP.length > 2 && (DIRECTION_TOP === '-' || (SP[2] && SP[2][1] - 5 === SP[0][1]))) return;
    	DIRECTION_TOP = "+";
		  DIRECTION_LEFT = ".";
    	break;
    case 69: // E - END GAME
    	if(GO === 1) GO = 0;
    	break;
    case 82: // R - RESET GAME
    	if(GO === 1) GO = 0;
    	break;
  }
}, false);

// INITIALIZE
setTimeout(generateApple, 3000);
raf(game);