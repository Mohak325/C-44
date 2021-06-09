var soldierWalk,soldierJump,soldierAttack,soldierDead;
var monsterWalk,monsterAttack;
var groundImg;
var coinImg;
var bombImg;
var explosionImg;
var backgroundImg;
var rock1Img,rock2Img,rock3Img,rock4Img;







function preload(){
	soldierWalk = loadAnimation("images/soldierJump1.png","images/soldierWalk2.png");
	soldierJump = loadAnimation("images/soldierJump1.png","images/soldierJump2.png","images/soldierJump3.png","images/soldierJump4.png",
	"images/soldierJump5.png","images/soldierJump6.png");
	soldierDead = loadAnimation("images/deadsoldier1.png","images/deadsoldier2.png","images/deadsoldier3.png",
	"images/deadsoldier4.png","images/deadsoldier5.png")
	soldierAttack = loadAnimation("images/soldierAttack1.png","images/soldierAttack2.png","images/soldierAttack3.png");
	monsterWalk = loadAnimation("images/monster1.png","images/monster2.png","images/monster3.png",
	"images/monster4.png","images/monster5.png","images/monster6.png");
	monsterAttack = loadImage("images/monsterAttack.png");
	groundImg = loadImage("images/ground2.png");
	coinImg = loadImage("images/coin.png");
	bombImg = loadImage("images/bomb.png");
	backgroundImg = loadImage("images/sky1.png");
	backgroundImg.scale = 2.0;
	explosionImg = loadImage("images/explosion.png");
	rock1Img = loadImage("images/rock1.png");
	rock2Img = loadImage("images/rock2.png");
	rock3Img = loadImage("images/rock3.png");
	rock4Img = loadImage("images/rock4.png");


}
function setup(){
	createCanvas(windowWidth,windowHeight);
	ground = createSprite(windowWidth/2,windowHeight-200,windowWidth,30);
	ground.addImage(groundImg);
	ground.scale = 1.5;
	invisibleGround = createSprite(windowWidth/2,windowHeight-10,windowWidth,30);
	invisibleGround.visible = false;
	soldier = createSprite(100,windowHeight-110,10,10);
	soldier.addAnimation("soldierWalking",soldierWalk);
	soldier.scale = 0.8;
	//soldier.debug = true;
	soldier.setCollider("circle",0,0,80);


}
function draw(){

	background(backgroundImg);
	if(keyDown("SPACE")){
		soldier.velocityY = -10;
		
	}
	if(keyDown("RIGHT")){
		soldier.velocityX = 5;
	}
	soldier.velocityY = soldier.velocityY+0.9;
	soldier.collide(invisibleGround);
	spawnRocks();
	soldier.collide(rock);
	drawSprites();
}
function spawnRocks(){
	if(frameCount%100==0){
	rock = 	createSprite(random(20,windowWidth),random(windowHeight-500,windowHeight-200),50,50);
	var RandNo = Math.round(random(1,4));
	switch(RandNo){
		case 1 : 
		rock.addImage(rock1Img);
		break;
		case 2 : 
		rock.addImage(rock2Img);
		break;
		case 3 : 
		rock.addImage(rock1Img);
		break;
		case 4 : 
		rock.addImage(rock1Img);
		break;
		
	}
	}
}