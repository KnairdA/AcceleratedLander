function Ship(x, y) {
	this.posX = x;
	this.posY = y;

	this.acclY    = 0;
	this.speeY    = 0;
	this.acclX    = 0;
	this.speeX    = 0;

	this.engine   = 0;
	this.rotation = 0;
	this.step     = Math.PI / 50;
	this.gravity  = 10;
}

Ship.prototype.update = function(rate) {
	if ( this.posY > 175 ) {
		this.speeX = 0;
		this.speeY = 0;
		this.posY  = 175;
	}

	this.speeY = this.speeY - ( this.acclY - this.gravity ) / rate;
	this.speeX = this.speeX + ( this.acclX                ) / rate;
	this.posY  = this.posY  + ( this.speeY                ) / rate;
	this.posX  = this.posX  + ( this.speeX                ) / rate;
};

Ship.prototype.resolveAcceleration = function() {
	if ( this.rotation != 0 ) {
		this.acclY = this.engine * Math.cos(this.rotation);
		this.acclX = this.engine * Math.sin(this.rotation);
	} else {
		this.acclY = this.engine;
		this.acclX = 0;
	}
}

Ship.prototype.turnLeft = function() {
	this.rotation -= this.step;

	this.resolveAcceleration();
}

Ship.prototype.turnRight = function() {
	this.rotation += this.step;

	this.resolveAcceleration();
}

Ship.prototype.power = function(value) {
	this.engine = value;

	this.resolveAcceleration();
}
