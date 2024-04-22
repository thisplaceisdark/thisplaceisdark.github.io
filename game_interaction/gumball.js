var ballx = 300;
var bally = 300;
var ballSize = 100;
var score =0;
var gameState= "L1";
let bg;

function preload() {
  bg = loadImage('balls.png'); 
}

function setup() {
  createCanvas(837, 1047);
  textAlign(RIGHT);
  textSize(50);
  
    r = random(255);
    g = random(255);
    b = random(255);
    
} // end setup


function draw() {
  background(bg);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  
  text(("Score: " + score), -176, 140, width/2);
  

} // end draw


function levelOne(){
  text("Level 1", -200, 190, width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  fill(r, g, b);
  ellipse(ballx, bally, ballSize, ballSize);
  
} // end level one

function levelTwo(){
  background(bg);
  text("Level 2", -200, 190, width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  fill(r, g, b);
  ellipse(ballx, bally, ballSize, ballSize);
  
} // end level two

function levelThree(){
  background(bg);
  text("Level 3", -200, 190, width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>15){
// level 4
//   gameState = "L4";
   

  }
  
  //line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level three
