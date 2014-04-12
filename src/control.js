function Control(scene) {
	this.scene = scene;

	addEventListener(
		"keydown",
		this.keyDown,
		true
	);

	addEventListener(
		"keyup",
		this.keyUp,
		true
	);
}

Control.prototype.keyDown = function(ev) {
	switch ( ev.keyCode ) {
		case 83: this.scene.lander.power(20);   break; // S
		case 65: this.scene.lander.turnLeft();  break; // A
		case 68: this.scene.lander.turnRight(); break; // D
	}
}

Control.prototype.keyUp = function(ev) {
	switch ( ev.keyCode ) {
		case 83: this.scene.lander.power(0); break; // S
	}
}
