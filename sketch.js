var iss, spacecraft;
var hasDocked = false;

function preload(){
  
  backgroundImg = loadImage("Docking-undocking/spacebg.jpg");
  issImg = loadImage("Docking-undocking/iss.png");
  spaceImg1 = loadImage("Docking-undocking/spacecraft1.png");
  spaceImg2 = loadImage("Docking-undocking/spacecraft2.png");
  spaceImg3 = loadImage("Docking-undocking/spacecraft3.png");
  spaceImg4 = loadImage("Docking-undocking/spacecraft4.png");
  
}

function setup() {
  createCanvas(800,400);

  iss=createSprite(330, 130);
  iss.addImage(issImg);
  iss.scale=0.25;
  iss.setCollider("rectangle",0,0,80,90);

  spacecraft = createSprite(285,240);
  spacecraft.addImage(spaceImg1);
  spacecraft.scale = 0.15;
  spacecraft.setCollider("rectangle",0,0,300,500);

  spacecraft.debug=true;
  iss.debug=true;
}

function draw() {
  background(backgroundImg); 
  console.log(hasDocked);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y-2;
      console.log("hi");
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spaceImg1);
      spacecraft.y = spacecraft.y+2;
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spaceImg3);
      spacecraft.x = spacecraft.x-2;
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spaceImg2);
      spacecraft.x = spacecraft.x+2;
    }
  }

  if(iss.isTouching(spacecraft)){
    hasDocked = true;
    fill ("white");
    text ("Docking Successful!",300,300);
    
  }
  drawSprites();
}

function isColliding(iss,spacecraft){
  if(iss.x-spacecraft.x<iss.width/2+spacecraft.width/2 && 
    spacecraft.x-iss.x<iss.width/2+spacecraft.width/2 && 
    iss.y-spacecraft.y<iss.height/2+spacecraft.height/2 &&
    spacecraft.y-iss.y<iss.height/2+spacecraft.height/2){
      return true;
    } else{
      return false;
    }
  }