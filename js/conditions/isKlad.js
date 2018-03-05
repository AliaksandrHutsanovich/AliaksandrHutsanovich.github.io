module.exports =function isKlad(x, y) {
    var imgData = context.getImageData(x-2, y, 2, 18);
    var pixels = imgData.data;
    var n=pixels.length;
    for (var i=0; i<n; i+=4) {
        if (pixels[i]==222 && pixels[i+1]==246 && pixels[i+2]==4) {
            return true;
        }
    };
    imgData=context.getImageData(x+20, y, 2, 18);
    pixels = imgData.data;
    n=pixels.length;
    for (var i=0; i<n; i+=4) {
        if (pixels[i]==222 && pixels[i+1]==246 && pixels[i+2]==4) {
            return true;
        }
    };
    imgData=context.getImageData(x, y-2, 20, 2);
    pixels = imgData.data;
    for (var i=0; i<n; i+=4) {
        if (pixels[i]==222 && pixels[i+1]==246 && pixels[i+2]==4) {
            return true;
        }
    };
    imgData=context.getImageData(x, y+18, 20, 2);
    pixels = imgData.data;
    for (var i=0; i<n; i+=4) {
        if (pixels[i]==222 && pixels[i+1]==246 && pixels[i+2]==4) {
            return true;
        }
    };
    return false;
};