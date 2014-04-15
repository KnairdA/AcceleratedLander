function CanvasContainer(canvas) {
	this.canvas  = canvas;
	this.context = canvas.getContext('2d');
}

function Scene(canvas_lander, canvas_ui, ship) {
	this.lander_layer = new CanvasContainer(canvas_lander);
	this.ui_layer     = new CanvasContainer(canvas_ui);

	this.lander_layer.context.fillStyle = "rgb(200,0,0)";
	this.ui_layer.context.fillStyle     = "rgb(0,0,0)";

	this.scale             = 5;
	this.rate              = 20;
	this.lander            = ship;
	this.landerImage       = new Image();
	this.landerImage.src   = 'ressource/ship.png';
}

Scene.prototype.drawLander = function() {
	this.lander_layer.context.save();

	this.lander_layer.context.clearRect(
		0,
		0,
		this.lander_layer.canvas.width,
		this.lander_layer.canvas.height
	);

	this.lander_layer.context.translate(
		this.lander.posX * this.scale,
		this.lander.posY * this.scale
	);

	this.lander_layer.context.rotate(this.lander.rotation);

	this.lander_layer.context.drawImage(
		this.landerImage,
		this.landerImage.width  / -2,
		this.landerImage.height / -2
	);

	this.lander_layer.context.fillRect(
		-3,
		18,
		6,
		this.lander.engine
	); 

	this.lander_layer.context.restore();
}

Scene.prototype.drawUI = function() {
	this.ui_layer.context.save();

	this.ui_layer.context.clearRect(
		0,
		0,
		this.ui_layer.canvas.width,
		this.ui_layer.canvas.height
	);

	this.ui_layer.context.fillText("vy: " + (this.lander.speeY * -1 ).toFixed(0), 10, 15);
	this.ui_layer.context.fillText("vx: " + (this.lander.speeX      ).toFixed(0), 10, 30);
	this.ui_layer.context.fillText("ey: " + (this.lander.acclY      ).toFixed(0), 10, 45);
	this.ui_layer.context.fillText("ex: " + (this.lander.acclX      ).toFixed(0), 10, 60);
	this.ui_layer.context.fillText("h: "  + (175 - this.lander.posY ).toFixed(0), 10, 75);

	this.ui_layer.context.restore();
}

Scene.prototype.update = function() {
	this.lander.update(this.rate);
	this.drawLander();
	this.drawUI();
}

