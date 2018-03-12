function setup() {
	createCanvas(1000, 1000);
	frameRate(framerate);
}

function draw() {
	background(51);
	  translate(width/2, height/2);
	  var w = sqrt(d/m);
	  var aHeight = _y * sin(w*(t/framerate));

	  stroke(255);
	  strokeWeight(5);

	  var r = map(aHeight, _y*-1, _y*1, 0, 255);

	  stroke(r, 0, 0);
	  line(0, -FeatherMinLength, 0, aHeight);

	  stroke(255);
	  line(-100, -FeatherMinLength, 100, -FeatherMinLength);


	  strokeWeight(20);

	  point(0, aHeight);

	  t++;
}

var t = 0;
var framerate = 60;

var m = 5;                      //in kg
var d = 20;                     //in N/m
var _y = 50;                    //in cm
var FeatherMinLength = 200;     //in cm
