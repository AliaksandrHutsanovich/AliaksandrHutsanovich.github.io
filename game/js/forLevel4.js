global.canvas = document.getElementById("myCanvas"); 
global.context = canvas.getContext("2d");

//drawing all stone
var img21=[];
for (let i=0; i<22; i++) {
    img21[i] = new Image(45, 26);
    img21[i].src = "../images/stone.png";
    img21[i].onload = function() {
        context.drawImage(img21[i], 0, i*26);
    };
}
for (let i=0; i<22; i++) {
    img21[i] = new Image(45, 26);
    img21[i].src = "../images/stone.png";
    img21[i].onload = function() {
        context.drawImage(img21[i], 29*45, i*26);
    };
}
for (let i=0; i<4; i++) {
    img21[i] = new Image(45, 26);
    img21[i].src = "../images/stone.png";
    img21[i].onload = function() {
        context.drawImage(img21[i], 45+i*45, 21*26);
    };
}
img21[0] = new Image(45, 26);
img21[0].src = "../images/stone.png";
img21[0].onload = function() {
    context.drawImage(img21[0], 3*45, 5*26);
};

//drawing brick
global.IMG2=[];
img22=[];
for (let i=0; i<2; i++) {
    IMG2[i] = new Image(45, 26);
    IMG2[i].src = "../images/brick.png";
    IMG2[i].x1=2*45+i*45;
    IMG2[i].y1=6*26;
    IMG2[i].onload = function() {
       context.drawImage(IMG2[i], 2*45+i*45, 6*26);
    };
}
IMG2[2] = new Image(45, 26);
IMG2[2].src = "../images/brick.png";
IMG2[2].x1=3*45;
IMG2[2].y1=9*26;
IMG2[2].onload = function() {
    context.drawImage(IMG2[2], 3*45, 9*26);
};
IMG2[3] = new Image(45, 26);
IMG2[3].src = "../images/brick.png";
IMG2[3].x1=4*45;
IMG2[3].y1=11*26;
IMG2[3].onload = function() {
    context.drawImage(IMG2[3], 4*45, 11*26);
};
IMG2[4] = new Image(45, 26);
IMG2[4].src = "../images/brick.png";
IMG2[4].x1=3*45;
IMG2[4].y1=13*26;
IMG2[4].onload = function() {
    context.drawImage(IMG2[4], 3*45, 13*26);
};
IMG2[5] = new Image(45, 26);
IMG2[5].src = "../images/brick.png";
IMG2[5].x1=5*45;
IMG2[5].y1=13*26;
IMG2[5].onload = function() {
    context.drawImage(IMG2[5], 5*45, 13*26);
};
IMG2[6] = new Image(45, 26);
IMG2[6].src = "../images/brick.png";
IMG2[6].x1=25*45;
IMG2[6].y1=13*26;
IMG2[6].onload = function() {
    context.drawImage(IMG2[6], 25*45, 13*26);
};

for (var i=0; i<IMG2.length; i++) {
    IMG2[i].isNeedToDraw=true;
    IMG2[i].counting=0;
    IMG2[i].isBroken=false;  
}

//drawing ladders
var img23=[];
global.IMG5=[];

for (let i=0; i<4; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=3*45;
    IMG5[i].y1=i*26;
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], 3*45, i*26);
    };
}
for (let i=4; i<7; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=45;
    IMG5[i].y1=4*26+(i-4)*26;
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], 45, 4*26+(i-4)*26);
    };
}
for (let i=7; i<13; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=2*45;
    IMG5[i].y1=7*26+(i-7)*26;
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], 2*45, 7*26+(i-7)*26);
    };
}
for (let i=13; i<20; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=5*45+(i-13)*45;
    IMG5[i].y1=3*26+(i-13)*26;
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], 5*45+(i-13)*45, 3*26+(i-13)*26);
    };
}
for (let i=20; i<24; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=13*45-(i-20)*45;
    IMG5[i].y1=13*26+(i-20)*2*26;
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], 13*45-(i-20)*45, 13*26+(i-20)*2*26);
    };
}
for (let i=24; i<28; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=15*45+(i-24)*45;
    IMG5[i].y1=13*26+(i-24)*2*26;
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], 15*45+(i-24)*45, 13*26+(i-24)*2*26);
    };
}
for (let i=28; i<30; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].x1=12*45;
    IMG5[i].y1=10*26+(i-28)*26;
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], 12*45, 10*26+(i-28)*26);
    };
}
IMG5[30] = new Image(45, 26);
IMG5[30].src = "../images/ladder.png";
IMG5[30].x1=13*45;
IMG5[30].y1=10*26;
IMG5[30].onload = function() {
    context.drawImage(IMG5[30], 13*45, 10*26);
};
for (let i=31; i<33; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=14*45;
    IMG5[i].y1=11*26+(i-31)*3*26;
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], 14*45, 11*26+(i-31)*3*26);
    };
}
for (let i=33; i<36; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=16*45;
    IMG5[i].y1=10*26+(i-33)*26;
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], 16*45, 10*26+(i-33)*26);
    };
}

var k1=36;
var img24=[];
for (let i=0; i<2; i++) {
    img24[i]=[];
    for (let j=0; j<2; j++) {
        img24[i][j] = new Image(45, 26);
        img24[i][j].src = "../images/ladder.png";
        IMG5[k1]=img24[i][j];
        IMG5[k1].x1=15*45;
        IMG5[k1].y1=2*26+j*26+i*6*26;
        k1=k1+1;
        img24[i][j].onload = function() {
            context.drawImage(img24[i][j], 15*45, 2*26+j*26+i*6*26);
        };
    }
}

for (let i=k1; i<k1+2; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=14*45;
    IMG5[i].y1=4*26+(i-k1)*3*26;
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], 14*45, IMG5[i].y1);
    };
}
k1=k1+2;
for (let i=k1; i<k1+2; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=13*45;
    IMG5[i].y1=5*26+(i-k1)*26;
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], 13*45, IMG5[i].y1);
    };
}
k1=k1+2;
for (let i=0; i<2; i++) {
    img24[i]=[];
    for (let j=0; j<2; j++) {
        img24[i][j] = new Image(45, 26);
        img24[i][j].src = "../images/ladder.png";
        IMG5[k1]=img24[i][j];
        IMG5[k1].x1=4*45;
        IMG5[k1].y1=15*26+j*26+i*4*26;
        k1=k1+1;
        img24[i][j].onload = function() {
            context.drawImage(img24[i][j], 4*45, 15*26+j*26+i*4*26);
        };
    }
}

for (let i=0; i<2; i++) {
    img24[i]=[];
    for (let j=0; j<2; j++) {
        img24[i][j] = new Image(45, 26);
        img24[i][j].src = "../images/ladder.png";
        IMG5[k1]=img24[i][j];
        IMG5[k1].x1=18*45;
        IMG5[k1].y1=5*26+j*26+i*4*26;
        k1=k1+1;
        img24[i][j].onload = function() {
            context.drawImage(img24[i][j], 18*45, 5*26+j*26+i*4*26);
        };
    }
}

for (let i=0; i<2; i++) {
    img24[i]=[];
    for (let j=0; j<2; j++) {
        img24[i][j] = new Image(45, 26);
        img24[i][j].src = "../images/ladder.png";
        IMG5[k1]=img24[i][j];
        IMG5[k1].x1=23*45;
        IMG5[k1].y1=7*26+j*26+i*4*26;
        k1=k1+1;
        img24[i][j].onload = function() {
            context.drawImage(img24[i][j], 23*45, 7*26+j*26+i*4*26);
        };
    }
}
for (let i=k1; i<k1+2; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=23*45+45*(i-k1);
    IMG5[i].y1=3*26+(i-k1)*26;
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], IMG5[i].x1, IMG5[i].y1);
    };
}
k1=k1+2;
for (let i=k1; i<k1+14; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=27*45;
    IMG5[i].y1=26+(i-k1)*26;
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], 27*45, IMG5[i].y1);
    };
}
k1=k1+14;
for (let i=k1; i<k1+2; i++) {
    IMG5[i] = new Image(45, 26);
    IMG5[i].src = "../images/ladder.png";
    IMG5[i].x1=27*45;
    IMG5[i].y1=17*26+(i-k1)*26;
    IMG5[i].onload = function() {
       context.drawImage(IMG5[i], 27*45, IMG5[i].y1);
    };
}

//drawing overlapping tiles
var img25=[];
global.IMG4=[];
for (let i=0; i<5; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=5*45+45*i;
    IMG4[i].y1=19*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 5*45+45*i, 19*26);
    };
}
for (let i=5; i<12; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=11*45+45*(i-5);
    IMG4[i].y1=20*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 11*45+45*(i-5), 20*26);
    };
}
for (let i=12; i<20; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=19*45+45*(i-12);
    IMG4[i].y1=19*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 19*45+45*(i-12), 19*26);
    };
}
for (let i=20; i<29; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=18*45+45*(i-20);
    IMG4[i].y1=17*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 18*45+45*(i-20), 17*26);
    };
}
for (let i=29; i<34; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=12*45+45*(i-29);
    IMG4[i].y1=18*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 12*45+45*(i-29), 18*26);
    };
}
for (let i=34; i<40; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=5*45+45*(i-34);
    IMG4[i].y1=17*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 5*45+45*(i-34), 17*26);
    };
}
for (let i=40; i<47; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=5*45+45*(i-40);
    IMG4[i].y1=15*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 5*45+45*(i-40), 15*26);
    };
}
for (let i=47; i<50; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=13*45+45*(i-47);
    IMG4[i].y1=16*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 13*45+45*(i-47), 16*26);
    };
}
for (let i=50; i<60; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=17*45+45*(i-50);
    IMG4[i].y1=15*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 17*45+45*(i-50), 15*26);
    };
}
for (let i=60; i<67; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=6*45+45*(i-60);
    IMG4[i].y1=13*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 6*45+45*(i-60), 13*26);
    };
}
for (let i=67; i<69; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=11*45+45*(i-67);
    IMG4[i].y1=12*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 11*45+45*(i-67), 12*26);
    };
}
for (let i=69; i<74; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=5*45+45*(i-69);
    IMG4[i].y1=11*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 5*45+45*(i-69), 11*26);
    };
}
for (let i=74; i<77; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=4*45+45*(i-74);
    IMG4[i].y1=6*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 4*45+45*(i-74), 6*26);
    };
}
for (let i=77; i<79; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=13*45+45*(i-77);
    IMG4[i].y1=2*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 13*45+45*(i-77), 2*26);
    };
}
for (let i=79; i<85; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=17*45+45*(i-79);
    IMG4[i].y1=13*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], 17*45+45*(i-79), 13*26);
    };
}
var k=85;

var img26=[];
for (let i=0; i<3; i++) {
    img26[i]=[];
    for (let j=0; j<4; j++) {
        img26[i][j] = new Image(45, 26);
        img26[i][j].src = "../images/overlapping.png";
        IMG4[k]=img26[i][j];
        IMG4[k].x1=19*45+45*j;
        IMG4[k].y1=7*26+2*26*i;
        k=k+1;
        img26[i][j].onload = function() {
            context.drawImage(img26[i][j], 19*45+45*j, 7*26+2*26*i);
        };
    }
}
for (let i=k; i<k+5; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=19*45+45*(i-k);
    IMG4[i].y1=5*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], IMG4[i].x1, 5*26);
    };
}
k=k+5;
for (let i=k; i<k+5; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=18*45+45*(i-k);
    IMG4[i].y1=3*26
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], IMG4[i].x1, 3*26);
    };
}
k=k+5;
for (let i=k; i<k+10; i++) {
    IMG4[i] = new Image(45, 26);
    IMG4[i].src = "../images/overlapping.png";
    IMG4[i].x1=17*45+45*(i-k);
    IMG4[i].y1=1*26;
    IMG4[i].onload = function() {
       context.drawImage(IMG4[i], IMG4[i].x1, IMG4[i].y1);
    };
}
k=k+10;
IMG4[k] = new Image(45, 26);
IMG4[k].src = "../images/overlapping.png";
IMG4[k].x1=26*45;
IMG4[k].y1=13*26;
IMG4[k].onload = function() {
    context.drawImage(IMG4[k], 26*45, 13*26);
};
k=k+1;
IMG4[k] = new Image(45, 26);
IMG4[k].src = "../images/overlapping.png";
IMG4[k].x1=2*45;
IMG4[k].y1=4*26;
IMG4[k].onload = function() {
    context.drawImage(IMG4[k], 2*45, 4*26);
};

//drawing the chests of drawyers
global.IMG3=[];
for (let i=0; i<2; i++) {
    IMG3[i] = new Image(45, 26);
    IMG3[i].src = "../images/klad.png";
    IMG3[i].x1=3*45;
    IMG3[i].y1=8*26+i*4*26;
    IMG3[i].onload = function() {
        context.drawImage(IMG3[i], 3*45, 8*26+i*4*26);
    };
}
IMG3[2] = new Image(45, 26);
IMG3[2].src = "../images/klad.png";
IMG3[2].x1=4*45;
IMG3[2].y1=10*26;
IMG3[2].onload = function() {
    context.drawImage(IMG3[2], 4*45, 10*26);
};
for (let i=3; i<8; i++) {
    IMG3[i] = new Image(45, 26);
    IMG3[i].src = "../images/klad.png";
    IMG3[i].x1=5*45+(i-3)*45;
    IMG3[i].y1=10*26;
    IMG3[i].onload = function() {
        context.drawImage(IMG3[i], 5*45+(i-3)*45, 10*26);
    };
}
for (let i=8; i<13; i++) {
    IMG3[i] = new Image(45, 26);
    IMG3[i].src = "../images/klad.png";
    IMG3[i].x1=5*45+(i-8)*45;
    IMG3[i].y1=12*26;
    IMG3[i].onload = function() {
        context.drawImage(IMG3[i], 5*45+(i-8)*45, 12*26);
    };
}
IMG3[13] = new Image(45, 26);
IMG3[13].src = "../images/klad.png";
IMG3[13].x1=11*45;
IMG3[13].y1=11*26;
IMG3[13].onload = function() {
    context.drawImage(IMG3[13], 11*45, 11*26);
};
IMG3[14] = new Image(45, 26);
IMG3[14].src = "../images/klad.png";
IMG3[14].x1=13*45;
IMG3[14].y1=1*26;
IMG3[14].onload = function() {
    context.drawImage(IMG3[14], 13*45, 1*26);
};
IMG3[15] = new Image(45, 26);
IMG3[15].src = "../images/klad.png";
IMG3[15].x1=17*45;
IMG3[15].y1=3*26;
IMG3[15].onload = function() {
    context.drawImage(IMG3[15], 17*45, 3*26);
};
for (let i=16; i<19; i++) {
    IMG3[i] = new Image(45, 26);
    IMG3[i].src = "../images/klad.png";
    IMG3[i].x1=25*45;
    IMG3[i].y1=7*26+(i-16)*26*2;
    IMG3[i].onload = function() {
        context.drawImage(IMG3[i], 25*45, 7*26+(i-16)*26*2);
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

//drawing the closed door
global.IMG1 = new Image(45, 26);
IMG1.src = "../images/ClosedDoor.png";
IMG1.x1=2*45;
IMG1.y1=3*26;
IMG1.onload = function() {
    context.drawImage(IMG1, 2*45, 3*26);
};

//drawing water 
var img28=[];
for (let i=0; i<24; i++) {
    img28[i] = new Image(45, 26);
    img28[i].src = "../images/water.png";
    img28[i].onload = function() {
        context.drawImage(img28[i], 5*45+i*45, 21*26);
    };
}

var closure=require("./closure.js");
var persons=closure();

new persons(50, 520, "../images/stand_man.png", 225, 15, "../images/monster.png");