module.exports =function colisionWallhorizontal(x, y, width) {
    var imgData;
    if (dx_left && !dx_right) {
        imgData = context.getImageData(x-2, y, width, 18);
    }
    if (dx_right && !dx_left) {
        imgData = context.getImageData(x+20, y, width, 18);
    }
    if ((!dx_right && !dx_left) || (dx_right && dx_left)) {
        dx_right=false; dx_left=false;
        return false;
    }
    dx_right=false; dx_left=false;
    var pixels = imgData.data;
    var n=pixels.length;
    for (var i=0; i<n; i+=4) {
        if (pixels[i]==1 && pixels[i+1]==1 && pixels[i+2]==1) {
            return true;
        }
    }
    return false;  
};