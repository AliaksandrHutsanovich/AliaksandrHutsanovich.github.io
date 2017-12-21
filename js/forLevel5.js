global.canvas = document.getElementById("myCanvas"); 
global.context = canvas.getContext("2d");
//drawing all stone
var img28=[];
for (let i=0; i<22; i++) {
    img28[i] = new Image(45, 26);
    img28[i].src = "../images/stone.png";
    img28[i].onload = function() {
        context.drawImage(img28[i], 0, i*26);
    };
}
for (let i=0; i<12; i++) {
    img28[i] = new Image(45, 26);
    img28[i].src = "../images/stone.png";
    img28[i].onload = function() {
        context.drawImage(img28[i], 45+i*45, 21*26);
    };
}
for (let i=0; i<13; i++) {
    img28[i] = new Image(45, 26);
    img28[i].src = "../images/stone.png";
    img28[i].onload = function() {
        context.drawImage(img28[i], 17*45+i*45, 21*26);
    };
}
for (let i=0; i<14; i++) {
    img28[i] = new Image(45, 26);
    img28[i].src = "../images/stone.png";
    img28[i].onload = function() {
        context.drawImage(img28[i], 10*45, 4*26+26*i);
    };
}
img28[0] = new Image(45, 26);
img28[0].src = "../images/stone.png";
img28[0].onload = function() {
    context.drawImage(img28[0], 10*45, 19*26);
};
for (let i=0; i<14; i++) {
    img28[i] = new Image(45, 26);
    img28[i].src = "../images/stone.png";
    img28[i].onload = function() {
        context.drawImage(img28[i], 19*45, 4*26+26*i);
    };
}
img28[0] = new Image(45, 26);
img28[0].src = "../images/stone.png";
img28[0].onload = function() {
    context.drawImage(img28[0], 19*45, 19*26);
};
img28[0] = new Image(45, 26);
img28[0].src = "../images/stone.png";
img28[0].onload = function() {
    context.drawImage(img28[0], 28*45, 19*26);
};

//drawing all brick
global.IMG2=[];

var img29=[];
for (let i=0; i<6; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=3*45+45*i;
    IMG2[i].y1=19*26;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 3*45+45*i, 19*26);
    };
}
for (let i=6; i<12; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=21*45+45*(i-6);
    IMG2[i].y1=19*26;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 21*45+45*(i-6), 19*26);
    };
}
IMG2[12] = new Image(45, 26);
IMG2[12].src = "../images/brick.png";
IMG2[12].x1=10*45;
IMG2[12].y1=18*26;
IMG2[12].onload = function() {
    context.drawImage(IMG2[12], 10*45, 18*26);
};
IMG2[13] = new Image(45, 26);
IMG2[13].src = "../images/brick.png";
IMG2[13].x1=19*45;
IMG2[13].y1=18*26;
IMG2[13].onload = function() {
    context.drawImage(IMG2[13], 19*45, 18*26);
};
for (let i=14; i<22; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=3*45+45*(i-14);
    IMG2[i].y1=3*26;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 3*45+45*(i-14), 3*26);
    };
}
for (let i=22; i<30; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=19*45+45*(i-22);
    IMG2[i].y1=3*26;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 19*45+45*(i-22), 3*26);
    };
}

var img30=[];
var k1=30;
for (let i=0; i<2; i++) {
    img30[i]=[];
    for (let j=0; j<8; j++) {
        img30[i][j] = new Image(45, 26);
        img30[i][j].src = "../images/brick.png";
        IMG2[k1]=img30[i][j];
        IMG2[k1].x1=3*45+45*23*i;
        IMG2[k1].y1=4*26+j*2*26;
        k1=k1+1;
        img30[i][j].onload = function() {
           context.drawImage(img30[i][j], 3*45+45*23*i, 4*26+j*2*26);
        };
    }
}

var img31=[];
for (let i=0; i<2; i++) {
    img31[i]=[];
    for (let j=0; j<7; j++) {
        img31[i][j]=[];
        for (let k=0; k<5; k++) {
            img31[i][j][k] = new Image(45, 26);
            img31[i][j][k].src = "../images/brick.png";
            IMG2[k1]=img31[i][j][k];
            IMG2[k1].x1=4*45+45*17*i+k*45;
            IMG2[k1].y1=5*26+j*2*26;
            k1=k1+1;
            img31[i][j][k].onload = function() {
                context.drawImage(img31[i][j][k], 4*45+45*17*i+k*45, 5*26+j*2*26);
            };
        }
    }
}

for (var i=0; i<IMG2.length; i++) {
    IMG2[i].isNeedToDraw=true;
    IMG2[i].counting=0;
    IMG2[i].isBroken=false;  
}

//drawing all ladders
var img32=[];
global.IMG5=[];
for (let i=0; i<18; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=12*45;
    IMG5[i].y1=3*26+i*26;
    IMG5[i].onload = function() {
        context.drawImage(IMG5[i], 12*45, 3*26+i*26);
    };
}
for (let i=18; i<36; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=17*45;
    IMG5[i].y1=3*26+(i-18)*26;
    IMG5[i].onload = function() {
        context.drawImage(IMG5[i], 17*45, 3*26+(i-18)*26);
    };
}
for (let i=36; i<57; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=29*45;
    IMG5[i].y1=(i-36)*26;
    IMG5[i].onload = function() {
        context.drawImage(IMG5[i], 29*45, (i-36)*26);
    };
}

//drawing overlapping tiles
var img33=[];
global.IMG4=[];
var k=0;
for (let i=0; i<2; i++) {
    img33[i]=[];
    for (let j=0; j<8; j++) {
        img33[i][j] = new Image(45, 26);
        img33[i][j].src = "../images/overlapping.png";
        IMG4[k]=img33[i][j];
        IMG4[k].x1=9*45+i*11*45;
        IMG4[k].y1=5*26+j*2*26;
        k=k+1;
        img33[i][j].onload = function() {
            context.drawImage(img33[i][j], 9*45+i*11*45, 5*26+j*2*26);
        };
    }
}

IMG4[k] = new Image(45, 26);
IMG4[k].src = "../images/overlapping.png";
IMG4[k].x1=11*45;
IMG4[k].y1=3*26;
IMG4[k].onload = function() {
    context.drawImage(IMG4[k], 11*45, 3*26);
};

k=k+1;
IMG4[k] = new Image(45, 26);
IMG4[k].src = "../images/overlapping.png";
IMG4[k].x1=18*45;
IMG4[k].y1=3*26;
IMG4[k].onload = function() {
    context.drawImage(IMG4[k], 18*45, 3*26);
};

k=k+1;
var img35=[];
for (let i=k; i<k+4; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=13*45+45*(i-k);
    IMG4[i].y1=3*26;
    IMG4[i].onload = function() {
        context.drawImage(IMG4[i], 13*45+45*(i-k), 3*26);
    };
}

//drawing chests of drawyers with treasures
var k1=0;
global.IMG3=[];
var img36=[];
for (let i=0; i<2; i++) {
    img36[i]=[];
    for (let j=0; j<8; j++) {
        img36[i][j]=[];
        for (let k=0; k<2; k++) {
            img36[i][j][k] = new Image(45, 26);
            img36[i][j][k].src = "../images/klad.png";
            IMG3[k1]=img36[i][j][k];
            IMG3[k1].x1=6*45+45*16*i+k*45;
            IMG3[k1].y1=4*26+j*26*2;
            k1=k1+1;
            img36[i][j][k].onload = function() {
                context.drawImage(img36[i][j][k], 6*45+45*16*i+k*45, 4*26+j*26*2);
            };
        }
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

//drawing doors
global.IMG1 = new Image(45, 26);
IMG1.src = "../images/ClosedDoor.png";
IMG1.x1=28*45;
IMG1.y1=20*26;
IMG1.onload = function() {
    context.drawImage(IMG1, 28*45, 20*26);
};

//drawing water
var img38=[];
for (let i=0; i<4; i++) {
    img38[i] = new Image(45, 26);
    img38[i].src = "../images/water.png";
    img38[i].onload = function() {
       context.drawImage(img38[i], 13*45+i*45, 21*26);
    };
}

var closure=require("./closure.js");
var persons=closure();

new persons(50, 520, "../images/stand_man.png", 540, 34, "../images/monster.png", 765, 34, "../images/monster.png");