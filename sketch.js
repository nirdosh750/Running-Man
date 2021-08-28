var path,invisibleGround,pathImage
var man,man_running

function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  man_running=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);

  //create path here
  path=createSprite(200,200)
  path.addImage("path",pathImage)
  path.y=path.height/3
  path.velocityY=3

//  create man here
man= createSprite(200,200)
 man.addAnimation("man",man_running)
 man.scale=0.07

 //create invisibleGround here
 invisibleGround=createSprite(200,350,300,100)
//invisibleGround.visible=false
}



function draw() {
  background(220);
 // console.log(man.y)
  if(keyDown(RIGHT_ARROW)){
    man.position.x=man.position.x+5
  }

  if(keyDown(LEFT_ARROW)){
    man.position.x=man.position.x-5
  }

  //console.log(man.y)
  if(path.y>400){
    path.y=path.height/200000
  }

  //collide man with invisibleGround
man.collide(invisibleGround)
drawSprites()
}
