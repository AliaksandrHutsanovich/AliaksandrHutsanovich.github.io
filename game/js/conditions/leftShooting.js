module.exports =function leftShooting(x, y) {
    leftShoot=true;
    x_bullet=x-2;
    y_bullet=y;
    bullet=new Image(2, 18);
    bullet.src="../../images/bullet.png";
    bullet.onload=function() {
        context.drawImage(bullet, x_bullet, y_bullet);
    };
};