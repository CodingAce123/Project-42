//Made By Aaryan Bizoara
//----->>STEP-1>>-----
//---DEFINING ALL THE VARIABLES---

//---Defining Background and Background Image---
var background,background_img;

//---Defining International Space Staton and International Space Station Image---
var iss,iss_img;

//---Defining Spacecraft and Spacecraft Image---
var Spacecraft,Spacecraft_img

//---Animation For Spacecraft Moving Up,Down,Left,Right---
var Spacecraft_Up,Spacecraft_Down,Spacecraft_Left,Spacecraft_Right;

//---Defining Down Arrow,Left Arrow,Right Arrow---
var Arrow_1,Arrow_2,Arrow_3

//---Defining Down Arrow Image,Left Arrow Image,Right Arrow Image---
var Arrow1_img,Arrow2_img,Arrow3_img

//---Defining Score---
var score = 0

//---Defining Docking as False---
var hasDocked = false; 

//---Defining A Collider
var collider;

function preload(){
//----->>STEP-2<<-----
//---LOADING ALL THE IMAGES AND SOUNDS INTO VARIABLES---

//---Loading Background Image---
 background_img = loadImage("Images/spacebg.jpg");

//---Loading International Space Station Image---
 iss_img = loadImage("Images/iss.png");

 //---Loading Spacecraft Animation---
 Spacecraft_img = loadAnimation("Images/spacecraft1.png");

//---Loading Animation Of The Spacecraft For Up,Down,Left,Right---
 Spacecraft_Up = loadAnimation("Images/spacecraft2.png","Images/spacecraft2.png");
 Spacecraft_Down = loadAnimation("Images/spacecraft2.png","Images/spacecraft2.png");
 Spacecraft_Left = loadAnimation("Images/spacecraft4.png","Images/spacecraft4.png");
 Spacecraft_Right = loadAnimation("Images/spacecraft3.png","Images/spacecraft3.png");

 //---Loading Images For All The Arrows---
 Arrow1_img = loadImage("Images/Down Arrow.png")
 Arrow2_img = loadImage("Images/Left Arrow.png")
 Arrow3_img = loadImage("Images/Right Arrow.png")
}

function setup() {
//----->>STEP-3<<-----
//---CREATING ALL THE SPRITES AND CANVAS---

//---Creating Canvas---
  createCanvas(1390,650);

//---Creating Spacecraft, Adding The Animation and Scaling It---
  Spacecraft=createSprite(1100,400,50,50);
  Spacecraft.addAnimation("space",Spacecraft_img);
  Spacecraft.scale= 0.3;

//---Creating International Space Station, Adding The Image and Scaling It with Some Depth---
  iss=createSprite(600,350,50,50);
  iss.addImage("iss",iss_img);
  iss.scale = 1.15;
  iss.depth += 1;

//---Creating All The Arrows, Adding The Image and Scaling Them---
//---Arrow 1 (Down Arrow)---
  Arrow_1=createSprite(527,335,40,40);
  Arrow_1.addImage("arr1",Arrow1_img);
  Arrow_1.scale = 0.2

//---Arrow2 (Left Arrow)---
  Arrow_2=createSprite(570,353,40,40);
  Arrow_2.addImage("arr2",Arrow2_img);
  Arrow_2.scale = 0.2

//---Arrow3 (Right Arrow)---
  Arrow_3=createSprite(495,390,40,40);
  Arrow_3.addImage("arr3",Arrow3_img);
  Arrow_3.scale = 0.2

//---Creating A Rectangular Collider "abc" which is invisible---
  collider=createSprite(525,375,10,10);
  collider.visible = false;
  collider.setCollider("rectangle",0,0,2,2);
  collider.debug = true;

}

function draw() {
//----->>STEP-4<<-----
//-----ADDING BACKGROUND,TEXTING,SCORING AND WRITING CONDITION FOR CONTROLS OF THE SPACECRAFT-----

//---Adding Background---
  background(background_img); 

//---Adding Score---
stroke ("black")
fill ("Red")
textFont ("Arial")
textSize(30);
text ("Score : " + score ,1100,70)

//---Credits---
stroke("White");
strokeWeight(1.5);
textFont("Arial")
textSize(35);
fill("Red")
text("A Project By- Aaryan.B",1000,600)


//---Objective---
stroke("White");
strokeWeight(1.5);
textFont("Arial")
textSize(27);
fill("Yellow")
text("Mission: Dock The Spacecraft At The Docking Station 1 of International Space Station,Follow The Arrows for Help.",7,30)


//---Controls Of The Spaceship using If Condition---
  if(!hasDocked){  
    if(keyDown(UP_ARROW)){
      Spacecraft.y = Spacecraft.y -2;
      Spacecraft.addAnimation("up",Spacecraft_Up);
      Spacecraft.changeAnimation("up");
    }

    if(keyDown(DOWN_ARROW)){
      Spacecraft.y = Spacecraft.y +2;
      Spacecraft.addAnimation("down",Spacecraft_Down);
      Spacecraft.changeAnimation("down");
    }

    if(keyDown(LEFT_ARROW)){
      Spacecraft.x = Spacecraft.x -2;
      Spacecraft.addAnimation("left",Spacecraft_Left);
      Spacecraft.changeAnimation("left");
    }

    if(keyDown(RIGHT_ARROW)){
      Spacecraft.x = Spacecraft.x +2;
      Spacecraft.addAnimation("right",Spacecraft_Right);
      Spacecraft.changeAnimation("right");
    }
    score = 0
  }

//----->>STEP-5<<-----
//-----WRITING CONDITION TO VERIFY THE DOCKING OF THE SPACECRAFT WITH THE INTERNATIONAL SPACE STATION-----
  if(Spacecraft.isTouching(collider)){
    hasDocked = true;
    score=100
    Spacecraft.addAnimation("normal",Spacecraft_img)
    fill("white");
    textSize(35);
    textFont("Arial")
    text("Spacecraft Docked Successfully !!!",800,350);

    stroke("black")
    strokeWeight(1.4)
    fill("Green");
    textSize(35);
    textFont("Arial")
    text("Mission Accomplished !!!", 885,400)
  }
  drawSprites();
}