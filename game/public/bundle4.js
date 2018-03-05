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

	var closure=__webpack_require__(1);
	var persons=closure();

	new persons(50, 520, "../images/stand_man.png", 225, 15, "../images/monster.png");
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
	    
	    if (y11==-10 && document.location.href=="https://sanderas.github.io/game/views/level5.html") { //the condition of going to next level
	        document.location.href="../views/YouWon.html";
	    }
	    if (y11==-10 && document.location.href!="https://sanderas.github.io/game/views/level5.html") {
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