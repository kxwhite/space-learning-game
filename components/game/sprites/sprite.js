class Sprite{
    
    constructor(ctx, img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, vector, animator, type){
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

    }

    update(){
        //keep the rocket confined within the visible screen.
        if(this.dx > 1000 - this.dWidth){
            this.dx = 1000 - this.dWidth;
            this.vector.xVelocity = 0;
        }else if(this.dx < 0){
            this.dx = 0
            this.vector.xVelocity = 0;
        }else if(this.dy > 700 - this.dHeight){
            this.dy = 700 - this.dHeight;
            this.vector.yVelocity = 0;
        }else if(this.dy < 0){
            this.dy = 0
            this.vector.yVelocity = 0;
        }

        this.dx += this.vector.xVelocity;
        this.dy += this.vector.yVelocity;

        //if hit, set state to recovering so we can play an animation.
        //if collided with pickup, do something else.
        if(this.state === "hit"){
            this.hitPoints--;
            this.state = "recovering";
            this.hitTime = new Date().getTime();
        }else if(this.state === "q"){
            //collided with question
            this.resetState()
        }else if(this.state === "h"){
            //collided with hint
            this.resetState()
        }
        //while in recovering state show an animation
        if(this.state === "recovering"){        
            const now = new Date().getTime();
            if(now - this.hitTime < 1500){
                //this.animator.isAnimated = true;  
                this.animator.animEnd = 1000;           
            }else{
                this.resetState()
            }
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

    resetState(){
        //this.animator.isAnimated = false;
        this.state = "active"
        this.sx=this.animator.animStart;
        this.animator.animEnd = 600; 
    }


}

export default Sprite;