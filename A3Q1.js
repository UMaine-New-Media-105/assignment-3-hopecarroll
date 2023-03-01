function setup() {
  // Set up the canvas.
  createCanvas(400, 400);
  angleMode(DEGREES); // Use this to create shapes with arcs and degrees.
}

function draw() {
  // BACKGROUND
  // Draw the background color and any other shapes that don't change.
  background("black");
  
  // ADD CATCHER
  // Add your catcher by calling its function with appropriate parameters.
  fill("greenyellow");
  alienSprite();
  
}

// CATCHER
// Add a function here to build your "catcher" from shapes.
// This function can include parameters that tell it where to sit
// as well as conditions that change its appearance.
function alienSprite(x,y,size){
  translate (x,y);
  scale(size);
  //alienhead
  noStroke();
  ellipse(50,350,50,50); 
  //alienears
  stroke("yellowgreen");
  strokeWeight(10);
  line(40,325,30,315);
  ellipse(30,315,5)
  line(60,325,70,315);
  ellipse(70,315,5);
  noStroke();
  //alieneyes
  fill("black");
  ellipse(35,350,20,10);
  ellipse(65,350,20,10);
  fill("black");
  //alienmouth
  arc(50, 360, 30, 10, 360, 180);
  //alienbody
  fill('yellowgreen');
  rect(42,375,15,25);
  stroke("yellowgreen");
  strokeWeight(5);
  line(45,390,15,355);
  line(55,390,85,350);
}
