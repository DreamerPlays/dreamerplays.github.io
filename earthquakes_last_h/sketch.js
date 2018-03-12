var _map;
var _data;
var clat = 0; //lat = y
var clon = 0; //lon = x
var lat = 48.137154;
var lon = 11.576124;
var cx;
var cy;
var counter = 0;

function preload(){
  _map = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1280x720?access_token=pk.eyJ1IjoiZHJlYW1lcnBsYXlzIiwiYSI6ImNqN3l2czk3czd1bGwycW5wZzV2Zjl4MTMifQ.SFTTJ_PQ375ZAK3ZonNjPQ.png");
  _data = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv");
}


function setup() {
  imageMode(CENTER);
  frameRate(1);
  createCanvas(1280,720);

  cx = mercX(clon);
  cy = mercY(clat);
}



function draw() {
  if(counter%15 == 0){
    translate(width/2,height/2);
    image(_map,0,0);
    scale(1.25);
    fill(255,0,255);
    for (var i = 1; i < _data.length; i++) {
      ellipse(mercX(_data[i].split(',')[2]) - cx,mercY(_data[i].split(',')[1]) - cy, _data[i].split(',')[4]*3);
    }
    ellipse(400,260,1*3);
    ellipse(420,260,2*3);
    ellipse(440,260,3*3);
    ellipse(460,260,4*3);
    ellipse(480,260,5*3);
    ellipse(500,260,6*3);
    print("reloaded");
    _data = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv");
  }
  counter++;
}



function mercX(lon) {
  return (256/PI)*pow(2, 1)*(radians(lon)+PI);
}

function mercY(lat) {
  return ((256/PI)*pow(2,1))*(PI-log(tan(PI/4 + radians(lat)/2)));
}
