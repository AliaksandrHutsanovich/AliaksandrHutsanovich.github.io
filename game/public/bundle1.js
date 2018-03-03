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

	/* WEBPACK VAR INJECTION */(function(global) {//draw all stone
	global.canvas = document.getElementById("myCanvas"); 
	global.context = canvas.getContext("2d");
	var img=[];
	for (let i=0; i<14; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/stone.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 45*i, 0);
	    };
	}
	for (let i=0; i<15; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/stone.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 675+45*i, 0);
	    };
	}
	for (let i=0; i<21; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/stone.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 0, 26+i*26);
	    };
	}
	for (let i=0; i<21; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/stone.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 1305, 26+i*26);
	    };
	}
	for (let i=0; i<8; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/stone.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 45+i*45, 546);
	    };
	}
	for (let i=0; i<4; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/stone.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 25*45+i*45, 546);
	    };
	}
	for (let i=0; i<4; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/stone.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 25*45+i*45, 520);
	    };
	}
	img[0] = new Image(45, 26);
	img[0].src = "../images/stone.png";
	img[0].onload = function() {
	    context.drawImage(img[0], 360, 520);
	};
	for (let i=0; i<3; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/stone.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 720, 10*26+i*26);
	    };
	}
	for (let i=0; i<4; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/stone.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 765+i*45, 312);
	    };
	}
	img[0] = new Image(45, 26);
	img[0].src = "../images/stone.png";
	img[0].onload = function() {
	        context.drawImage(img[0], 900, 286);
	};
	img[1] = new Image(45, 26);
	img[1].src = "../images/stone.png";
	img[1].onload = function() {
	        context.drawImage(img[1], 45*5, 13*26);
	};
	img[2] = new Image(45, 26);
	img[2].src = "../images/stone.png";
	img[2].onload = function() {
	        context.drawImage(img[2], 45*7, 13*26);
	};
	for (let i=0; i<3; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/stone.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 45*5+i*45, 14*26);
	    };
	}
	for (let i=0; i<2; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/stone.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 45*19, 17*26+i*26);
	    };
	}
	for (let i=0; i<2; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/stone.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 45*19+i*45, 20*26);
	    };
	}

	//draw all brick
	global.IMG2=[];
	//1
	for (let i=0; i<7; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=5*45+45*i;
	    IMG2[i].y1=52;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 5*45+45*i, 26*2);
	    };
	}
	//2
	for (let i=7; i<16; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=585+45*(i-7);
	    IMG2[i].y1=26*2;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 585+45*(i-7), 26*2);
	    };
	}
	//3
	for (let i=16; i<18; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=23*45;
	    IMG2[i].y1=26+26*(i-16);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 23*45, 26+26*(i-16));
	    };
	}
	//4
	for (let i=18; i<22; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=25*45+45*(i-18);
	    IMG2[i].y1=26*2;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 25*45+45*(i-18), 26*2);
	    };
	}
	///������������
	//5
	IMG2[22] = new Image(45, 26);
	IMG2[22].src = "../images/brick.png";
	IMG2[22].x1=25*45;
	IMG2[22].y1=26*3;
	IMG2[22].onload = function() {
	        context.drawImage(IMG2[22], 25*45, 26*3);
	};
	//6
	for (let i=23; i<38; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=2*45;
	    IMG2[i].y1=26*4+26*(i-23);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 2*45, 26*4+26*(i-23));
	    };
	}
	//7
	IMG2[38] = new Image(45, 26);
	IMG2[38].src = "../images/brick.png";
	IMG2[38].x1=5*45;
	IMG2[38].y1=26*4;
	IMG2[38].onload = function() {
	        context.drawImage(IMG2[37], 5*45, 26*4);
	};
	//8
	for (let i=39; i<45; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=7*45+45*(i-39);
	    IMG2[i].y1=26*4;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 7*45+45*(i-39), 26*4);
	    };
	}
	//9
	IMG2[45] = new Image(45, 26);
	IMG2[45].src = "../images/brick.png";
	IMG2[45].x1=14*45;
	IMG2[45].y1=26*4;
	IMG2[45].onload = function() {
	    context.drawImage(IMG2[45], 14*45, 26*4);
	};
	//10
	for (let i=46; i<49; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=17*45+45*(i-46);
	    IMG2[i].y1=26*4;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 17*45+45*(i-46), 26*4);
	    };
	}
	IMG2[49] = new Image(45, 26);
	IMG2[49].src = "../images/brick.png";
	IMG2[49].x1=21*45;
	IMG2[49].y1=26*4;
	IMG2[49].onload = function() {
	    context.drawImage(IMG2[49], 21*45, 26*4);
	};

	for (let i=50; i<52; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=23*45+45*(i-50);
	    IMG2[i].y1=26*4;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 23*45+45*(i-50), 26*4);
	    };
	}

	for (let i=52; i<56; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=27*45;
	    IMG2[i].y1=26*3+26*(i-52);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 27*45, 26*3+26*(i-52));
	    };
	}

	IMG2[56] = new Image(45, 26);
	IMG2[56].src = "../images/brick.png";
	IMG2[56].x1=28*45;
	IMG2[56].y1=26*4;
	IMG2[56].onload = function() {
	    context.drawImage(IMG2[56], 28*45, 26*4);
	};

	IMG2[57] = new Image(45, 26);
	IMG2[57].src = "../images/brick.png";
	IMG2[57].x1=20*45;
	IMG2[57].y1=26*5;
	IMG2[57].onload = function() {
	    context.drawImage(IMG2[57], 20*45, 26*5);
	};

	for (let i=58; i<62; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=9*45+45*(i-58);
	    IMG2[i].y1=26*6;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 9*45+45*(i-58), 26*6);
	    };
	}

	for (let i=62; i<66; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=14*45
	    IMG2[i].y1=26*6+26*(i-62);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 14*45, 26*6+26*(i-62));
	    };
	}

	for (let i=66; i<71; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=16*45+45*(i-66);
	    IMG2[i].y1=26*6;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 16*45+45*(i-66), 26*6);
	    };
	}

	IMG2[71] = new Image(45, 26);
	IMG2[71].src = "../images/brick.png";
	IMG2[71].x1=25*45;
	IMG2[71].y1=26*6;
	IMG2[71].onload = function() {
	    context.drawImage(IMG2[71], 25*45, 26*6);
	};
	IMG2[72] = new Image(45, 26);
	IMG2[72].src = "../images/brick.png";
	IMG2[72].x1=5*45;
	IMG2[72].y1=26*7;
	IMG2[72].onload = function() {
	    context.drawImage(IMG2[72], 5*45, 26*7);
	};

	for (let i=73; i<77; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=9*45+45*(i-73);
	    IMG2[i].y1=26*8;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 9*45+45*(i-73), 26*8);
	    };
	}

	for (let i=77; i<82; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=17*45+45*(i-77);
	    IMG2[i].y1=26*8;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 17*45+45*(i-77), 26*8);
	    };
	}
	IMG2[82] = new Image(45, 26);
	IMG2[82].src = "../images/brick.png";
	IMG2[82].x1=23*45;
	IMG2[82].y1=26*8;
	IMG2[82].onload = function() {
	    context.drawImage(IMG2[82], 23*45, 26*8);
	};
	for (let i=83; i<87; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=25*45+45*(i-83);
	    IMG2[i].y1=26*8;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 25*45+45*(i-83), 26*8);
	    };
	}
	for (let i=87; i<91; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=5*45;
	    IMG2[i].y1=26*9+26*(i-87);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 5*45, 26*9+26*(i-87));
	    };
	}
	//stop
	for (let i=91; i<94; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=12*45;
	    IMG2[i].y1=26*9+26*(i-91);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 12*45, 26*9+26*(i-91));
	    };
	}

	for (let i=94; i<97; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=8*45+45*(i-94);
	    IMG2[i].y1=26*10;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 8*45+45*(i-94), 26*10);
	    };
	}
	for (let i=97; i<100; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=19*45+45*(i-97);
	    IMG2[i].y1=26*10;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 19*45+45*(i-97), 26*10);
	    };
	}

	for (let i=100; i<104; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=23*45;
	    IMG2[i].y1=26*10+26*(i-100);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 23*45, 26*10+26*(i-100));
	    };
	}

	for (let i=104; i<106; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=25*45+45*(i-104);
	    IMG2[i].y1=26*10;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 25*45+45*(i-104), 26*10);
	    };
	}
	IMG2[106] = new Image(45, 26);
	IMG2[106].src = "../images/brick.png";
	IMG2[106].x1=10*45;
	IMG2[106].y1=26*11;
	IMG2[106].onload = function() {
	    context.drawImage(IMG2[106], 10*45, 26*11);
	};
	//stop
	for (let i=107; i<110; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=12*45+45*(i-107);
	    IMG2[i].y1=26*11;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 12*45+45*(i-107), 26*11);
	    };
	}
	for (let i=110; i<112; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=25*45+45*(i-110);
	    IMG2[i].y1=26*11;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 25*45+45*(i-110), 26*11);
	    };
	}
	for (let i=112; i<119; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=3*45;
	    IMG2[i].y1=26*12+26*(i-112);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 3*45, 26*12+26*(i-112));
	    };
	}

	IMG2[119] = new Image(45, 26);
	IMG2[119].src = "../images/brick.png";
	IMG2[119].x1=14*45;
	IMG2[119].y1=26*12;
	IMG2[119].onload = function() {
	    context.drawImage(IMG2[119], 14*45, 26*12);
	};

	for (let i=120; i<122; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=22*45;
	    IMG2[i].y1=26*12+26*(i-120);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 22*45, 26*12+26*(i-120));
	    };
	}

	for (let i=122; i<124; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=8*45;
	    IMG2[i].y1=26*13+26*(i-122);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 8*45, 26*13+26*(i-122));
	    };
	}

	for (let i=124; i<126; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=10*45;
	    IMG2[i].y1=26*13+26*(i-124);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 10*45, 26*13+26*(i-124));
	    };
	}

	for (let i=126; i<128; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=12*45;
	    IMG2[i].y1=26*13+26*(i-126);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 12*45, 26*13+26*(i-126));
	    };
	}
	//STOP  
	for (let i=128; i<132; i++) {  //MISTAKE 
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=25*45;
	    IMG2[i].y1=26*13+26*(i-128);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 25*45, 26*13+26*(i-128));
	    };
	}

	for (let i=132; i<136; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=26*45;
	    IMG2[i].y1=26*13+26*(i-132);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 26*45, 26*13+26*(i-132));
	    };
	}

	for (let i=136; i<138; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=13*45+45*(i-136);
	    IMG2[i].y1=26*14;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 13*45+45*(i-136), 26*14);
	    };
	}

	for (let i=138; i<142; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=16*45+45*(i-138);
	    IMG2[i].y1=26*14;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 16*45+45*(i-138), 26*14);
	    };
	}

	IMG2[142] = new Image(45, 26);
	IMG2[142].src = "../images/brick.png";
	IMG2[142].x1=19*45;
	IMG2[142].y1=26*15;
	IMG2[142].onload = function() {
	    context.drawImage(IMG2[142], 19*45, 26*15);
	};

	for (let i=143; i<145; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=22*45+45*(i-143);
	    IMG2[i].y1=26*15;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 22*45+45*(i-143), 26*15);
	    };
	}

	for (let i=145; i<148; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=4*45;
	    IMG2[i].y1=26*16+26*(i-145);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 4*45, 26*16+25*(i-145));
	    };
	}

	IMG2[148] = new Image(45, 26);
	IMG2[148].src = "../images/brick.png";
	IMG2[148].x1=6*45;
	IMG2[148].y1=26*16;
	IMG2[148].onload = function() {
	    context.drawImage(IMG2[148], 6*45, 26*16);
	};

	for (let i=149; i<152; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=8*45+45*(i-149);
	    IMG2[i].y1=26*16;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 8*45+45*(i-149), 26*16);
	    };
	}

	for (let i=152; i<158; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=12*45+45*(i-152);
	    IMG2[i].y1=26*16;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 12*45+45*(i-152), 26*16);
	    };
	}

	for (let i=158; i<160; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=5*45+45*(i-158);
	    IMG2[i].y1=26*18;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 5*45+45*(i-158), 26*18);
	    };
	}

	for (let i=160; i<163; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=8*45+45*(i-160);
	    IMG2[i].y1=26*18;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 8*45+45*(i-160), 26*18);
	    };
	}

	for (let i=163; i<167; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=13*45+45*(i-163);
	    IMG2[i].y1=26*18;
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 13*45+45*(i-163), 26*18);
	    };
	}

	for (let i=167; i<170; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=22*45;
	    IMG2[i].y1=26*17+26*(i-167);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 22*45, 26*17+26*(i-167));
	    };
	}

	for (let i=170; i<172; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=23*45;
	    IMG2[i].y1=26*18+26*(i-170);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 23*45, 26*18+26*(i-170));
	    };
	}

	for (let i=172; i<174; i++) {
	    IMG2[i] = new Image(45, 26);
	    IMG2[i].src = "../images/brick.png";
	    IMG2[i].x1=25*45;
	    IMG2[i].y1=26*18+26*(i-172);
	    IMG2[i].onload = function() {
	        context.drawImage(IMG2[i], 25*45, 26*18+26*(i-172));
	    };
	}

	for (var i=0; i<IMG2.length; i++) {
	    IMG2[i].isNeedToDraw=true;
	    IMG2[i].counting=0;
	    IMG2[i].isBroken=false;  
	}
	//the drawing all ladders
	global.IMG5=[];
	for (let i=0; i<2; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=27*45;
	    IMG5[i].y1=26*i;
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 27*45, 26*i);
	    };
	}

	for (let i=2; i<8; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=4*45;
	    IMG5[i].y1=26*2+26*(i-2);
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 4*45, 26*2+26*(i-2));
	    };
	}

	for (let i=8; i<10; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=24*45;
	    IMG5[i].y1=26*2+26*(i-8);
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 24*45, 26*2+26*(i-8));
	    };
	}

	for (let i=10; i<12; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=20*45;
	    IMG5[i].y1=26*3+26*(i-10);
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 20*45, 26*3+26*(i-10));
	    };
	}

	for (let i=12; i<15; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=26*45;
	    IMG5[i].y1=26*3+26*(i-12);
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 26*45, 26*3+26*(i-12));
	    };
	}

	for (let i=15; i<17; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=16*45;
	    IMG5[i].y1=26*4+26*(i-15);
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 16*45, 26*4+26*(i-15));
	    };
	}

	for (let i=17; i<19; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=21*45;
	    IMG5[i].y1=26*6+26*(i-17);
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 21*45, 26*6+26*(i-17));
	    };
	}

	for (let i=19; i<25; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=7*45;
	    IMG5[i].y1=26*7+26*(i-19);
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 7*45, 26*7+26*(i-19));
	    };
	}

	for (let i=25; i<27; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=16*45;
	    IMG5[i].y1=26*8+26*(i-25);
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 16*45, 26*8+26*(i-25));
	    };
	}

	for (let i=27; i<37; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=27*45;
	    IMG5[i].y1=26*10+26*(i-27);
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 27*45, 26*10+26*(i-27));
	    };
	}

	for (let i=37; i<40; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=9*45;
	    IMG5[i].y1=26*13+26*(i-37);
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 9*45, 26*13+26*(i-37));
	    };
	}

	for (let i=40; i<45; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=7*45;
	    IMG5[i].y1=26*16+26*(i-40);
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 7*45, 26*16+26*(i-40));
	    };
	}

	for (let i=45; i<48; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=20*45;
	    IMG5[i].y1=26*17+26*(i-45);
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 20*45, 26*17+26*(i-45));
	    };
	}

	for (let i=48; i<50; i++) {
	    IMG5[i] = new Image(45, 26);
	    IMG5[i].src = "../images/ladder.png";
	    IMG5[i].x1=12*45;
	    IMG5[i].y1=26*2+26*(i-48);
	    IMG5[i].onload = function() {
	        context.drawImage(IMG5[i], 12*45, 26*2+26*(i-48));
	    };
	}

	//drawing overlaping tiles
	global.IMG4=[];

	IMG4[0] = new Image(45, 26);
	IMG4[0].src = "../images/overlapping.png";
	IMG4[0].x1=3*45;
	IMG4[0].y1=26*3;
	IMG4[0].onload = function() {
	    context.drawImage(IMG4[0], 3*45, 26*3);
	};

	IMG4[1] = new Image(45, 26);
	IMG4[1].src = "../images/overlapping.png";
	IMG4[1].x1=22*45;
	IMG4[1].y1=26*4;
	IMG4[1].onload = function() {
	    context.drawImage(IMG4[1], 22*45, 26*4);
	};

	IMG4[2] = new Image(45, 26);
	IMG4[2].src = "../images/overlapping.png";
	IMG4[2].x1=8*45;
	IMG4[2].y1=26*6;
	IMG4[2].onload = function() {
	    context.drawImage(IMG4[2], 8*45, 26*6);
	};

	IMG4[3] = new Image(45, 26);
	IMG4[3].src = "../images/overlapping.png";
	IMG4[3].x1=13*45;
	IMG4[3].y1=26*6;
	IMG4[3].onload = function() {
	    context.drawImage(IMG4[3], 13*45, 26*6);
	};

	IMG4[4] = new Image(45, 26);
	IMG4[4].src = "../images/overlapping.png";
	IMG4[4].x1=15*45;
	IMG4[4].y1=26*6;
	IMG4[4].onload = function() {
	    context.drawImage(IMG4[4], 15*45, 26*6);
	};

	for (let i=5; i<8; i++) {
	    IMG4[i] = new Image(45, 26);
	    IMG4[i].src = "../images/overlapping.png";
	    IMG4[i].x1=22*45+45*(i-5);
	    IMG4[i].y1=26*6;
	    IMG4[i].onload = function() {
	        context.drawImage(IMG4[i], 22*45+45*(i-5), 26*6);
	    };
	}

	IMG4[8] = new Image(45, 26);
	IMG4[8].src = "../images/overlapping.png";
	IMG4[8].x1=6*45;
	IMG4[8].y1=26*7;
	IMG4[8].onload = function() {
	    context.drawImage(IMG4[8], 6*45, 26*7);
	};

	IMG4[9] = new Image(45, 26);
	IMG4[9].src = "../images/overlapping.png";
	IMG4[9].x1=8*45;
	IMG4[9].y1=26*8;
	IMG4[9].onload = function() {
	    context.drawImage(IMG4[9], 8*45, 26*8);
	};

	IMG4[10] = new Image(45, 26);
	IMG4[10].src = "../images/overlapping.png";
	IMG4[10].x1=22*45;
	IMG4[10].y1=26*8;
	IMG4[10].onload = function() {
	    context.drawImage(IMG4[10], 22*45, 26*8);
	};

	IMG4[11] = new Image(45, 26);
	IMG4[11].src = "../images/overlapping.png";
	IMG4[11].x1=24*45;
	IMG4[11].y1=26*8;
	IMG4[11].onload = function() {
	    context.drawImage(IMG4[11], 24*45, 26*8);
	};

	for (let i=12; i<14; i++) {
	    IMG4[i] = new Image(45, 26);
	    IMG4[i].src = "../images/overlapping.png";
	    IMG4[i].x1=3*45+45*(i-12);
	    IMG4[i].y1=26*9;
	    IMG4[i].onload = function() {
	        context.drawImage(IMG4[i], 3*45+45*(i-12), 26*9);
	    };
	}

	for (let i=14; i<16; i++) {
	    IMG4[i] = new Image(45, 26);
	    IMG4[i].src = "../images/overlapping.png";
	    IMG4[i].x1=17*45+45*(i-14);
	    IMG4[i].y1=26*10;
	    IMG4[i].onload = function() {
	        context.drawImage(IMG4[i], 17*45+45*(i-14), 26*10);
	    };
	}

	IMG4[16] = new Image(45, 26);
	IMG4[16].src = "../images/overlapping.png";
	IMG4[16].x1=22*45;
	IMG4[16].y1=26*10;
	IMG4[16].onload = function() {
	    context.drawImage(IMG4[16], 22*45, 26*10);
	};

	IMG4[17] = new Image(45, 26);
	IMG4[17].src = "../images/overlapping.png";
	IMG4[17].x1=24*45;
	IMG4[17].y1=26*10;
	IMG4[17].onload = function() {
	    context.drawImage(IMG4[17], 24*45, 26*10);
	};

	IMG4[18] = new Image(45, 26);
	IMG4[18].src = "../images/overlapping.png";
	IMG4[18].x1=11*45;
	IMG4[18].y1=26*13;
	IMG4[18].onload = function() {
	    context.drawImage(IMG4[18], 11*45, 26*13);
	};

	IMG4[19] = new Image(45, 26);
	IMG4[19].src = "../images/overlapping.png";
	IMG4[19].x1=24*45;
	IMG4[19].y1=26*13;
	IMG4[19].onload = function() {
	    context.drawImage(IMG4[19], 24*45, 26*13);
	};

	IMG4[20] = new Image(45, 26);
	IMG4[20].src = "../images/overlapping.png";
	IMG4[20].x1=15*45;
	IMG4[20].y1=26*14;
	IMG4[20].onload = function() {
	    context.drawImage(IMG4[20], 15*45, 26*14);
	};

	for (let i=21; i<23; i++) {
	    IMG4[i] = new Image(45, 26);
	    IMG4[i].src = "../images/overlapping.png";
	    IMG4[i].x1=20*45+45*(i-21);
	    IMG4[i].y1=26*15;
	    IMG4[i].onload = function() {
	        context.drawImage(IMG4[i], 20*45+45*(i-21), 26*15);
	    };
	}

	IMG4[23] = new Image(45, 26);
	IMG4[23].src = "../images/overlapping.png";
	IMG4[23].x1=11*45;
	IMG4[23].y1=26*16;
	IMG4[23].onload = function() {
	    context.drawImage(IMG4[23], 11*45, 26*16);
	};

	IMG4[24] = new Image(45, 26);
	IMG4[24].x1=21*45;
	IMG4[24].y1=26*17;
	IMG4[24].src = "../images/overlapping.png";
	IMG4[24].onload = function() {
	    context.drawImage(IMG4[24], 21*45, 26*17);
	};

	for (let i=25; i<27; i++) {
	    IMG4[i] = new Image(45, 26);
	    IMG4[i].src = "../images/overlapping.png";
	    IMG4[i].x1=11*45+45*(i-25);
	    IMG4[i].y1=26*18;
	    IMG4[i].onload = function() {
	        context.drawImage(IMG4[i], 11*45+45*(i-25), 26*18);
	    };
	}

	for (let i=27; i<29; i++) {
	    IMG4[i] = new Image(45, 26);
	    IMG4[i].src = "../images/overlapping.png";
	    IMG4[i].x1=17*45+45*(i-27);
	    IMG4[i].y1=26*18;
	    IMG4[i].onload = function() {
	        context.drawImage(IMG4[i], 17*45+45*(i-27), 26*18);
	    };
	}

	IMG4[29] = new Image(45, 26);
	IMG4[29].src = "../images/overlapping.png";
	IMG4[29].x1=24*45;
	IMG4[29].y1=26*18;
	IMG4[29].onload = function() {
	    context.drawImage(IMG4[29], 24*45, 26*18);
	};

	//drawing water
	for (let i=52; i<55; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/water.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 17*45+45*(i-52), 26*11);
	    };
	}

	img[52] = new Image(45, 26);
	img[52].src = "../images/water.png";
	img[52].onload = function() {
	    context.drawImage(img[53], 6*45, 26*13);
	};

	for (let i=52; i<62; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/water.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 9*45+45*(i-52), 26*20);
	    };
	}

	for (let i=52; i<56; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/water.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 21*45+45*(i-52), 26*20);
	    };
	}

	for (let i=52; i<68; i++) {
	    img[i] = new Image(45, 26);
	    img[i].src = "../images/water.png";
	    img[i].onload = function() {
	        context.drawImage(img[i], 9*45+45*(i-52), 26*21);
	    };
	}

	//drawing door
	global.IMG1 = new Image(45, 26);
	IMG1.src = "../images/ClosedDoor.png";
	IMG1.x1=25*45;
	IMG1.y1=26;
	IMG1.onload = function() {
	    context.drawImage(IMG1, 25*45, 26);
	};

	//drawing the chests of drayers with tressures
	global.IMG3=[];

	IMG3[0] = new Image(45, 26);
	IMG3[0].src = "../images/klad.png";
	IMG3[0].x1=20*45;
	IMG3[0].y1=26;
	IMG3[0].onload = function() {
	    context.drawImage(IMG3[0], 20*45, 26);
	};

	IMG3[1] = new Image(45, 26);
	IMG3[1].src = "../images/klad.png";
	IMG3[1].x1=2*45;
	IMG3[1].y1=26*3;
	IMG3[1].onload = function() {
	    context.drawImage(IMG3[1], 2*45, 26*3);
	};

	IMG3[2] = new Image(45, 26);
	IMG3[2].src = "../images/klad.png";
	IMG3[2].x1=10*45;
	IMG3[2].y1=26*3;
	IMG3[2].onload = function() {
	    context.drawImage(IMG3[2], 10*45, 26*3);
	};

	IMG3[3] = new Image(45, 26);
	IMG3[3].src = "../images/klad.png";
	IMG3[3].x1=28*45;
	IMG3[3].y1=26*3;
	IMG3[3].onload = function() {
	    context.drawImage(IMG3[3], 28*45, 26*3);
	};

	IMG3[4] = new Image(45, 26);
	IMG3[4].src = "../images/klad.png";
	IMG3[4].x1=10*45;
	IMG3[4].y1=26*9;
	IMG3[4].onload = function() {
	    context.drawImage(IMG3[4], 10*45, 26*9);
	};

	IMG3[5] = new Image(45, 26);
	IMG3[5].src = "../images/klad.png";
	IMG3[5].x1=3*45;
	IMG3[5].y1=26*11;
	IMG3[5].onload = function() {
	    context.drawImage(IMG3[5], 3*45, 26*11);
	};

	IMG3[6] = new Image(45, 26);
	IMG3[6].src = "../images/klad.png";
	IMG3[6].x1=22*45;
	IMG3[6].y1=26*11;
	IMG3[6].onload = function() {
	    context.drawImage(IMG3[6], 22*45, 26*11);
	};

	IMG3[7] = new Image(45, 26);
	IMG3[7].src = "../images/klad.png";
	IMG3[7].x1=4*45;
	IMG3[7].y1=26*15;
	IMG3[7].onload = function() {
	    context.drawImage(IMG3[7], 4*45, 26*15);
	};

	IMG3[8] = new Image(45, 26);
	IMG3[8].src = "../images/klad.png";
	IMG3[8].x1=14*45;
	IMG3[8].y1=26*17;
	IMG3[8].onload = function() {
	    context.drawImage(IMG3[8], 14*45, 26*17);
	};

	IMG3[9] = new Image(45, 26);
	IMG3[9].src = "../images/klad.png";
	IMG3[9].x1=19*45;
	IMG3[9].y1=26*19;
	IMG3[9].onload = function() {
	    context.drawImage(IMG3[9], 19*45, 26*19);
	};

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

	for (var i=0; i<IMG3.length; i++) {
	    IMG3[i].isNeedToDraw=true;
	}



	global.closure=__webpack_require__(1);
	global.persons=closure();
	new persons(50, 182, "../images/stand_man.png", 630, 34, "../images/monster.png");
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