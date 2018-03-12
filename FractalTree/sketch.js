var slider;
var angle = 0;

function setup() {
	createCanvas(1000, 1000);
	slider = createSlider(0, 2*PI, PI,0.01);
	slider.position(0,0);
}

function draw(){
	angle = slider.value()/10;

	background(51);
	stroke(255);
	translate(width/2, height);
	branch(300);
}



function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 3) {
    push();
    rotate(angle);
    branch(len*0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
