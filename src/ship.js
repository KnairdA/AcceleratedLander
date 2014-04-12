function Ship(x, y) {
	this.posX = x;
	this.posY = y;

	this.acclY  = 0;
	this.speeY  = 0;
	this.acclX  = 0;
	this.speeX  = 0;

	this.engine   = 0;
	this.rotation = 0;
	this.step     = Math.PI / 50;

	this.gravity = 9.81;
	this.scale   = 0.05;
}

Ship.prototype.update = function() {
	if ( this.rotation != 0 ) {
		this.acclY = this.engine * Math.cos(this.rotation);
		this.acclX = this.engine * Math.sin(this.rotation);
	} else {
		this.acclY = this.engine;
		this.acclX = 0;
	}

	this.speeY = this.speeY - ( this.acclY - this.gravity ) * this.scale;
	this.speeX = this.speeX + ( this.acclX                ) * this.scale;
	this.posY  = this.posY  + ( this.speeY                ) * this.scale;
	this.posX  = this.posX  + ( this.speeX                ) * this.scale;

	if ( this.posY > 80 ) {
		this.posY     = 80;
		this.speedY   = 0;
		this.gravity  = 0;
		this.acclY    = 0;
		this.speeX    = 0;
		this.acclX    = 0;
	} else {
		this.gravity  = 9.81;
	}
};

Ship.prototype.turnLeft = function() {
	this.rotation = this.rotation - this.step;
}

Ship.prototype.turnRight = function() {
	this.rotation = this.rotation + this.step;
}

Ship.prototype.power = function(value) {
	this.engine = value;
}
