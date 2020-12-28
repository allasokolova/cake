var imgsrc = "slide/images/icon/snow.gif";
var height = document.body.scrollHeight;
if (height<document.body.clientHeight) height = document.body.clientHeight;
var width = document.body.scrollWidth;
var col = Math.round(height/100); //количество снежинок
var amp = new Array();
var x_pos = new Array();
var y_pos = new Array();
var stx = new Array();
var sty = new Array();
var deltax = new Array();
var obj = new Array();
for (i=0; i<col; ++i) {
amp[i] = Math.random()*19;
x_pos[i] = Math.random()*(width-amp[i]-29);
y_pos[i] = Math.random()*height;
stx[i] = 0.03 + Math.random()*0.25;
sty[i] = 2 + Math.random();
deltax[i] = 0;
document.write("<img id=\"sn"+ i +"\" style=\"position: absolute; " + "z-index: 50; top: -50px; left: -50px;\" src='" + imgsrc + "'>");
obj[i] = document.getElementById("sn" + i);
}
function flake() {
for (i=0; i<col; ++i) {
y_pos[i] += sty[i];
if (y_pos[i]>height-49) {
x_pos[i] = Math.random()*(width-amp[i]-29);
y_pos[i] = 0;
}
deltax[i] += stx[i];
obj[i].style.top = y_pos[i] + "px";
obj[i].style.left = x_pos[i] + amp[i]*Math.sin(deltax[i]) + "px";
}
setTimeout("flake()", 60);
}
flake();