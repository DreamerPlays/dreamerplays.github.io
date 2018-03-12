var list = [];

function setup() {
	createCanvas(1000, 1000);
	background(51);

	declareArray();
	shuffleArray(list);
	drawArray(list);
}

function draw() {

}


function declareArray(){
  for(var i = 0; i < 100; i++){
    list[i] = (i+1)*10;
  }
}

function drawArray(array){
  var x = 0;
  for(var i = 0; i < array.length;i++){
    rect(x,height,10,-array[i]);
    x += 10;
  }
}

function mouseClicked(){
 background(51);
 Sort(list);
 drawArray(list);
}

function keyPressed(){
  background(51);
  shuffleArray(list);
  drawArray(list);
}


function Sort(array){
  for(var i = 1; i < array.length-1;i++){
  if(array[i]> array[i+1]){
    var temp = array[i];
    array[i] = array[i+1];
    array[i+1] = temp;
  }

  if(array[i]< array[i-1]){
    var temp = array[i];
    array[i] = array[i-1];
    array[i-1] = temp;
  }
  }

  if(!checkIfRightSorted(array,0)){
   Sort(array);
  }

}


function checkIfRightSorted(array,pos){

  if(array[pos] == max(array) && pos == array.length-1){
      return true;
  }
  if(array[pos] > array[pos+1]){
    return false;
  }
  if(checkIfRightSorted(array,pos+1) == true){
    return true;
  }

  return false;

}


function shuffleArray(array) {


  for (var i = array.length; i > 1; i--) {

    var j = int(random(i));
		console.log(j);

    var tmp = array[j];
    array[j] = array[i-1];
    array[i-1] = tmp;
  }
}
