module.exports =function colisionWallBullet(x, y) {  //function of encuntering bullet with wall
    var imgData;
    if (leftShoot && !rightShoot) {
        imgData = context.getImageData(x-4, y, 4, 18);
    }
    if (rightShoot && !leftShoot) {
        imgData = context.getImageData(x+4, y, 4, 18);
    }
    if ((!rightShoot && !leftShoot) || (rightShoot && leftShoot)) {
        rightShoot=false; leftShoot=false;
        return false;
    }
    var pixels = imgData.data;
    var n=pixels.length;
    for (var i=0; i<n; i+=4) {
        if (pixels[i]==1 && pixels[i+1]==1 && pixels[i+2]==1) {
            return true;
        }
    }
    return false;  
};