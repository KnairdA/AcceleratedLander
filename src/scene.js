function Scene(canvas, ship) {
	this.canvas            = canvas;
	this.context           = canvas.getContext('2d');
	this.context.fillStyle = "rgb(200,0,0)";
	this.scale             = 5;
	this.rate              = 20;
	this.lander            = ship;
	this.landerImage       = new Image();
	this.landerImage.src   = 'ressource/ship.png';
}

Scene.prototype.draw = function() {
	this.context.save();

	this.context.clearRect(
		0,
		0,
		this.canvas.width,
		this.canvas.height
	);

	this.context.translate(
		this.lander.posX * this.scale,
		this.lander.posY * this.scale
	);

	this.context.rotate(this.lander.rotation);

	this.context.drawImage(
		this.landerImage,
		this.landerImage.width  / -2,
		this.landerImage.height / -2
	);

	this.context.fillRect(
		-3,
		18,
		6,
		this.lander.engine
	); 

	this.context.restore();
}

Scene.prototype.update = function() {
	this.lander.update(this.rate);
	this.draw();
}

