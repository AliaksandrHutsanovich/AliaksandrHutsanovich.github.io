/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {global.canvas = document.getElementById("myCanvas"); 
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

	var closure=__webpack_require__(1);
	var persons=closure();

	new persons(50, 520, "../images/stand_man.png", 540, 34, "../images/monster.png", 765, 34, "../images/monster.png");
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {function closure() {
	    
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
	    

	    global.drawingFrame=__webpack_require__(2);
	    
	    global.colisionWallBullet=__webpack_require__(3);
	    global.colisionWallhorizontal=__webpack_require__(4);
	    global.colisionWallhorizontal_for_monster=__webpack_require__(5);
	    global.colisionWallvertical=__webpack_require__(6);
	    global.collisionWallvertical_for_monster=__webpack_require__(7);
	    global.fallingDown=__webpack_require__(8);
	    global.fallingDown_monster1=__webpack_require__(9);
	    global.fallingDown_monster2=__webpack_require__(10);
	    global.isDoor=__webpack_require__(11);
	    global.isFalling=__webpack_require__(12);
	    global.isFalling_monster1=__webpack_require__(13);
	    global.isFalling_monster2=__webpack_require__(14);
	    global.isKlad=__webpack_require__(15);
	    global.leftShooting=__webpack_require__(16);
	    global.openOrNotOpen=__webpack_require__(17);
	    global.rightShooting=__webpack_require__(18);
	    global.takeKlad=__webpack_require__(19);
	    global.water=__webpack_require__(20);
	    
	    persons=__webpack_require__(21);
	    
	    return persons;
	}

	module.exports=closure;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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
	    
	    if (y11==-10 && document.location.href=="https://sanderas.github.io/views/level5.html") { //the condition of going to next level
	        document.location.href="../views/YouWon.html";
	    }
	    if (y11==-10 && document.location.href!="https://sanderas.github.io/views/level5.html") {
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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports =function colisionWallBullet(x, y) {  //function of encuntering bullet with wall
	    var imgData;
	    if (leftShoot && !rightShoot) {
	        imgData = context.getImageData(x-4, y, 4, 18);
	    }
	    if (rightShoot && !leftShoot) {
	        imgData = context.getImageData(x+4, y, 4, 18);
	    }
	    if ((!rightShoot && !leftShoot) || (rightShoot && leftShoot)) {
	        rightShoot=false; leftShoot=false;
	        return false;
	    }
	    var pixels = imgData.data;
	    var n=pixels.length;
	    for (var i=0; i<n; i+=4) {
	        if (pixels[i]==1 && pixels[i+1]==1 && pixels[i+2]==1) {
	            return true;
	        }
	    }
	    return false;  
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports =function colisionWallhorizontal(x, y, width) {
	    var imgData;
	    if (dx_left && !dx_right) {
	        imgData = context.getImageData(x-2, y, width, 18);
	    }
	    if (dx_right && !dx_left) {
	        imgData = context.getImageData(x+20, y, width, 18);
	    }
	    if ((!dx_right && !dx_left) || (dx_right && dx_left)) {
	        dx_right=false; dx_left=false;
	        return false;
	    }
	    dx_right=false; dx_left=false;
	    var pixels = imgData.data;
	    var n=pixels.length;
	    for (var i=0; i<n; i+=4) {
	        if (pixels[i]==1 && pixels[i+1]==1 && pixels[i+2]==1) {
	            return true;
	        }
	    }
	    return false;  
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports =function colisionWallhorizontal_for_monster(x, y) {
	    var imgData;
	    if (x>x11) {
	        imgData = context.getImageData(x-2, y, 2, 18);
	    }
	    if (x<x11) {
	        imgData = context.getImageData(x+20, y, 2, 18)
	    }
	    var pixels = imgData.data;
	    var n=pixels.length;
	    for (var i=0; i<n; i+=4) {
	        if (pixels[i]==1 && pixels[i+1]==1 && pixels[i+2]==1) {
	            return true;
	        }
	    }
	    return false;  
	};




/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports =function colisionWallvertica(x, y) {
	    var imgData;
	    if (dy_down && !dy_up) {
	        imgData = context.getImageData(x-2, y+16, 24, 2);
	    }
	    if (dy_up && !dy_down) {
	        imgData = context.getImageData(x-2, y-2, 24, 2);
	    }
	    if ((!dy_down && !dy_up) || (dy_down && dy_up)) {
	        
	        dy_down=false; dy_up=false;
	        return false;
	    } 
	    dy_down=false; dy_up=false;
	    var pixels = imgData.data;
	    var n=pixels.length;
	    for (var i=0; i<n; i+=4) {
	        if (pixels[i]==1 && pixels[i+1]==1 && pixels[i+2]==1) {
	            return true;
	        }
	    }
	    return false;
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = function collisionWallvertical_for_monster(x, y) {
	    var imgData;
	    if (y<y11) {
	        imgData = context.getImageData(x, y+18, 20, 4);
	    }
	    if (y>y11) {
	        imgData = context.getImageData(x, y-4, 20, 4);
	    }
	    if (!imgData) return false;
	    var pixels = imgData.data;
	    var n=pixels.length;
	    for (var i=0; i<n; i+=4) {
	        if (pixels[i]==1 && pixels[i+1]==1 && pixels[i+2]==1) {
	            return true;
	        }
	    }
	    return false;
	}




/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports =function fallingDown() {
	    dy=0;
	    dx=0;
	    y11+=2;
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports =function fallingDown_monster1() {
	    y12+=1;
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports =function fallingDown_monster2() {
	    y22+=1;
	};




/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports =function isDoor(x, y) {
	    var imgData = context.getImageData(x+20, y, 4, 18);
	    var pixels = imgData.data;
	    var n=pixels.length;
	    for (var i=0; i<n; i+=4) {
	        if (pixels[i]==247 && pixels[i+1]==26 && pixels[i+2]==226) {
	            return true;
	        }
	    }
	    return false;
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports =function isFalling(x, y) {
	    if (isFallman) {                             //if person is falling we need to try whether he may can be stopped
	        var imageData=context.getImageData(x, y+18, 20, 7);
	        for (var i=0; i<imageData.data.length; i=i+4) {                   //dependently on type overlapping (if no overlapping, the falling is continueing; if yes to stop)
	            if (imageData.data[i]==1 && imageData.data[i+1]==1 && imageData.data[i+2]==1) {
	                isFallman=false;
	                return false;
	            }
	            if (imageData.data[i]==0 && imageData.data[i+1]==40 && imageData.data[i+2]==212) {  //if overlapping is tile, it is falling
	                isFallman=false;
	                return false;
	            }
	            else return true;
	        }
	    }
	    if (!isFallman) {  //if person is not falling we need to check whether he can fall
	        var imageData=context.getImageData(x+1, y+18, 20, 7);
	        for (var i=0; i<imageData.data.length; i++) {  //check pixels in order to understand whether overlapping is under the person
	            if (imageData.data[i]!=255 || imageData.data[i+1]!=255 || imageData.data[i+2]!=255) {
	                isFallman=false;
	            }
	        }
	        for (var j=0; j<imageData.data.length; j=j+4) {  //check pixels in order to understand whether the broken wall is under the person
	            if (imageData.data[j]==0 && imageData.data[j+1]==40 && imageData.data[j+2]==212) {
	                isFallman=false;
	                return false;
	            }
	            if (imageData.data[j]==1 && imageData.data[j+1]==1 && imageData.data[j+2]==1) {
	                isFallman=false;
	                return false;
	            }
	            if (imageData.data[j]==0 && imageData.data[j+1]==242 && imageData.data[j+2]==16) {
	                isFallman=false;
	                return false;
	            }
	        }
	        if (j>=imageData.data.length) {
	            isFallman=true;
	            return true;
	        }
	    }   
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports =function isFalling_monster1(x, y) {
	    if (isFallmonster1) {                             //if person is falling we need to try whether he may can be stopped
	        var imageData=context.getImageData(x, y+18, 20, 7);
	        for (var i=0; i<imageData.data.length; i=i+4) {                   //dependently on type overlapping (if no overlapping, the falling is continueing; if yes to stop)
	            if (imageData.data[i]==1 && imageData.data[i+1]==1 && imageData.data[i+2]==1) {
	                isFallmonster1=false;
	                return false;
	            }
	            if (imageData.data[i]==0 && imageData.data[i+1]==40 && imageData.data[i+2]==212) {  //if overlapping is tile, it is falling
	                isFallmonster1=false;
	                return false;
	            }
	            else return true;
	        }
	    }
	    if (!isFallmonster1) {  //if person is not falling we need to check whether he can fall
	        var imageData=context.getImageData(x+1, y+18, 20, 7);
	        for (var i=0; i<imageData.data.length; i++) {  //check pixels in order to understand whether overlapping is under the person
	            if (imageData.data[i]!=255 || imageData.data[i+1]!=255 || imageData.data[i+2]!=255) {
	                isFallmonster1=false;
	            }
	        }
	        for (var j=0; j<imageData.data.length; j=j+4) {  //check pixels in order to understand whether the broken wall is under the person
	            if (imageData.data[j]==0 && imageData.data[j+1]==40 && imageData.data[j+2]==212) {
	                isFallmonster1=false;
	                return false;
	            }
	            if (imageData.data[j]==1 && imageData.data[j+1]==1 && imageData.data[j+2]==1) {
	                isFallmonster1=false;
	                return false;
	            }
	            if (imageData.data[j]==0 && imageData.data[j+1]==242 && imageData.data[j+2]==16) {
	                isFallmonster1=false;
	                return false;
	            }
	        }
	        if (j>=imageData.data.length) {
	            isFallmonster1=true;
	            return true;
	        }
	    }   
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports =function isFalling_monster2(x, y) {
	    if (isFallmonster2) {                             //if person is falling we need to try whether he may can be stopped
	        var imageData=context.getImageData(x, y+18, 20, 7);
	        for (var i=0; i<imageData.data.length; i=i+4) {                   //dependently on type overlapping (if no overlapping, the falling is continueing; if yes to stop)
	            if (imageData.data[i]==1 && imageData.data[i+1]==1 && imageData.data[i+2]==1) {
	                isFallmonster2=false;
	                return false;
	            }
	            if (imageData.data[i]==0 && imageData.data[i+1]==40 && imageData.data[i+2]==212) {  //if overlapping is tile, it is falling
	                isFallmonster2=false;
	                return false;
	            }
	            else return true;
	        }
	    }
	    if (!isFallmonster2) {  //if person is not falling we need to check whether he can fall
	        var imageData=context.getImageData(x+1, y+18, 20, 7);
	        for (var i=0; i<imageData.data.length; i++) {  //check pixels in order to understand whether overlapping is under the person
	            if (imageData.data[i]!=255 || imageData.data[i+1]!=255 || imageData.data[i+2]!=255) {
	                isFallmonster2=false;
	            }
	        }
	        for (var j=0; j<imageData.data.length; j=j+4) {  //check pixels in order to understand whether the broken wall is under the person
	            if (imageData.data[j]==0 && imageData.data[j+1]==40 && imageData.data[j+2]==212) {
	                isFallmonster2=false;
	                return false;
	            }
	            if (imageData.data[j]==1 && imageData.data[j+1]==1 && imageData.data[j+2]==1) {
	                isFallmonster2=false;
	                return false;
	            }
	            if (imageData.data[j]==0 && imageData.data[j+1]==242 && imageData.data[j+2]==16) {
	                isFallmonster2=false;
	                return false;
	            }
	        }
	        if (j>=imageData.data.length) {
	            isFallmonster2=true;
	            return true;
	        }
	    }   
	};




/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports =function isKlad(x, y) {
	    var imgData = context.getImageData(x-2, y, 2, 18);
	    var pixels = imgData.data;
	    var n=pixels.length;
	    for (var i=0; i<n; i+=4) {
	        if (pixels[i]==222 && pixels[i+1]==246 && pixels[i+2]==4) {
	            return true;
	        }
	    };
	    imgData=context.getImageData(x+20, y, 2, 18);
	    pixels = imgData.data;
	    n=pixels.length;
	    for (var i=0; i<n; i+=4) {
	        if (pixels[i]==222 && pixels[i+1]==246 && pixels[i+2]==4) {
	            return true;
	        }
	    };
	    imgData=context.getImageData(x, y-2, 20, 2);
	    pixels = imgData.data;
	    for (var i=0; i<n; i+=4) {
	        if (pixels[i]==222 && pixels[i+1]==246 && pixels[i+2]==4) {
	            return true;
	        }
	    };
	    imgData=context.getImageData(x, y+18, 20, 2);
	    pixels = imgData.data;
	    for (var i=0; i<n; i+=4) {
	        if (pixels[i]==222 && pixels[i+1]==246 && pixels[i+2]==4) {
	            return true;
	        }
	    };
	    return false;
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

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

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports =function openOrNotOpen() {
	    if (hasKey) {
	        IMG1.src="../../images/openedDoor1.png";
	    }
	    else 
	        x11-=dx;  
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

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

/***/ }),
/* 19 */
/***/ (function(module, exports) {

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

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports =function water(x,y) {
	    var imgData = context.getImageData(x, y+18, 20, 1);
	    var pixels = imgData.data;
	    var n=pixels.length;
	    for (var i=0; i<n; i+=4) {
	        if (pixels[i]!=27 || pixels[i+1]!=189 || pixels[i+2]!=239) {
	            return false;
	        }
	    }
	    return true;
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	

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
	        //������� ������� ��������� 
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

/***/ })
/******/ ]);