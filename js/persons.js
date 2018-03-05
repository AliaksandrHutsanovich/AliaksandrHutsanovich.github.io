

function persons(x, y, image, x1, y1, image1, x2, y2, image2) {
    clearTimeout(timer);
    this.x=x; this.y=y; this.image=image;
    x_begin=x; y_begin=y;
    this.man=new Image(20, 18);
    this.man.src=this.image;

    this.x1=x1; this.y1=y1; this.image1=image1;
    x1_begin=x1; y1_begin=y1;
    this.monster1=new Image(45, 26);
    this.monster1.src=this.image1;
    if (x2) {
        this.x2=x2; this.y2=y2; this.image2=image2;
        x2_begin=x2; y2_begin=y2;
        this.monster2=new Image(45, 26);
        this.monster2.src=this.image2;
    }

    this.health=5;

    man1=this.man;
    x11=this.x;
    y11=this.y;

    monster11=this.monster1;
    x12=this.x1;
    y12=this.y1;

    monster12=this.monster2;
    x22=this.x2;
    y22=this.y2;

    this.man.onload=function() {
        man1 = document.getElementById("face");
        context.drawImage(man1, x11, y11);
        context.drawImage(monster11, x12, y12);
        if (this.x2) {
            context.drawImage(monster12, x22, y22);
            context.stroke();
        }
        timer=setTimeout("drawingFrame.apply(this)", 20);
        //вызвать функцию рисования 
    };
    window.onkeydown = this.processKey;
}

persons.prototype.processKey=function(e) {
    dx=0;
    dy=0;

    if (e.keyCode==38) { //if the button "up" is pressed
        dy=-2;
        dy_up=true;
        dy_down=false;
    }
    if(e.keyCode==40) { //if the button "down" is pressed

        dy=2;
        dy_down=true;
        dy_up=false;
    }
    if (e.keyCode == 37) { //if the button "left" is pressed
        dx = -2;
        man1.src="../images/run_people1/images/run_man_0"+(global_counting%10)+".png";
    }
    if (e.keyCode == 39) { //if the button "right" is pressed
        dx = 2;
        man1.src="../images/run_people2/images/run_man2_0"+(global_counting%10)+".png";
    }
    //we need to add some function for shooting
    if (e.keyCode == 90) {
        if (!leftShoot && !rightShoot) {
            leftShooting(x11, y11);
        }
    }
    if (e.keyCode == 88) {
        if (!leftShoot && !rightShoot) {
            rightShooting(x11, y11);
        }
    }
};

module.exports =persons;