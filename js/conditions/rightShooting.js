module.exports =function rightShooting(x, y) {
    rightShoot=true;
    x_bullet=x+20;
    y_bullet=y;
    bullet=new Image(2,18);
    bullet.src="../../images/bullet.png";
    bullet.onload=function() {
        context.drawImage(bullet, x_bullet, y_bullet);
    };
};