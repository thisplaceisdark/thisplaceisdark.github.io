function setup() {
createCanvas(600,600);
background(255);
line(0,0, width, height); 
}


function draw() {
  background(5); //grayscale bg
  
  // syntax: (x, y, s) 
  // s is size of the square
  
  fill(199, 199, 199); //skin color
  square(40, 25, 500); //face
  
   fill(255, 255, 255); //eyes
  square(40, 130, 150);
    square(300, 130, 150); 

       fill(61, 61, 61); //pupils
         square(40, 130, 100);
                  square(300, 130, 100);
                  
       fill(700) //highlights
       square(40, 130, 20);
       square(300, 130, 20);
                  
       fill(61, 61, 61); //hair
       rect(40, 25, 500, 50) 
       rect(480, 75, 60, 50)
       
       // x, y, s
fill(61, 61, 61) //smile
  square(100, 350, 30);
  rect(130, 380, 230, 30);
  square(360, 350, 30);

fill(61, 61, 61) //shirt
   rect(0, 525, 600, 300);

}
