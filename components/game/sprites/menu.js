class Menu {

    constructor(ctx, img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
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
    }

    draw(repeat, offset) {
        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        for (let i = 0; i < repeat; i++) {
            this.ctx.drawImage(this.img,
                this.sx, this.sy, this.sWidth, this.sHeight,
                this.dx + (offset * i), this.dy, this.dWidth, this.dHeight);
        }

    }


}

export default Menu;