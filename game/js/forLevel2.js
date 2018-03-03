global.IMG2=[];
global.IMG4=[];
global.canvas = document.getElementById("myCanvas"); 
global.context = canvas.getContext("2d");
var img1=[];
//draw all stone
for (let i=0; i<22; i++) {
    img1[i] = new Image(45, 26);
    img1[i].src = "../images/stone.png";
    img1[i].onload = function() {
        context.drawImage(img1[i], 0, i*26);
    };
}
for (let i=0; i<2; i++) {
    img1[i] = new Image(45, 26);
    img1[i].src = "../images/stone.png";
    img1[i].onload = function() {
        context.drawImage(img1[i], 45+45*i, 520);
    };
}
for (let i=0; i<2; i++) {
    img1[i] = new Image(45, 26);
    img1[i].src = "../images/stone.png";
    img1[i].onload = function() {
        context.drawImage(img1[i], 45+45*i, 546);
    };
}
for (let i=0; i<22; i++) {
    img1[i] = new Image(45, 26);
    img1[i].src = "../images/stone.png";
    img1[i].onload = function() {
        context.drawImage(img1[i], 1305, i*26);
    };
}
for (let i=0; i<19; i++) {
    img1[i] = new Image(45, 26);
    img1[i].src = "../images/stone.png";
    img1[i].onload = function() {
        context.drawImage(img1[i], 1260, 26*3+i*26);
    };
}
for (let i=0; i<2; i++) {
    img1[i] = new Image(45, 26);
    img1[i].src = "../images/stone.png";
    img1[i].onload = function() {
        context.drawImage(img1[i], 1215, i*26);
    };
}
img1[0] = new Image(45, 26);
img1[0].src = "../images/stone.png";
img1[0].onload = function() {
    context.drawImage(img1[0], 1215, 3*26);
};

//draw all ladders
var img2=[];
global.IMG5=[];
var k1=0;

for (let i=0; i<3; i++) {
    img2[i]=[];
    for (let j=0; j<5; j++) {
        img2[i][j]=[];
        for (let k=0; k<5; k++) {
            img2[i][j][k] = new Image(45, 26);
            img2[i][j][k].src = "../images/ladder.png";
            IMG5[k1]=img2[i][j][k];
            IMG5[k1].x1=2*45+j*45*6;
            IMG5[k1].y1=3*26+6*26*i+26*k;
            k1=k1+1;
            img2[i][j][k].onload = function() {
                context.drawImage(img2[i][j][k], 2*45+j*45*6, 3*26+6*26*i+26*k);
            };
        }
    } 
}
var img3=[];
for (let i=0; i<6; i++) {
    img3[i]=[];
    for (let j=0; j<8; j++) {
        img3[i][j]=[];
        for (let k=0; k<2; k++) {
            img3[i][j][k] = new Image(45, 26);
            img3[i][j][k].src = "../images/ladder.png";
            IMG5[k1]=img3[i][j][k];
            IMG5[k1].x1=3*45+j*45*3+k*45;
            IMG5[k1].y1=2*26+3*26*i;
            k1=k1+1;
            img3[i][j][k].onload = function() {
                context.drawImage(img3[i][j][k], 3*45+j*45*3+k*45, 2*26+3*26*i);
            };
        }
    } 
}
var img4=[];
for (let i=0; i<2; i++) {
    img4[i]=[];
    for (let j=0; j<4; j++) {
        img4[i][j]=[];
        for (let k=0; k<5; k++) {
            img4[i][j][k] = new Image(45, 26);
            img4[i][j][k].src = "../images/ladder.png";
            IMG5[k1]=img4[i][j][k];
            IMG5[k1].x1=5*45+j*45*6;
            IMG5[k1].y1=6*26+6*26*i+26*k;
            k1=k1+1;
            img4[i][j][k].onload = function() {
                context.drawImage(img4[i][j][k], 5*45+j*45*6, 6*26+6*26*i+26*k);
            };
        }
    } 
}
var img5=[];
for (let i=0; i<4; i++) {
    img5[i]=[];
    for (let j=0; j<3; j++) {
        img5[i][j] = new Image(45, 26);
        img5[i][j].src = "../images/ladder.png";
        IMG5[k1]=img5[i][j];
        IMG5[k1].x1=5*45+i*45*6;
        IMG5[k1].y1=2*26+26*j;
        k1=k1+1;
        img5[i][j].onload = function() {
            context.drawImage(img5[i][j], 5*45+i*45*6, 2*26+26*j);
        };
    } 
}
var img8=[];
for (let i=0; i<4; i++) {
    img8[i]=[];
    for (let j=0; j<2; j++) {
        img8[i][j] = new Image(45, 26);
        img8[i][j].src = "../images/ladder.png";
        IMG5[k1]=img8[i][j];
        IMG5[k1].x1=5*45+i*45*6;
        IMG5[k1].y1=18*26+26*j;
        k1=k1+1;
        img8[i][j].onload = function() {
            context.drawImage(img8[i][j], 5*45+i*45*6, 18*26+26*j);
        };
    } 
}
var img6=[];
for (let i=k1; i<k1+3; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=1260;
    IMG5[i].y1=(i-k1)*26;
    IMG5[i].onload = function() {
        context.drawImage(IMG5[i], 1260, (i-k1)*26);
    };
}

//drawing all the chest of drawers with treasures
var img7=[];
global.IMG3=[];
var k=0;
for (let i=0; i<3; i++) {
    img7[i]=[];
    for (let j=0; j<4; j++) {
        img7[i][j] = new Image(45, 26);
        img7[i][j].src = "../images/klad.png";
        IMG3[k]=img7[i][j];
        IMG3[k].x1=5*45+6*45*j;
        IMG3[k].y1=5*26+i*26*6;        
        k=k+1;
        img7[i][j].onload = function() {
            context.drawImage(img7[i][j], 5*45+6*45*j, 5*26+i*26*6);
        };
    }
}

var img9=[];
for (let i=0; i<3; i++) {
    img9[i]=[];
    for (let j=0; j<5; j++) {
        img9[i][j] = new Image(45, 26);
        img9[i][j].src = "../images/klad.png";
        IMG3[k]=img9[i][j];
        IMG3[k].x1=2*45+6*45*j;
        IMG3[k].y1=2*26+i*26*6; 
        k=k+1;
        img9[i][j].onload = function() {
            context.drawImage(img9[i][j], 2*45+6*45*j, 2*26+i*26*6);
        };
    }
}

var num_key=Math.floor(Math.random() * (IMG3.length));
for (var i=0; i<IMG3.length; i++) {
    IMG3[i].isNeedToDraw=true;
    if (i==num_key) {
        IMG3[i].isKey=true;
    }
    else {
        IMG3[i].isKey=false;
    }
}

//drawing all water
var img10=[];
for (let i=0; i<2; i++) {
    img10[i]=[];
    for (let j=0; j<25; j++) {
        img10[i][j] = new Image(45, 26);
        img10[i][j].src = "../images/water.png";
        img10[i][j].onload = function() {
            context.drawImage(img10[i][j], 3*45+45*j, 20*26+i*26);
        };
    }
}

//drawing door
global.IMG1 = new Image(45, 26);
IMG1.src = "../images/ClosedDoor.png";
IMG1.x1=27*45;
IMG1.y1=2*26;
IMG1.onload = function() {
    context.drawImage(IMG1, 27*45, 2*26);
};

var closure=require("./closure.js");
var persons=closure();

new persons(50, 494, "../images/stand_man.png", 495, 2, "../images/monster.png", 765, 2, "../images/monster.png");