//Create variables here

var database
var dog,dogimg,happydog
var foods,foodStock

function preload()    
{
	//load images here

  dogimg=loadImage("images/dogImg.png")
  happydog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);

  database=firebase.database()
  dog=createSprite(250,300,150,150)
  dog.addImage(dogimg)
  dog.addImage(happydog)
  dog.scale=0.15

  foodStock= database.ref("food")
  foodStock.on("value",(data)=>{
    foods=data.val()
  })
}


function draw() {  
background(46,139,87)

if (keyWentDown(UP_ARROW)){
  writeStock(foods)
  dog.addImage(happydog)
}

  drawSprites();
  fill(255,255,254); 
  stroke("black"); 
  text("Food remaining : "+foodS,170,200); 
  textSize(13); 
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20)
  //add styles here

}

function writeStock(X){
  if (x<=0){
    x=0

    
  }
  else{

    x=x-1
  }
  database.ref("/").update({
    food:x

  })

}





