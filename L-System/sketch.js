var sentence = "F";
var angle;
var len = 200;

function setup() {
	createCanvas(1000, 1000);
	angle = radians(25);
  translate(width/2,height);
  console.log(sentence);
  turtle();




}

function draw() {

}

function generate() {
  var nextSentence = "";

  for(var i = 0; i < sentence.length;i++){
    switch (split(sentence,"")[i]) {
    case 'F':
      nextSentence += "FF+[+F-F-F]-[-F+F+F]";
      break;

    default:
      nextSentence += split(sentence,"")[i];
      break;
    }
  }

  sentence = nextSentence;
}


function turtle(){
  background(51);
  resetMatrix();
  stroke(255, 100);
  translate(width/2,height);
  for(var i = 0; i < sentence.length;i++){
    switch (split(sentence,"")[i]) {

    case 'F':
      line(0,0,0,-len);
      translate(0, -len);
      break;

    case '+':
      rotate(angle);
      break;

    case '-':
      rotate(-angle);
      break;

    case '[':
      push();
      break;

    case ']':
      pop();
      break;


    }
  }
  len = len*0.5;
}


function mousePressed(){
  generate();
  console.log(sentence);
  turtle();
}
