module.exports = function collisionWallvertical_for_monster(x, y) {
    var imgData;
    if (y<y11) {
        imgData = context.getImageData(x, y+18, 20, 4);
    }
    if (y>y11) {
        imgData = context.getImageData(x, y-4, 20, 4);
    }
    if (!imgData) return false;
    var pixels = imgData.data;
    var n=pixels.length;
    for (var i=0; i<n; i+=4) {
        if (pixels[i]==1 && pixels[i+1]==1 && pixels[i+2]==1) {
            return true;
        }
    }
    return false;
}


