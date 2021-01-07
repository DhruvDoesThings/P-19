var placeChar,charImg,charImg2, platform1, platform2,platform,platformsGroup,goal
,goalsGroup,endPlat, startPlat;
var backImg,bacgrd, platformImg;
var PLAY=1,END=0,gameState=PLAY;

function preload(){

backImg = loadImage("Image1.png");
charImg = loadImage("charWalkImg.png");
charImg2 = loadImage("CharImg.png");
platformImg = loadImage("platform1.jpg");


}

function setup(){
   createCanvas(windowWidth-100,windowHeight-100);
  bacgrd = createSprite(0,0);
  bacgrd.addImage("back",backImg);
  bacgrd.scale = 2.1;

  placeChar = createSprite(width-1000,height-300,50,50);
  //placeChar.shapeColor = "red";
  placeChar.addImage("character",charImg);
  placeChar.scale=0.4;
  placeChar.setCollider("rectangle",0,0,100,300);

  startPlat = createSprite(width-1000,height-300,200,50);
  startPlat.velocityX = -3;
  startPlat.lifetime = 300;
  

  platformsGroup = createGroup();
  goalsGroup = createGroup();
  placeChar.debug = true;
  platformsGroup.add(startPlat);
  
 
  endPlat = createSprite(width-100,height-150,1000,50);
  endPlat.visible = false;
  
}


function draw(){
  background(rgb(50,50,50));


  console.log(gameState);
  placeChar.collide(platformsGroup);
  placeChar.collide(goalsGroup);

  placeChar.velocityX = 0;
  placeChar.velocityY = placeChar.velocityY+1;

  if(touches.length>0 || keyDown("w")  
  // && 
  // platformsGroup.isTouching(placeChar) ||
  // goalsGroup.isTouching(placeChar)
  ){
   placeChar.velocityY= -15;
   placeChar.addImage("jump",charImg2);
     touches=[];
 }

  if(touches.length>0 || keyDown("a")){
   placeChar.velocityX=-15;
   touches=[];
  }

  if(touches.length>0 || keyDown("d")){
   placeChar.velocityX= 15;
     touches=[];
 }
 

      if(gameState === PLAY){


        // placeChar.collide(platform1);
        // placeChar.collide(platform2);
        
        // spawnPlatforms();

       if(placeChar.y=== windowHeight-100)
        //  goalsGroup.isTouching(placeChar)
         {
        console.log("working");
        gameState=END;

       }

      }
      else if(gameState === END){






        
        // platformsGroup.setLifetimeEach(1);
        // goalsGroup.setLifetimeEach(1);
        // placeChar.lifetime = -1;

        // endPlat.visible =true;
        // // endPlat.collide(placeChar);
       
        
 


        spawnPlatforms();

      //  spawnGoals();

     

      }

    drawSprites();
}

function spawnPlatforms(){



  if(frameCount % 70===0 ){
    // 1050
    platform = createSprite(width-200, height, 200,40);
    platform.y = Math.round(random(height-200,height-400));
    platform.velocityX = -5;
    platform.lifetime = 300;
    platform.addImage(platformImg);
    
    platformsGroup.add(platform);
  }
 
}




function spawnGoals(){
// 1050
  if(frameCount === 200){
    goal = createSprite(width-100,height-300,300,50);
    goal.shapeColor = "yellow";
    goal.velocityX = -3;
    goal.debug= true;
    goal.setCollider("rectangle",0,0,300,100);
    goalsGroup.add(goal);
    }
  }
