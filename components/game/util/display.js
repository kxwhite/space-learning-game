function scaleToScreen(ctx, topOffset = 67){
    //scale to fit screen
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight - topOffset;
    let scalex = 0;
    let scaley = 0;
    const ratio = 1000 / 700;

    ctx.canvas.height = screenHeight;
    ctx.canvas.width = (screenHeight * ratio);
    //scale magnitude
    scalex = (screenHeight * ratio) / 1000
    scaley = screenHeight / 700;

    ctx.scale(scalex, scaley)

    
    
    //disable image smoothing for a pixelised effect
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
}

function spriteSheetLoader(source){
    const spriteSheet = new Image()
    spriteSheet.src = source
    spriteSheet.onload = () => {
        console.log("image loaded");
    }
    spriteSheet.onerror = () => {
        console.log("image not loaded");
        //router.push('/') redirect if spritesheet does not load, async image load so will have a slight delay.
    }

    return spriteSheet;
}

export {scaleToScreen, spriteSheetLoader}