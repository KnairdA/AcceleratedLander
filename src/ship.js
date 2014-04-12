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

Ship.prototype.drawX = function() {
	return this.posX * 6;
}

Ship.prototype.drawY = function() {
	return this.posY * 6;
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
}

Ship.prototype.draw = function(ctx) {
	ctx.save();
		ctx.translate(this.drawX(), this.drawY());

		ctx.rotate(this.rotation);

		ctx.drawImage(landerImage, -16, -16);

		ctx.fillRect(-3, 18, 6, this.engine); 
	ctx.restore();
}

Ship.prototype.clear = function(ctx) {
	ctx.clearRect(this.drawX()-40, this.drawY()-40, 80, 80);
}
