//canvas size
let x = 400;
function setup() {
  createCanvas(400, 400);
  
}

//background
function draw() {
  background(59,55,104);
  
  //ground
  fill(103,150,75)
  strokeWeight(0)
  rect(0,300,400,100);
  
  //moon
  fill(184,197,214)
  ellipse(x,30,60,60)
  //animation
  x = x -1;
  console.log(x)
  if (x <=1)
    {
      x = 400;
    }

  //stars
  fill (255,242,32)
  circle(50, 50, 5);
  circle(73, 90, 5);
  circle(90, 15, 5);
  circle(49, 286, 5);
  circle(67, 156, 5);
  circle(87, 200, 5);
  circle(200, 20, 5);
  circle(245, 100, 5);
  circle(300, 150, 5);
  circle(360, 175, 5);
  circle(350, 250, 5);
  circle(350,100, 5);
  circle(160, 290, 5);
  
  
  //body
  strokeWeight(3)
  fill(255)
  ellipse(200,150,60,60)
  fill (255,0,0)
  ellipse(190,145,10)
  ellipse(210,145,10)

  fill(168, 50, 50)
  rect(170,180,60,70,10)
  line(168,195, 150,250)
  line(255,250,230,194)
  line(185,330,185,250)
  line(215,250,215,330)
 
  
  
  
  //clouds
  //strokeWeight(1)
  //fill (243, 238, 225)
  //ellipse(150, 80, 150, 40);
 // ellipse(300, 110, 150, 40);
 // ellipse(80, 115, 150, 40);
  
  
}