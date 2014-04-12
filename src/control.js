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
	if ( ev.keyCode == 83 ) { // S
		this.scene.lander.engine = 20;
	}

	if ( ev.keyCode == 65 ) { // A
		this.scene.lander.rotation = this.scene.lander.rotation - this.scene.lander.step;
	}

	if ( ev.keyCode == 68 ) { // D
		this.scene.lander.rotation = this.scene.lander.rotation + this.scene.lander.step;
	}
}

Control.prototype.keyUp = function(ev) {
	if ( ev.keyCode == 83 ) { // S
		this.scene.lander.engine = 0;
	}
}
