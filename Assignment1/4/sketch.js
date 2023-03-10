function setup() {
  createCanvas(500, 500);
  frameRate(240);
}

function draw() {
  background(0,0,125);
  
  fill(0,150,0);
  circle(250,250,250);
  
  strokeWeight(6);
  stroke(255);
  
  beginShape();
  
  fill(255,0,0);

  
  vertex(250,125); // top mid point
  vertex(220,205); // left top chasm
  vertex(135,205); // mid left point
  vertex(200,255); // left bot chasm
  vertex(170,345); // left bot point 
  vertex(250,295); // bot chasm
  vertex(330,345); // right bot point
  vertex(300,255); // right bot chasm
  vertex(365,205); // right point
  vertex(280,205); // right top chasm
  

  
  endShape(CLOSE);
  

  //text(mouseX + ", " + mouseY, mouseX, mouseY);  // coorentdates for vertex mapping
}