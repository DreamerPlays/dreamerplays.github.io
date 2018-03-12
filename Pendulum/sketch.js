function setup() {
	createCanvas(600, 600);
	frameRate(framerate);

	Slider1 = createSlider(50,575,500,1);
	Slider1.position(0,0);
	Slider2 = createSlider(5,20,10,1);
	Slider2.position(0,30);
	Slider3 = createSlider(3.5,14,9.81,0.1);
	Slider3.position(0,60);
}

var Slider1;
var Slider2;
var Slider3;

//do not change these
var conter = 0;
var pos;
var angle;
//do not change these

//changable variables
var LengthInP = 500; // length of rope in mm
var StartAngle = 10;      // the start angle
var gravity = 9.81; // the gravity vector in m/s²
var framerate = 200;
//changable variables

function draw() {
	LengthInP = Slider1.value();
	StartAngle = Slider2.value();
	gravity = Slider3.value();
	//----------------
	  background(51);
	  translate(width/2, 0);
	  stroke(244, 188, 66);
	  strokeWeight(3);
	  //----------------

	  //calculate new position
	  angle = StartAngle*cos(sqrt(gravity/(LengthInP/1000))*(conter/framerate));
	  pos = new p5.Vector(sin(radians(angle))*LengthInP, cos(radians(angle))*LengthInP);
	  //calculate new position

	  //draw
	  line(pos.x, pos.y, 0, 0);
	  strokeWeight(20);
	  stroke(255);
	  point(pos.x, pos.y);
	  //draw


	  //count the frames
	  conter++;
	  //count the frames
}
