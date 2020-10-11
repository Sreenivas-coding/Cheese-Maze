class Player{
    constructor(){
        this.triangle=createSprite(80,50,10,10);
        this.image=loadImage("triangle2.png");
        this.triangle.scale=0.07
    }
       
    changeDirection(xDir,yDir){
        this.triangle.velocityX+=xDir;
        this.triangle.velocityY+=yDir;
    }

    display(){
        this.triangle.addImage(this.image);
    }
}