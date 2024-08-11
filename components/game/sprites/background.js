class BackGround {

    constructor(ctx, img, dx, xVelocity, yVelocity, canvasWidth) {
        this.ctx = ctx;
        this.img = img;
        //
        this.dx = dx;
        this.dx2 = canvasWidth;
        this.bx = dx;
        this.bx2 = canvasWidth;
        //speed of the background
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
        this.canvasWidth = canvasWidth;
    }

    update() {
        //+10 beacuase of a raounding error when scaling immage causes a gap between images.
        if (this.dx < -this.canvasWidth + 10) {
            this.dx = this.canvasWidth;
        }
        if (this.dx2 < -this.canvasWidth + 10) {
            this.dx2 = this.canvasWidth;
        }
        this.dx += this.xVelocity;
        this.dx2 += this.xVelocity;

        if (this.bx <= -this.canvasWidth) {
            this.bx = this.canvasWidth;
        }
        if (this.bx2 <= -this.canvasWidth) {
            this.bx2 = this.canvasWidth;
        }
        this.bx += this.xVelocity * 4;
        this.bx2 += this.xVelocity * 4;

    }

    draw() {

        //stars
        this.ctx.drawImage(this.img,
            0, 0, 500, 350,
            this.dx, 0, 1000, 700);
        this.ctx.drawImage(this.img,
            0, 0, 500, 350,
            this.dx2, 0, 1000, 700);

        //dust
        this.ctx.drawImage(this.img,
            0, 350, 500, 350,
            this.bx, 0, 1000, 700);
        this.ctx.drawImage(this.img,
            0, 350, 500, 350,
            this.bx2, 0, 1000, 700);

    }
}

export default BackGround;