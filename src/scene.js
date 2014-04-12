function Scene(ctx, ship) {
	this.canvas           = ctx;
	this.canvas.fillStyle = "rgb(200,0,0)";
	this.scale            = 6;
	this.lander           = ship;
	this.landerImage      = new Image();
	this.landerImage.src  = 'ressource/ship.png';
}

Scene.prototype.clear = function() {
	this.canvas.clearRect(
		this.lander.posX * this.scale - 40,
		this.lander.posY * this.scale - 40,
		80,
		80
	);
}

Scene.prototype.draw = function() {
	this.canvas.save();

	this.canvas.translate(
		this.lander.posX * this.scale,
		this.lander.posY * this.scale
	);

	this.canvas.rotate(this.lander.rotation);
	this.canvas.drawImage(this.landerImage, -16, -16);
	this.canvas.fillRect(-3, 18, 6, this.lander.engine); 

	this.canvas.restore();
}

Scene.prototype.update = function() {
	this.clear();
	this.lander.update();
	this.draw();
}

