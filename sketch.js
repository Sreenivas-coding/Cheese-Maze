var player;
var maze;
var trial;
var hguard; //h=horizontal
var vguard; //v=vertical
var hguard2;
var hguard3;
var cheeseCount;
cheeseCount=8;
var guardimage;
var gameState=0;


function setup() {
  createCanvas(800,400);
  player=new Player()
  maze=new Maze();
  //maze.Cheese();
  player.display();
  maze.display();
  trial=0   
  
  vguard=createSprite(360,270,10,10);
  vguard.velocityY=-1
  vguard.shapeColor="Pink"
  

  hguard=createSprite(150,90,10,10);
  hguard.velocityX=2
  hguard.shapeColor="Pink"

  hguard2=createSprite(404,253,10,10);
  hguard2.velocityX=2
  hguard2.shapeColor="Pink"

  hguard3 = createSprite(514,150,10,10);
  hguard3.velocityX=2
  hguard3.shapeColor="Pink"


 
}

function draw() {
  background("black");
  
  switch(gameState){
    case 0: text("run from the guards", 50,10);
    text("press space to continue", 50,50);
    if(keyIsDown(32)){
      gameState=1
    }
    break;
    case 1: drawSprites(); 
     
    //player.display();
    //maze.display();
    if(trial<3){
      if(vguard.isTouching(player.triangle)
        ||hguard.isTouching(player.triangle)
        ||hguard2.isTouching(player.triangle)
        ||hguard3.isTouching(player.triangle)){
        player.triangle.x=80
        player.triangle.y=46
        player.triangle.setVelocity(0,0)
        trial++
     }
    }
    if(trial===3){
      gameState=3
   }

  
    for(var i=0; i<maze.cheese.length; i++){
      if(player.triangle.isTouching(maze.cheese[i])){
        player.triangle.velocityX+=1
        player.triangle.velocityY+=1
        maze.cheese[i].destroy();
      }
    if(maze.cheese.length<0){
      gameState=2
    }
    }
    for(var i=0; i<maze.vlines.length; i++){
      player.triangle.collide(maze.vlines[i])
      vguard.bounceOff(maze.vlines[i])
      hguard.bounceOff(maze.vlines[i])
      hguard2.bounceOff(maze.vlines[i])
      hguard3.bounceOff(maze.vlines[i])
    }
    for(var i=0; i<maze.hlines.length; i++){
      player.triangle.collide(maze.hlines[i])
      vguard.bounceOff(maze.hlines[i])
      hguard.bounceOff(maze.hlines[i])
      hguard2.bounceOff(maze.hlines[i])
      hguard3.bounceOff(maze.hlines[i])
    }
    break;
    
    case 2:
      drawSprites(); 
     
    //player.display();
    //maze.display();
    if(trial<3){
      if(vguard.isTouching(player.triangle)
        ||hguard.isTouching(player.triangle)
        ||hguard2.isTouching(player.triangle)
        ||hguard3.isTouching(player.triangle)){
        player.triangle.x=80
        player.triangle.y=46
        player.triangle.setVelocity(0,0)
        trial++ 
     }
    }
    if(trial===3){
      gameState=3
   }

  
    for(var i=0; i<maze.cheese.length; i++){
      if(player.triangle.isTouching(maze.cheese[i])){
        player.triangle.velocityX+=1
        player.triangle.velocityY+=1
        maze.cheese[i].destroy();
        cheeseCount--
      }
    if(cheeseCount=0){
      gameState=3
    }
    }
    for(var i=0; i<maze.vlines.length; i++){
      player.triangle.collide(maze.vlines[i])
      vguard.bounceOff(maze.vlines[i])
      hguard.bounceOff(maze.vlines[i])
      hguard2.bounceOff(maze.vlines[i])
      hguard3.bounceOff(maze.vlines[i])
    }
    for(var i=0; i<maze.hlines.length; i++){
      player.triangle.collide(maze.hlines[i])
      vguard.bounceOff(maze.hlines[i])
      hguard.bounceOff(maze.hlines[i])
      hguard2.bounceOff(maze.hlines[i])
      hguard3.bounceOff(maze.hlines[i])
    }
    break;

    case 3:
      if(trial===3){
        text("Game Over",359,170 );
        text("Press r to restart",359,175);
      }
      if(keyDown("r")){
        gameState=1
      }
    break;
  } 
  console.log(cheeseCount)
  console.log(gameState)
  text("x:" +mouseX+"y:"+mouseY, 10, 10);
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    player.triangle.velocityY=-6
    player.triangle.velocityX=0
  }
  if(keyCode===DOWN_ARROW){
    player.triangle.velocityY=6
    player.triangle.velocityX=0
  }
  if(keyCode===LEFT_ARROW){
    player.triangle.velocityX=-6
    player.triangle.velocityY=0
  }
  if(keyCode===RIGHT_ARROW){
    player.triangle.velocityX=6
    player.triangle.velocityY=0
  }
}
/*function spawnGuards(){
  if(framecount%50===0){
    var guard=createSprite(10,)
  }
  
}*/
