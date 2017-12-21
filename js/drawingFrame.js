module.exports =function drawingFrame() {
    global_counting+=1;
    context.beginPath();
    context.fillStyle = "rgb(255,255,255)";
    context.rect(x11, y11, 20, 18);
    context.fill();
    
    context.beginPath();
    context.fillStyle = "rgb(255,255,255)";
    context.rect(x12, y12, 20, 18);
    context.fill();
    
    if (x22) {
        context.beginPath();
        context.fillStyle = "rgb(255,255,255)";
        context.rect(x22, y22, 20, 18);
        context.fill();
    }
    
    if (isFalling(x11, y11)) {
        fallingDown();
    }
    
    if (isFalling_monster1(x12, y12)) {
        fallingDown_monster1();
        dx1=0;
    }
    else {
        dx1=1;
    }
    
    if (x22) {
        if (isFalling_monster2(x22, y22)) {
            fallingDown_monster2();
            dx2=0;
        }
        else {
            dx2=1;
        }
    }
    
    
    x11+=dx; //update the coordinates of man
    y11+=dy;
    if (dx<0) {
        dx_left=true;
        dx_right=false;
    }
    else {
        dx_left=false;
        dx_right=true;
    }
    
    if (colisionWallhorizontal(x11, y11, 2)) {
        x11-=dx;
    }
    
    if (colisionWallvertical(x11, y11)) {
        y11-=dy;
    }
    
    if (isDoor(x11, y11)) {
        openOrNotOpen();
    }
    
    dx=0;
    dy=0;
    
    if (x12<x11) {   //the behavior of monster1
        if (!colisionWallhorizontal_for_monster(x12, y12)) {
            x12+=dx1;
        }
        else {
            if (!collisionWallvertical_for_monster(x12,y12)) {
                if (y12<y11) {
                    y12+=dy1;
                }
                if (y12>y11) {
                    y12-=dy1;
                }
            }
        }
    }
    
    if (x12>x11) {    
        if (!colisionWallhorizontal_for_monster(x12, y12)) {
            x12-=dx1;
        }
        else {
            if (!collisionWallvertical_for_monster(x12,y12)) {
                if (y12<y11) {
                    y12+=dy1;
                }
                if (y12>y11) {
                    y12-=dy1;
                }
            }
        }
    }
    
    if (x12==x11) {
        if (!collisionWallvertical_for_monster(x12,y12)) {
            if (y12<y11) {
                y12+=dy1;
            }
            if (y12>y11) {
                y12-=dy1;
            }
        }
    }
    if (x22) {      //the behavior of monster2
        if (x22<x11 && !(Math.abs(x22-x12)<=22 && Math.abs(y22-y12)<=22)) {
            if (!colisionWallhorizontal_for_monster(x22, y22)) {
                x22+=dx2;
            }
            else {
                if (!collisionWallvertical_for_monster(x22,y22)) {
                    if (y22<y11) {
                        y22+=dy2;
                    }
                    if (y22>y11) {
                        y22-=dy2;
                    }
                }
            }
        }
        if (x22>x11 && !(Math.abs(x22-x12)<=22 && Math.abs(y22-y12)<=22)) {
            if (!colisionWallhorizontal_for_monster(x22, y22)) {
                x22-=dx2;
            }
            else {
                if (!collisionWallvertical_for_monster(x22,y22)) {
                    if (y22<y11) {
                        y22+=dy2;
                    }
                    if (y22>y11) {
                        y22-=dy2;
                    }
                }
            }
        }
        if (x22==x11 && !(Math.abs(x22-x11)<=22 && Math.abs(y22-y11)<=22)) {
            if (!collisionWallvertical_for_monster(x22,y22)) {
                if (y22<y11) {
                    y22+=dy1;
                }
                if (y22>y11) {
                    y22-=dy1;
                }
            }
        }
    }
    
    
    if (isKlad(x11, y11)) {
        takeKlad(x11, y11);
    }
    
    
    //call drawing functions for all elements exept stone
    for (var i=0; i<IMG2.length; i++) {
        if (IMG2[i].isNeedToDraw) {
            if (IMG2[i].isBroken) {
                IMG2[i].counting+=1;
            }
            if (IMG2[i].counting==300) {
                IMG2[i].src="../images/brokenBrick1.png";
            }
            if (IMG2[i].counting==600) {
                IMG2[i].src="../images/brokenBrick2.png";
            }
            if (IMG2[i].counting==900) {
                IMG2[i].isBroken=false;
                IMG2[i].src="../images/brick.png";
                IMG2[i].counting=0;
            }
            context.drawImage(IMG2[i], IMG2[i].x1, IMG2[i].y1);
        }
    }
    for (var i=0; i<IMG5.length; i++) {
        context.drawImage(IMG5[i], IMG5[i].x1, IMG5[i].y1);  
    }
    for (var i=0; i<IMG4.length; i++) {
        context.drawImage(IMG4[i], IMG4[i].x1, IMG4[i].y1);  
    }
    
    context.drawImage(IMG1, IMG1.x1, IMG1.y1);  
    
    for (var i=0; i<IMG3.length; i++) {
        if (IMG3[i].isNeedToDraw) {
            context.drawImage(IMG3[i], IMG3[i].x1, IMG3[i].y1);
        }
    }
    
    if (leftShoot) {
        context.beginPath();
        context.fillStyle = "rgb(255,255,255)";
        context.rect(x_bullet, y_bullet, 2, 18);
        context.fill();
        dx_bullet=-4;
        x_bullet+=dx_bullet;
        context.drawImage(bullet, x_bullet, y_bullet);
    }
    
    if (rightShoot) {
        context.beginPath();
        context.fillStyle = "rgb(255,255,255)";
        context.rect(x_bullet, y_bullet, 2, 18);
        context.fill();
        dx_bullet=4;
        x_bullet+=dx_bullet;
        context.drawImage(bullet, x_bullet, y_bullet);
    }
    
    if (colisionWallBullet(x_bullet, y_bullet)) {
        if (leftShoot) {
            for (var i=x_bullet-5; i<x_bullet; i++) {
                for (var j=0; j<IMG2.length; j++) {
                    if ((i>IMG2[j].x1 && i<IMG2[j].x1+45) && (y_bullet>IMG2[j].y1 && y_bullet<IMG2[j].y1+26) && !IMG2[j].isBroken) {
                        IMG2[j].src="../images/SKladorBrBrick.png";
                        IMG2[j].counting+=1;
                        IMG2[j].isBroken=true;
                        dx_bullet=0;
                        bullet.src="../images/stoppedBullet.png";
                        context.drawImage(bullet, x_bullet, y_bullet);
                    }
                    dx_bullet=0;
                    bullet.src="../images/stoppedBullet.png";
                    context.drawImage(bullet, x_bullet, y_bullet);
                }
            }
        }
        if (rightShoot) {
            for (var i=x_bullet+2; i<x_bullet+10; i++) {
                for (var j=0; j<IMG2.length; j++) {
                    
                    if ((i>IMG2[j].x1 && i<IMG2[j].x1+45) && (y_bullet>IMG2[j].y1 && y_bullet<IMG2[j].y1+26) && !IMG2[j].isBroken) {
                        IMG2[j].src="../images/SKladorBrBrick.png";
                        IMG2[j].counting+=1;
                        IMG2[j].isBroken=true;
                        dx_bullet=0;
                        bullet.src="../images/stoppedBullet.png";
                        context.drawImage(bullet, x_bullet, y_bullet);
                    }
                    dx_bullet=0;
                    bullet.src="../images/stoppedBullet.png";
                    context.drawImage(bullet, x_bullet, y_bullet);
                }
            }
        }
        leftShoot=false;
        rightShoot=false;
    }
    if (water(x11, y11)) {
        x11=x_begin;
        y11=y_begin;
        var mas=document.querySelector(".elements>:nth-child(4)").innerText.split("");
        for (var i=0; i<mas.length; i++) {
            if (Number(mas[i]) || (Number(mas[i])==0 && mas[i]!=" ")) {
                mas[i]=Number(mas[i])-1;
                if (mas[i]<0) {
                    //GAME OVER
                    document.location.href="./GameOver.html";
                }
                else {
                    mas[i]=String(mas[i]);
                    document.querySelector(".elements>:nth-child(4)").innerText=mas.join("");
                }
            }
        }
        
        x12=x1_begin;
        y12=y1_begin;
        
        if (x22) {
            x22=x2_begin;
            y22=y2_begin;
        }
    }
    
    if (water(x12, y12)) {
        x12=x1_begin;
        y12=y1_begin;
    }
    
    if (x22) {
        if (water(x22, y22)) {
            x22=x2_begin;
            y22=y2_begin;
        }
    }
    
    if (Math.abs(x11-x12)<=22 && Math.abs(y11-y12)<=20) { //the case of encountering man with monster1
        x11=x_begin;
        y11=y_begin;
        
        x12=x1_begin;
        y12=y1_begin;
        
        if (x22) {
            x22=x2_begin;
            y22=y2_begin;
        }
        var mas=document.querySelector(".elements>:nth-child(4)").innerText.split("");
        for (var i=0; i<mas.length; i++) {
            if (Number(mas[i]) || (Number(mas[i])==0 && mas[i]!=" ")) {
                mas[i]=Number(mas[i])-1;
                if (mas[i]<0) {
                    //GAME OVER
                    document.location.href="./GameOver.html";
                }
                else {
                    mas[i]=String(mas[i]);
                    document.querySelector(".elements>:nth-child(4)").innerText=mas.join("");
                }
            }
        }
    }
    
    if (x22) {
        if (Math.abs(x11-x22)<=22 && Math.abs(y11-y22)<=20) { //the case of encountering man with monster2
            x11=x_begin;
            y11=y_begin;
            x12=x1_begin;
            y12=y1_begin;
            x22=x2_begin;
            y22=y2_begin;
            var mas=document.querySelector(".elements>:nth-child(4)").innerText.split("");
            for (var i=0; i<mas.length; i++) {
                if (Number(mas[i]) || (Number(mas[i])==0 && mas[i]!=" ")) {
                    mas[i]=Number(mas[i])-1;
                    if (mas[i]<0) {
                        //GAME OVER
                        document.location.href="./GameOver.html";
                    }
                    else {
                        mas[i]=String(mas[i]);
                        document.querySelector(".elements>:nth-child(4)").innerText=mas.join("");
                    }
                }
            }
        }
        
    }
    
    if (y11==-10 && document.location.href=="../views/level5.html") { //the condition of going to next level
        document.location.href="../views/YouWon.html";
    }
    if (y11==-10 && document.location.href!="../views/level5.html") {
        var mas=document.querySelector(".elements>:nth-child(3)").innerText.split("");
        for (var i=0; i<mas.length; i++) {
            if (Number(mas[i]) || (Number(mas[i])==0 && mas[i]!=" ")) {
                mas[i]=Number(mas[i])+1;
                var str="../views/level"+String(mas[i])+".html";
                document.location.href=str;
            }
        }
    }
    
    context.drawImage(man1, x11, y11);
    
    monster11=document.getElementById("monster");
    context.drawImage(monster11, x12, y12);
    
    if (x22) {
        monster12=document.getElementById("monster");
        context.drawImage(monster12, x22, y22);
    }
    
    timer=setTimeout("drawingFrame.apply(this)", 20);
};
