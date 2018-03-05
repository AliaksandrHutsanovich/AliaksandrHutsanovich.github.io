global.canvas = document.getElementById("myCanvas"); 
global.context = canvas.getContext("2d");
//drawing all stone
var img12=[];
for (let i=0; i<2; i++) {
    img12[i]=[];
    for (let j=0; j<22; j++) {
        img12[i][j] = new Image(45, 26);
        img12[i][j].src = "../images/stone.png";
        img12[i][j].onload = function() {
            context.drawImage(img12[i][j], i*45, j*26);
        };
    }
}
for (let i=0; i<2; i++) {
    img12[i]=[];
    for (let j=0; j<22; j++) {
        img12[i][j] = new Image(45, 26);
        img12[i][j].src = "../images/stone.png";
        img12[i][j].onload = function() {
            context.drawImage(img12[i][j], 28*45+i*45, j*26);
        };
    }
}
var img13=[];
for (let i=0; i<3; i++) {
    img13[i] = new Image(45, 26);
    img13[i].src = "../images/stone.png";
    img13[i].onload = function() {
        context.drawImage(img13[i], 2*45+i*45, 19*26);
    };
}
for (let i=0; i<2; i++) {
    img13[i] = new Image(45, 26);
    img13[i].src = "../images/stone.png";
    img13[i].onload = function() {
        context.drawImage(img13[i], 26*45+i*45, 19*26);
    };
}
img13[0] = new Image(45, 26);
img13[0].src = "../images/stone.png";
img13[0].onload = function() {
    context.drawImage(img13[0], 4*45, 18*26);
};
img13[0] = new Image(45, 26);
img13[0].src = "../images/stone.png";
img13[0].onload = function() {
    context.drawImage(img13[0], 26*45, 17*26);
};

//draw all brick
global.IMG2=[];
var k=0;
var img14=[];
for (let i=0; i<3; i++) {
    img14[i]=[];
    for (let j=0; j<13; j++) {
        img14[i][j] = new Image(45, 26);
        img14[i][j].src = "../images/brick.png";
        IMG2[k]=img14[i][j];
        IMG2[k].x1=9*45+j*45;
        IMG2[k].y1=19*26+i*26;
        k=k+1;
        img14[i][j].onload = function() {
            context.drawImage(img14[i][j], 9*45+j*45, 19*26+i*26);
        };
    }
}


var img15=[];
for (let i=39; i<41; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=15*45;
    IMG2[i].y1=26+26*(i-39);
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 15*45, 26+26*(i-39));
    };
}

for (let i=41; i<46; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=13*45+(i-41)*45;
    IMG2[i].y1=26*3;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 13*45+(i-41)*45, 26*3);
    };
}

for (let i=46; i<49; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=12*45+(i-46)*45;
    IMG2[i].y1=26*4;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 12*45+(i-46)*45, 26*4);
    };
}

for (let i=49; i<52; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=16*45+(i-49)*45;
    IMG2[i].y1=26*4;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 16*45+(i-49)*45, 26*4);
    };
}

IMG2[52] = new Image(45, 26);
IMG2[52].src = "../images/brick.png";
IMG2[52].x1=14*45;
IMG2[52].y1=26*5;
IMG2[52].onload = function() {
    context.drawImage(IMG2[52], 14*45, 26*5);
};

IMG2[53] = new Image(45, 26);
IMG2[53].src = "../images/brick.png";
IMG2[53].x1=16*45;
IMG2[53].y1=26*5;
IMG2[53].onload = function() {
    context.drawImage(IMG2[53], 16*45, 26*5);
};

for (let i=54; i<57; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=12*45+(i-54)*45;
    IMG2[i].y1=26*6;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 12*45+(i-54)*45, 26*6);
    };
}

for (let i=57; i<60; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=16*45+(i-57)*45;
    IMG2[i].y1=26*6;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 16*45+(i-57)*45, 26*6);
    };
}

for (let i=60; i<63; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=11*45+(i-60)*45;
    IMG2[i].y1=26*7;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 11*45+(i-60)*45, 26*7);
    };
}
//STOP
for (let i=63; i<66; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=17*45+(i-63)*45;
    IMG2[i].y1=26*7;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 17*45+(i-63)*45, 26*7);
    };
}

IMG2[66] = new Image(45, 26);
IMG2[66].src = "../images/brick.png";
IMG2[66].x1=13*45;
IMG2[66].y1=26*8;
IMG2[66].onload = function() {
    context.drawImage(IMG2[66], 13*45, 26*8);
};

IMG2[67] = new Image(45, 26);
IMG2[67].src = "../images/brick.png";
IMG2[67].x1=17*45;
IMG2[67].y1=26*8;
IMG2[67].onload = function() {
    context.drawImage(IMG2[67], 17*45, 26*8);
};

for (let i=68; i<71; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=12*45+(i-68)*45;
    IMG2[i].y1=26*9;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 12*45+(i-68)*45, 26*9);
    };
}

for (let i=71; i<74; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=16*45+(i-71)*45;
    IMG2[i].y1=26*9;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 16*45+(i-71)*45, 26*9);
    };
}

for (let i=74; i<77; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=11*45+(i-74)*45;
    IMG2[i].y1=26*10;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 11*45+(i-74)*45, 26*10);
    };
}

for (let i=77; i<80; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=17*45+(i-77)*45;
    IMG2[i].y1=26*10;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 17*45+(i-77)*45, 26*10);
    };
}

IMG2[80] = new Image(45, 26);
IMG2[80].src = "../images/brick.png";
IMG2[80].x1=13*45;
IMG2[80].y1=26*11;
IMG2[80].onload = function() {
    context.drawImage(IMG2[80], 13*45, 26*11);
};

IMG2[81] = new Image(45, 26);
IMG2[81].src = "../images/brick.png";
IMG2[81].x1=17*45;
IMG2[81].y1=26*11;
IMG2[81].onload = function() {
    context.drawImage(IMG2[81], 17*45, 26*11);
};

for (let i=82; i<86; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=11*45+(i-82)*45;
    IMG2[i].y1=26*12;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 11*45+(i-82)*45, 26*12);
    };
}

for (let i=86; i<90; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=16*45+(i-86)*45;
    IMG2[i].y1=26*12;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 16*45+(i-86)*45, 26*12);
    };
}

for (let i=90; i<94; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=10*45+(i-90)*45;
    IMG2[i].y1=26*13;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 10*45+(i-90)*45, 26*13);
    };
}

for (let i=94; i<98; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=17*45+(i-94)*45;
    IMG2[i].y1=26*13;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 17*45+(i-94)*45, 26*13);
    };
}

IMG2[98] = new Image(45, 26);
IMG2[98].src = "../images/brick.png";
IMG2[98].x1=13*45;
IMG2[98].y1=26*14;
IMG2[98].onload = function() {
    context.drawImage(IMG2[98], 13*45, 26*14);
};

IMG2[99] = new Image(45, 26);
IMG2[99].src = "../images/brick.png";
IMG2[99].x1=17*45;
IMG2[99].y1=26*14;
IMG2[99].onload = function() {
    context.drawImage(IMG2[99], 17*45, 26*14);
};

for (let i=100; i<105; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=10*45+(i-100)*45;
    IMG2[i].y1=26*15;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 10*45+(i-100)*45, 26*15);
    };
}

for (let i=105; i<110; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=16*45+(i-105)*45;
    IMG2[i].y1=26*15;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 16*45+(i-105)*45, 26*15);
    };
}

for (let i=110; i<115; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=9*45+(i-110)*45;
    IMG2[i].y1=26*16;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 9*45+(i-110)*45, 26*16);
    };
}

for (let i=115; i<120; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=17*45+(i-115)*45;
    IMG2[i].y1=26*16;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 17*45+(i-115)*45, 26*16);
    };
}

for (let i=120; i<122; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=12*45;
    IMG2[i].y1=26*17+(i-120)*26;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 12*45, 26*17+(i-120)*26);
    };
}

for (let i=122; i<124; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=18*45;
    IMG2[i].y1=26*17+(i-122)*26;
    IMG2[i].onload = function() {
        context.drawImage(IMG2[i], 18*45, 26*17+(i-122)*26);
    };
}

for (var i=0; i<IMG2.length; i++) {
    IMG2[i].isNeedToDraw=true;
    IMG2[i].counting=0;
    IMG2[i].isBroken=false;  
}

//drawing all ladders
var img16=[];
global.IMG5=[];

for (let i=0; i<18; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=2*45;
    IMG5[i].y1=26+i*26;
    IMG5[i].onload = function() {
        context.drawImage(IMG5[i], 2*45, 26+i*26);
    };
}

for (let i=18; i<31; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=15*45;
    IMG5[i].y1=26*6+(i-18)*26;
    IMG5[i].onload = function() {
        context.drawImage(IMG5[i], 15*45, 26*6+(i-18)*26);
    };
}

for (let i=31; i<50; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=27*45;
    IMG5[i].y1=(i-31)*26;
    IMG5[i].onload = function() {
        context.drawImage(IMG5[i], 27*45, (i-31)*26);
    };
}

//drawing all overlapping tiles
var img17=[];
global.IMG4=[];
for (let i=0; i<12; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=3*45+45*i;
    IMG4[i].y1=26;
    IMG4[i].onload = function() {
        context.drawImage(IMG4[i], 3*45+45*i, 26);
    };
}

for (let i=12; i<16; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=5*45+45*(i-12);
    IMG4[i].y1=19*26;
    IMG4[i].onload = function() {
        context.drawImage(IMG4[i], 5*45+45*(i-12), 19*26);
    };
}

for (let i=16; i<20; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=22*45+45*(i-16);
    IMG4[i].y1=19*26;
    IMG4[i].onload = function() {
        context.drawImage(IMG4[i], 22*45+45*(i-16), 19*26);
    };
}

//drawing the chests of drawers with treasures
var img18=[];
global.IMG3=[];

IMG3[0] = new Image(45, 26);
IMG3[0].src = "../images/klad.png";
IMG3[0].x1=15*45;
IMG3[0].y1=5*26;
IMG3[0].onload = function() {
    context.drawImage(IMG3[0], 15*45, 5*26);
};
var k=1;
var img19=[];
for (let i=0; i<3; i++) {
    img19[i]=[];
    for (let j=0; j<2; j++) {
        img19[i][j] = new Image(45, 26);
        img19[i][j].src = "../images/klad.png";
        IMG3[k]=img19[i][j];
        IMG3[k].x1=14*45+j*2*45;
        IMG3[k].y1=8*26+i*3*26;
        k=k+1;
        img19[i][j].onload = function() {
           context.drawImage(img19[i][j], 14*45+j*2*45, 8*26+i*3*26);
        };
    }
}

for (let i=k; i<k+2; i++) {
    IMG3[i] = new Image(45, 26);
    IMG3[i].src = "../images/klad.png";
    IMG3[i].x1=14*45+45*2*(i-k);
    IMG3[i].y1=18*26;
    IMG3[i].onload = function() {
        context.drawImage(IMG3[i], 14*45+45*2*(i-k), 18*26);
    };
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

//drawing door
global.IMG1 = new Image(45, 26);
IMG1.src = "../images/ClosedDoor.png";
IMG1.x1=26*45;
IMG1.y1=18*26;
IMG1.onload = function() {
    context.drawImage(IMG1, 26*45, 18*26);
};

//drawing water
var img21=[];
for (let i=0; i<2; i++) {
    img21[i]=[];
    for (let j=0; j<7; j++) {
        img21[i][j] = new Image(45, 26);
        img21[i][j].src = "../images/water.png";
        img21[i][j].onload = function() {
            context.drawImage(img21[i][j], 2*45+j*45, 20*26+i*26);
        };
    }
}

for (let i=0; i<2; i++) {
    for (let j=0; j<6; j++) {
        img21[i][j] = new Image(45, 26);
        img21[i][j].src = "../images/water.png";
        img21[i][j].onload = function() {
            context.drawImage(img21[i][j], 22*45+j*45, 20*26+i*26);
        };
    }
}

var closure=require("./closure.js");
var persons=closure();

new persons(140, 468, "../images/stand_man.png", 630, 468, "../images/monster.png", 765, 468, "../images/monster.png");