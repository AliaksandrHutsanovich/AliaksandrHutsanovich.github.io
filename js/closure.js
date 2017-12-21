function closure() {
    
    global.timer=0; //the variable for counting cadres 

    global.global_counting=0;

    global.man1;
    global.x11;
    global.y11;
    global.x_begin;
    global.y_begin;
    global.isFallman=false; 
    global.leftShoot=false;
    global.rightShoot=false;

    global.x_bullet=-50;
    global.y_bullet=-50;
    global.dx_bullet;
    global.bullet;

    global.hasKey=false;

    global.monster11;
    global.x12;
    global.y12;
    global.x1_begin;
    global.y1_begin;
    global.isFallmonster1=false;

    global.monster12;
    global.x22;
    global.y22;
    global.x2_begin;
    global.y2_begin;
    global.isFallmonster2=false;

    global.dx=0; // speed man moving 
    global.dy=0; 
    global.dx_left=false;
    global.dx_right=false;
    global.dy_up=false;
    global.dy_down=false;

    global.dx1=1; //speed monster1 moving
    global.dy1=1;

    global.dx2=1; //speed monster2 moving
    global.dy2=1;
    

    global.drawingFrame=require("./drawingFrame.js");
    
    global.colisionWallBullet=require("./conditions/colisionWallBullet.js");
    global.colisionWallhorizontal=require("./conditions/colisionWallhorizontal.js");
    global.colisionWallhorizontal_for_monster=require("./conditions/colisionWallhorizontal_for_monster.js");
    global.colisionWallvertical=require("./conditions/colisionWallvertical.js");
    global.collisionWallvertical_for_monster=require("./conditions/collisionWallvertical_for_monster.js");
    global.fallingDown=require("./conditions/fallingDown.js");
    global.fallingDown_monster1=require("./conditions/fallingDown_monster1.js");
    global.fallingDown_monster2=require("./conditions/fallingDown_monster2.js");
    global.isDoor=require("./conditions/isDoor.js");
    global.isFalling=require("./conditions/isFalling.js");
    global.isFalling_monster1=require("./conditions/isFalling_monster1.js");
    global.isFalling_monster2=require("./conditions/isFalling_monster2.js");
    global.isKlad=require("./conditions/isKlad.js");
    global.leftShooting=require("./conditions/leftShooting.js");
    global.openOrNotOpen=require("./conditions/openOrNotOpen.js");
    global.rightShooting=require("./conditions/rightShooting.js");
    global.takeKlad=require("./conditions/takeKlad.js");
    global.water=require("./conditions/water.js");
    
    persons=require("./persons.js");
    
    return persons;
}

module.exports=closure;