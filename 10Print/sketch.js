var x = 0;
var y = 0;
var spacing = 10;


function setup() {
	createCanvas(1000, 1000);
	background(51);

	stroke(255);
  strokeWeight(2);

	for (let i = 0; i < (1000*1000)/10; i++) {

	 if (random(1)<0.5) {
		 line(x, y, x+spacing, y+spacing);
	 } else {
		 line(x, y+spacing, x+spacing, y);
	 }
	 x+=spacing;
	 if (x > width) {
		 x = 0;
		 y+=spacing;
	 }
 }
}

function draw() {

}
