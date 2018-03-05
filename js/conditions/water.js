module.exports =function water(x,y) {
    var imgData = context.getImageData(x, y+18, 20, 1);
    var pixels = imgData.data;
    var n=pixels.length;
    for (var i=0; i<n; i+=4) {
        if (pixels[i]!=27 || pixels[i+1]!=189 || pixels[i+2]!=239) {
            return false;
        }
    }
    return true;
};