class Effect{
    
    constructor(ctx, img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, animator, type){
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
        //controll animation
        this.animator = animator;
        //state
        this.state = "active";
        this.hitTime = 0;
        this.type = type;
    }

    update(){
        const now = new Date().getTime();
        if(now - this.hitTime < 1000){
            this.animator.isAnimated = true;             
        }else{
            this.reset();
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

    reset(){
        this.animator.isAnimated = false;
        this.sx=this.animator.animStart;  
        //set location off screen, avoids having to delete and create new objects.
        this.dy = -200;   
    }

    setLocation(obj){
        this.dx = obj.dx;
        this.dy = obj.dy;
        this.animator.isAnimated = true;
        this.hitTime = new Date().getTime();
    }


}

export default Effect;