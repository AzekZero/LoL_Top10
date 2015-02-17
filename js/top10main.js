// Azek's Test Page! 
var image_switch = [];







var sidebar_b1 = document.getElementById('sm_button1');
var sidebar_b2 = document.getElementById("sm_button2");
var sidebar_b3 = document.getElementById("sm_button3");
var sidebar_b4 = document.getElementById("sm_button4");
var sidebar_b5 = document.getElementById("sm_button5");
var sidebar_b6 = document.getElementById("sm_button6");
var sidebar_b7 = document.getElementById("sm_button7");
var sidebar_b8 = document.getElementById("sm_button8");

var infobar_b0 =  document.getElementById("main_r1c0");
var infobar_b1 =  document.getElementById("main_r3c0");
var infobar_b2 =  document.getElementById("main_r5c0");
var infobar_b3 =  document.getElementById("main_r7c0");
var infobar_b4 =  document.getElementById("main_r9c0");
var infobar_b5 =  document.getElementById("main_r11c0");
var infobar_b6 =  document.getElementById("main_r13c0");
var infobar_b7 =  document.getElementById("main_r15c0");
var infobar_b8 =  document.getElementById("main_r17c0");
var infobar_b9 =  document.getElementById("main_r19c0");

var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();
var img6 = new Image();
var img7 = new Image();
var img8 = new Image();
var img9 = new Image();
var img10 = new Image();
var imgloc0= document.getElementById("main_r2c1");
var imgloc1= document.getElementById("main_r4c1");
var imgloc2= document.getElementById("main_r6c1");
var imgloc3= document.getElementById("main_r8c1");
var imgloc4= document.getElementById("main_r10c1");
var imgloc5= document.getElementById("main_r12c1");
var imgloc6= document.getElementById("main_r14c1");
var imgloc7= document.getElementById("main_r16c1");
var imgloc8= document.getElementById("main_r18c1");
var imgloc9= document.getElementById("main_r20c1");
img1.style.height = '80px';
img1.style.width = '180px';

infobar_b0.onclick = function() {
	if (imgloc0.style.display == 'inline-block') {
		imgloc0.style.display = 'none';
        }
        else {
	imgloc0.style.display = 'inline-block';
	imgloc1.style.display = 'none';
	imgloc2.style.display = 'none';
	imgloc3.style.display = 'none';
	imgloc4.style.display = 'none';
	imgloc5.style.display = 'none';
	imgloc6.style.display = 'none';
	imgloc7.style.display = 'none';
	imgloc8.style.display = 'none';
	imgloc9.style.display = 'none';
	}
};
infobar_b1.onclick = function() {
	if (imgloc1.style.display == 'inline-block') {
		imgloc1.style.display = 'none';
        }
        else {
	imgloc0.style.display = 'none';
	imgloc1.style.display = 'inline-block';
	imgloc2.style.display = 'none';
	imgloc3.style.display = 'none';
	imgloc4.style.display = 'none';
	imgloc5.style.display = 'none';
	imgloc6.style.display = 'none';
	imgloc7.style.display = 'none';
	imgloc8.style.display = 'none';
	imgloc9.style.display = 'none';
	}
};
infobar_b2.onclick = function() {
	if (imgloc2.style.display == 'inline-block') {
		imgloc2.style.display = 'none';
        }
        else {
	imgloc0.style.display = 'none';
	imgloc1.style.display = 'none';
	imgloc2.style.display = 'inline-block';
	imgloc3.style.display = 'none';
	imgloc4.style.display = 'none';
	imgloc5.style.display = 'none';
	imgloc6.style.display = 'none';
	imgloc7.style.display = 'none';
	imgloc8.style.display = 'none';
	imgloc9.style.display = 'none';
	}
};
infobar_b3.onclick = function() {
	if (imgloc3.style.display == 'inline-block') {
		imgloc3.style.display = 'none';
        }
        else {
	imgloc0.style.display = 'none';
	imgloc1.style.display = 'none';
	imgloc2.style.display = 'none';
	imgloc3.style.display = 'inline-block';
	imgloc4.style.display = 'none';
	imgloc5.style.display = 'none';
	imgloc6.style.display = 'none';
	imgloc7.style.display = 'none';
	imgloc8.style.display = 'none';
	imgloc9.style.display = 'none';
	}
};
infobar_b4.onclick = function() {
	if (imgloc4.style.display == 'inline-block') {
		imgloc4.style.display = 'none';
        }
        else {
	imgloc0.style.display = 'none';
	imgloc1.style.display = 'none';
	imgloc2.style.display = 'none';
	imgloc3.style.display = 'none';
	imgloc4.style.display = 'inline-block';
	imgloc5.style.display = 'none';
	imgloc6.style.display = 'none';
	imgloc7.style.display = 'none';
	imgloc8.style.display = 'none';
	imgloc9.style.display = 'none';
	}
};
infobar_b5.onclick = function() {
	if (imgloc5.style.display == 'inline-block') {
		imgloc5.style.display = 'none';
        }
        else {
	imgloc0.style.display = 'none';
	imgloc1.style.display = 'none';
	imgloc2.style.display = 'none';
	imgloc3.style.display = 'none';
	imgloc4.style.display = 'none';
	imgloc5.style.display = 'inline-block';
	imgloc6.style.display = 'none';
	imgloc7.style.display = 'none';
	imgloc8.style.display = 'none';
	imgloc9.style.display = 'none';
	}
};
infobar_b6.onclick = function() {
	if (imgloc6.style.display == 'inline-block') {
		imgloc6.style.display = 'none';
        }
        else {
	imgloc0.style.display = 'none';
	imgloc1.style.display = 'none';
	imgloc2.style.display = 'none';
	imgloc3.style.display = 'none';
	imgloc4.style.display = 'none';
	imgloc5.style.display = 'none';
	imgloc6.style.display = 'inline-block';
	imgloc7.style.display = 'none';
	imgloc8.style.display = 'none';
	imgloc9.style.display = 'none';
	}
};
infobar_b7.onclick = function() {
	if (imgloc7.style.display == 'inline-block') {
		imgloc7.style.display = 'none';
        }
        else {
	imgloc0.style.display = 'none';
	imgloc1.style.display = 'none';
	imgloc2.style.display = 'none';
	imgloc3.style.display = 'none';
	imgloc4.style.display = 'none';
	imgloc5.style.display = 'none';
	imgloc6.style.display = 'none';
	imgloc7.style.display = 'inline-block';
	imgloc8.style.display = 'none';
	imgloc9.style.display = 'none';
	}
};
infobar_b8.onclick = function() {
	if (imgloc8.style.display == 'inline-block') {
		imgloc8.style.display = 'none';
        }
        else {
	imgloc0.style.display = 'none';
	imgloc1.style.display = 'none';
	imgloc2.style.display = 'none';
	imgloc3.style.display = 'none';
	imgloc4.style.display = 'none';
	imgloc5.style.display = 'none';
	imgloc6.style.display = 'none';
	imgloc7.style.display = 'none';
	imgloc8.style.display = 'inline-block';
	imgloc9.style.display = 'none';
	}
};
infobar_b9.onclick = function() {
	if (imgloc9.style.display == 'inline-block') {
		imgloc9.style.display = 'none';
        }
        else {
	imgloc0.style.display = 'none';
	imgloc1.style.display = 'none';
	imgloc2.style.display = 'none';
	imgloc3.style.display = 'none';
	imgloc4.style.display = 'none';
	imgloc5.style.display = 'none';
	imgloc6.style.display = 'none';
	imgloc7.style.display = 'none';
	imgloc8.style.display = 'none';
	imgloc9.style.display = 'inline-block';
	}
};


/*
sidebar_b1.onClick = function {
sidebar_b1.appendChild(img1);
};

img1.src = 'https://dl.dropboxusercontent.com/s/dwcvptvl926jerr/eu_gambit2.png?dl=0';
*/

/*
img1.onload = function() {
sidebar_b1.appendChild(img1);
};
img1.src = 'https://dl.dropboxusercontent.com/s/dwcvptvl926jerr/eu_gambit2.png?dl=0';
*/

/*
img1.src = 'https://dl.dropboxusercontent.com/s/dwcvptvl926jerr/eu_gambit2.png?dl=0';

sidebar_b1.onclick = function() {
img1.onload = function() {
sidebar_b1.appendChild(img1);
};

}
*/
