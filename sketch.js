let paths = []; 

let painting = false;

let next = 0; 

let current; 

let previous; 

var mode  = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();
}

function draw() {
  if (mouseIsPressed == true) {
    mode = 1; 
  }
  if(mode == 1) {
    splash.hide();
    background(220);
  }
}