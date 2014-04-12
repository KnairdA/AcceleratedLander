var canvas;
var landerImage;

var lander;

function update() {
	lander.clear(canvas);
	lander.update();
	lander.draw(canvas);
}

function keyDownHandler(e) {
	if ( e.keyCode == 83 ) { // S
		lander.engine = 20;
	}

	if ( e.keyCode == 65 ) { // A
		lander.rotation = lander.rotation - lander.step;
	}

	if ( e.keyCode == 68 ) { // D
		lander.rotation = lander.rotation + lander.step;
	}
}

function keyUpHandler(e) {
	if ( e.keyCode == 83 ) { // S
		lander.engine = 0;
	}
}

function init() {
	lander           = new Ship(41, 10);
	canvas           = document.getElementById('canvas').getContext('2d');
	canvas.fillStyle = "rgb(200,0,0)";

	landerImage      = new Image();
	landerImage.src  = 'ressource/ship.png';

	setInterval(update, 50);
	addEventListener("keydown", keyDownHandler, true);
	addEventListener("keyup", keyUpHandler, true);
}
