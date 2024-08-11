class Animator{
    constructor(animSpeed, animStart, animEnd, isAnimated = true){
        this.animSpeed = animSpeed;
        this.animStart = animStart; // should be same as sprite.sx.
        this.animEnd = animEnd;
        this.isAnimated = isAnimated;
        this.counter = 0;
        //this.sprite = sprite;
    }

    //start: x location of first image in sprite sheet. from left [<--]
    //end:  length of animation images in px.
    //anim speed 1 = fastest, larger number = slower.
    animate(sprite){

        //move through frames in the spritesheet
        if(this.counter == this.animSpeed){
            sprite.sx += sprite.sWidth;
            this.counter = 0;
        }
        //restart animation cycle.
        if(sprite.sx >= this.animEnd){
            sprite.sx = this.animStart;
        }
        this.counter++;
    }

}

export default Animator;