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

	var closure=__webpack_require__(1);
	var persons=closure();

	new persons(140, 468, "../images/stand_man.png", 630, 468, "../images/monster.png", 765, 468, "../images/monster.png");
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