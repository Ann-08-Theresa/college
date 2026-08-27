function setup() 
{
  createCanvas(600, 600);
}

function draw() 
{
  background(252, 229, 154);
  fill(178, 34, 34);
  translate(width/2,height/2);
  noStroke();
  circle(0,0,455);
  //to add texture and color gradient?(orange)
  for(h=0;h<360;h++) 
  {
    rotate(35);
    fill(255, 117, 24);
    circle(0,210,20);
    fill(255, 140, 0);
    circle(0,200,20);
    fill(255, 165, 0);
    circle(0,190,20);
  }
  for(i=0;i<12;i++)
  {
    rotate(122);
    fill(178, 34, 34);
    square(0,0,156);
    fill(204,85,0);
    square(0,0,146);
  }
  
  fill(255, 196, 0);
  circle(0,0,360);
  //green dot
  for(y=0;y<12;y++)
  {
    rotate(122);
    fill(47, 112, 36);
    circle(95,155,11)
  }
  //to add texture again(yellow)
  for(j=0;j<360;j++)
  {
    rotate(30);
    fill(255, 224, 0);
    circle(0,163,20);
    fill(255, 248, 0);
    circle(0,153,20);
    fill(255, 255, 255);
    circle(0,143,20);
  }
  for(k=0;k<12;k++)
  {
    rotate(122);
    fill(253, 108, 158);
    ellipse(10,50,77,255);
    fill(255, 182, 193);
    ellipse(10,50,60,240);
    fill(255, 192, 203);
    ellipse(10,50,50,220);
    fill(255, 228, 225);
    ellipse(10,50,40,200);
  }
  fill(67, 42, 90);
  circle(0,0,267);
  for(x=0;x<12;x++)
  {
    rotate(122);
    fill(68, 155, 53);
    circle(45,125,11)
  }
  //third layer of texture
  for(h=0;h<47;h++) 
  {
    rotate(25);
    fill(93, 57, 125);
    circle(0,110,20);
    fill(122, 85, 156);
    circle(0,100,20);
    fill(160, 124, 191);
    circle(0,90,20);
  }
  for(i=0;i<12;i++)
  {
    rotate(122);
    fill(33, 68, 110);
    square(0,0,85);
    fill(101, 131, 168);
    square(0,0,77);
  }
  fill(178, 34, 34)
  circle(0,0,185)
  for(y=0;y<12;y++)
  {
    rotate(122);
    fill(47, 112, 36);
    circle(93,3,11)
  }
  for(h=0;h<47;h++) 
  {
    rotate(100);
    fill(255, 117, 24);
    circle(0,75,20);
    fill(255, 140, 0);
    circle(0,65,20);
    fill(255, 165, 0);
    circle(0,55,20);
    fill(255, 196, 0);
    circle(0,45,20);
    fill(255, 224, 0);
    circle(0,35,20);
    fill(255, 248, 0);
    circle(0,25,20);
    fill(253, 253, 119);
    circle(0,15,20)
  }
  fill(255, 255, 255);
  circle(0,0,20)
  
  
}
