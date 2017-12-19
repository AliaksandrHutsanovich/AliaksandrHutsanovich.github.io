module.exports =function colisionWallvertica(x, y) {
    var imgData;
    if (dy_down && !dy_up) {
        imgData = context.getImageData(x-2, y+16, 24, 2);
    }
    if (dy_up && !dy_down) {
        imgData = context.getImageData(x-2, y-2, 24, 2);
    }
    if ((!dy_down && !dy_up) || (dy_down && dy_up)) {
        
        dy_down=false; dy_up=false;
        return false;
    } 
    dy_down=false; dy_up=false;
    var pixels = imgData.data;
    var n=pixels.length;
    for (var i=0; i<n; i+=4) {
        if (pixels[i]==1 && pixels[i+1]==1 && pixels[i+2]==1) {
            return true;
        }
    }
    return false;
};