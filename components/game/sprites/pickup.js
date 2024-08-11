class PickUp{
    
    constructor(ctx, img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, xVelocity, yVelocity, animator, type){
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
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
        //controll animation
        this.animator = animator;

        this.type = type;

    }

    update(){
        this.dx += this.xVelocity;
        this.dy += this.yVelocity; 

        if(this.dx < 0 - this.dWidth){
            this.dx = 1000 + Math.random()*5000;
            this.dy = Math.random()*(700 - this.dHeight);
        }
    }

    draw(){
        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        this.ctx.drawImage(this.img, 
            this.sx, this.sy, this.sWidth, this.sHeight,
            this.dx, this.dy, this.dWidth, this.dHeight);

        // animate the object using image source, 
        // this object (sprite) is passed to get a refference to this.sx and this.sy
        if(this.animator.isAnimated){
            this.animator.animate(this);
        }
        
    }

    //returns the centre coordinates of the sprite, used for collision and movement.
    getCentre(){
        const x = this.dx + this.dWidth/2;
        const y = this.dy + this.dHeight/2;
        return{x, y}
    }


}

export default PickUp;