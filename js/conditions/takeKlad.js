module.exports =function takeKlad(x, y) {
    for (var i=0; i<IMG3.length; i++) { //check img for equality
        if ((y>=IMG3[i].y1 && y<=IMG3[i].y1+26) && ((x>=IMG3[i].x1 && x<=IMG3[i].x1+45) || (x+20>=IMG3.x1 && x+20<=IMG3.x1+45))) {
            IMG3[i].src="../../images/TakenKlad.png";
            if (IMG3[i].isKey) {
                hasKey=true;   //the key for exit has been found
                IMG3[i].src="../../images/Key.png";
            }
        }
    }
};