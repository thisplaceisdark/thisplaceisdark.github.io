var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
let bg;
let y = 0;
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('joe.png');
  img2 = loadImage('pancake.png');
  img3 = loadImage('sprinkles.png');
  img4 = loadImage('strawberry.png');
  img5 = loadImage('splooge.png');
  img6 = loadImage('whip.png');
  img7 = loadImage('butta.png');
  img8 = loadImage('eye.png');
  img9 = loadImage('head.png');
  img0 = loadImage('dillo.png');
  img1 = loadImage('powder.png');
  bg = loadImage('cookingbgbigger.png');
}

function setup() {
// bg = loadImage('cookingbgbigger.png');
createCanvas(1060, 789);  // canvas size
  background(bg);
  

}

function draw() {

  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function
  
      // BRUSH CODE IS BELOW
 // make testbox do something!

//pancake
 if (toolChoice == '1' ) {  // first tool
    image(img2, mouseX-192, mouseY-87, 384, 174);
    
//sprinkles 
  } else if (toolChoice == '2') { // second tool
    image(img3, mouseX-55, mouseY-40, 110, 80);
    
//strawberry
  } else if (toolChoice == '3') { // third tool
    image(img4, mouseX-48, mouseY-53, 97, 107);
    
// "icing"
  } else if (toolChoice == '4') {
    image(img5, mouseX-137, mouseY-94, 275, 189);
    
//whipped cream
  } else if (key == '5') { // this tool calls a function
    image(img6, mouseX-59, mouseY-61, 97, 102);
    
//butter  
  } else if (toolChoice == '6') {
    image(img7, mouseX-70, mouseY-46, 140, 89);
    
//powdered sugar
  } else if (toolChoice == '7') {
    image(img1, mouseX-34, mouseY-29, 68, 58);
    
// "syrup"
  } else if (toolChoice == '8') {
    image(img, mouseX-137, mouseY-65, 274, 130);
    
//eyeball
  } else if (toolChoice == '9') {
    image(img8, mouseX-63, mouseY-50, 125, 101);
    
//hand
  } else if (toolChoice == '0') {
    image(img9, mouseX-331, mouseY-342, 663, 684);
   
  } else if (toolChoice == '-' || toolChoice == '_') { // g places the image we pre-loaded
   image(img0, mouseX-55, mouseY-180, 222, 360);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
