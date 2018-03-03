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

	/* WEBPACK VAR INJECTION */(function(global) {global.IMG2=[];
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

	var closure=__webpack_require__(1);
	var persons=closure();

	new persons(50, 494, "../images/stand_man.png", 495, 2, "../images/monster.png", 765, 2, "../images/monster.png");
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