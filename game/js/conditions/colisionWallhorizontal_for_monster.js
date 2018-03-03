module.exports =function colisionWallhorizontal_for_monster(x, y) {
    var imgData;
    if (x>x11) {
        imgData = context.getImageData(x-2, y, 2, 18);
    }
    if (x<x11) {
        imgData = context.getImageData(x+20, y, 2, 18)
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


