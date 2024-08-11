class Enemy {

    constructor(ctx, img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, vector, animator, type) {
        this.ctx = ctx;
        this.img = img;
        //source coordinates and dimensions (image from the spritesheet).
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        //canvas coordintates and dimensions (where the image will be drawn)
        this.dx = dx;
        this.dy = dy;
        this.dWidth = dWidth;
        this.dHeight = dHeight;
        //vector of the object = velocity and direction(destination) of the object.
        this.vector = vector
        //controll animation
        this.animator = animator;

        //state
        this.state = "active";
        this.hitPoints = 5;
        this.hitTime = 0;
        this.type = type;
        this.angle = 0;

    }

    /*
    the objects vector is calculated from the starting point + velocity * direction, 
    the result of this calculation sets the location on every frame.
    note: direction is controlled by trig.

    this.dx = current location on canvas
    this.velocity = speed of the object.
    soh, cah, toa to figure out direction.
    */
    update() {
        const adj = this.vector.xDestination - this.getCentre().x;
        const opp = this.vector.yDestination - this.getCentre().y;
        this.angle = Math.atan2(opp, adj);

        //shaking fix due to atan calc...need to look for better fix. 
        //dirty fix: stops calculating if close to the destination.
        //if(!(adj > -this.vector.velocity && adj < this.vector.velocity && opp > -this.vector.velocity && opp < this.vector.velocity)){
        if (true) {
            this.dx += Math.cos(this.angle) * this.vector.velocity;
            this.dy += Math.sin(this.angle) * this.vector.velocity;
        }

        // for objects moving up set state to up and do the opposite
        if (this.dy > 700) {
            this.reset();
        }

    }

    draw() {

        this.ctx.save()
        //set the origin to by the middle as calculated for collision detection.
        this.ctx.translate(this.getCentre().x, this.getCentre().y);
        //rotate
        this.ctx.rotate(this.angle + 4.330005);
        //to centre the image and put it in the centre of rotation we have to move it 
        //back and up by half its size, as as the image is drawn from the new origin, set by translate.
        this.ctx.drawImage(this.img,
            this.sx, this.sy, this.sWidth, this.sHeight,
            -this.dWidth/2, -this.dHeight/2, this.dWidth, this.dHeight);

        this.ctx.restore()

        // animate the object using image source, 
        // this object (sprite) is passed to get a refference to this.sx and this.sy
        if (this.animator.isAnimated) {
            this.animator.animate(this);
        }
    }

    setDestination(x, y) {
        this.vector.xDestination = x;
        this.vector.yDestination = y;
    }

    reset() {
        this.dy = -200;
        this.dx = Math.random() * 1000;
        this.vector.xDestination = Math.random() * 1000;
        this.angle = 0;
    }

    //returns the centre coordinates of the sprite, used for collision and movement.
    getCentre() {
        const x = this.dx + this.dWidth / 2;
        const y = this.dy + this.dHeight / 2;
        return { x, y }
    }


}

export default Enemy;