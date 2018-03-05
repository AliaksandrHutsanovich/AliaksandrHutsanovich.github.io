module.exports =function isFalling(x, y) {
    if (isFallman) {                             //if person is falling we need to try whether he may can be stopped
        var imageData=context.getImageData(x, y+18, 20, 7);
        for (var i=0; i<imageData.data.length; i=i+4) {                   //dependently on type overlapping (if no overlapping, the falling is continueing; if yes to stop)
            if (imageData.data[i]==1 && imageData.data[i+1]==1 && imageData.data[i+2]==1) {
                isFallman=false;
                return false;
            }
            if (imageData.data[i]==0 && imageData.data[i+1]==40 && imageData.data[i+2]==212) {  //if overlapping is tile, it is falling
                isFallman=false;
                return false;
            }
            else return true;
        }
    }
    if (!isFallman) {  //if person is not falling we need to check whether he can fall
        var imageData=context.getImageData(x+1, y+18, 20, 7);
        for (var i=0; i<imageData.data.length; i++) {  //check pixels in order to understand whether overlapping is under the person
            if (imageData.data[i]!=255 || imageData.data[i+1]!=255 || imageData.data[i+2]!=255) {
                isFallman=false;
            }
        }
        for (var j=0; j<imageData.data.length; j=j+4) {  //check pixels in order to understand whether the broken wall is under the person
            if (imageData.data[j]==0 && imageData.data[j+1]==40 && imageData.data[j+2]==212) {
                isFallman=false;
                return false;
            }
            if (imageData.data[j]==1 && imageData.data[j+1]==1 && imageData.data[j+2]==1) {
                isFallman=false;
                return false;
            }
            if (imageData.data[j]==0 && imageData.data[j+1]==242 && imageData.data[j+2]==16) {
                isFallman=false;
                return false;
            }
        }
        if (j>=imageData.data.length) {
            isFallman=true;
            return true;
        }
    }   
};