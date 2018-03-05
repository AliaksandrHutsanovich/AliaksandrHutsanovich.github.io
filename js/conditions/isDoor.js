module.exports =function isDoor(x, y) {
    var imgData = context.getImageData(x+20, y, 4, 18);
    var pixels = imgData.data;
    var n=pixels.length;
    for (var i=0; i<n; i+=4) {
        if (pixels[i]==247 && pixels[i+1]==26 && pixels[i+2]==226) {
            return true;
        }
    }
    return false;
};