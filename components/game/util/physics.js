//Circle based collision detection distance2 vs radius2.
function hasCollided(object, otherObject, adjust = 2){
    const xDistance = object.getCentre().x - otherObject.getCentre().x;
    const yDistance = object.getCentre().y - otherObject.getCentre().y;

    const distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
    //adjust collision area for the rocket.
    const objectRadius = object.dWidth / adjust;
    const otherObjectRadius = otherObject.dWidth / 2;

    if (distance < objectRadius + otherObjectRadius) {
        console.log("collision")
        return true;
      }
      return false;
}

export {hasCollided};