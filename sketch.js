var bg,bg2;
var system,security,code,form;
var score=0;

function preload(){

bg=loadImage("js/treasure.jpg");
bg2=loadImage("js/download(3).jpg");



}
function setup(){
createCanvas(1000,500);
security= new Security;
system= new System;



}

function draw(){
background(bg2);
clues();
security.display();
textSize(50);
fill("white");
text("Score: "+score,450,50);

if (score===3){
clear();

fill("black");
textSize(40);
var player = createSprite(375,30,30,30);
player.setAnimation("js/minecraft_PNG87.png");
player.scale=0.1;
//walls
var wall1 = createSprite(300, 150,10,400);
wall1.shapeColor='blue';
var wall2 = createSprite(200,150,10,400);
wall2.shapeColor='pink';
var wall3 = createSprite(100,150,10,400);
wall3.shapeColor='red';
//vaccine
var vaccine = createSprite(50,25,20,20);
vaccine.setAnimation("images (2).jpg_1");
vaccine.scale=0.2;
//obstacles
var coronavirus = createSprite(350,300,10,10);
coronavirus.setAnimation("js/monster.png");
coronavirus.scale=0.15;
var coronavirus2 = createSprite(350,300,10,10);
coronavirus2.setAnimation("js/monster.png");
coronavirus2.scale=0.15;
var coronavirus3 = createSprite(150,250,10,10);
coronavirus3.setAnimation("js/monster.png");
coronavirus3.scale=0.15;
var coronavirus4 = createSprite(50,250,10,10);
coronavirus4.setAnimation("js/monster.png");
coronavirus4.scale=0.15;
//coins
var coin1 = createSprite(350,360,10,10);
coin1.setAnimation("js/coin.png");
coin1.scale=0.12;
var coin2 = createSprite(50,100,10,10);
coin2.setAnimation("js/coin.png");
coin2.scale=0.12;
var coin3 = createSprite(350,360,10,10);
coin3.setAnimation("js/coin.png");
coin3.scale=0.12;
var coin4 = createSprite(250,12,10,10);
coin4.setAnimation("js/coin.png");
coin4.scale=0.12;
var coin5 = createSprite(150,150,10,10);
coin5.setAnimation("js/coin.png");
coin5.scale=0.12;
var coin6 = createSprite(100,370,10,10);
coin6.setAnimation("js/coin.png");
coin6.scale=0.12;
//lifes
textSize(20);
stroke("yellow");
textFont('georgia');
// gamestate
var gamestate='serve';

  if (player.isTouching(coin2)) {
  coin2.scale=0;
  
}
if (player.isTouching(coin3)) {
  coin3.scale=0;
 
}
if (player.isTouching(coin4)) {
  coin4.scale=0;
  
}
if (player.isTouching(coin5)) {
  coin5.scale=0;
  
}
if (player.isTouching(coin6)) {
  coin6.scale=0;
 
}
if (player.isTouching(coin1)) {
  coin1.x=0;
  coin1.y=0;
  coin1.scale=0;
 
}
  background(rgb(30, 0, 67, 0.5));
  
  createEdgeSprites();
  // bouncing coronas
  coronavirus.bounceOff(edges);
  coronavirus.bounceOff(wall1);
  coronavirus2.bounceOff(edges);
  coronavirus2.bounceOff(wall1);
  coronavirus2.bounceOff(wall2);
  coronavirus2.bounceOff(wall3);
  coronavirus3.bounceOff(wall3);
  coronavirus3.bounceOff(wall2);
  coronavirus3.bounceOff(wall1);
  coronavirus3.bounceOff(edges);
  coronavirus3.bounceOff(vaccine);
  coronavirus3.bounceOff(coin2);
  coronavirus3.bounceOff(coin6);
  coronavirus4.bounceOff(wall3);
  coronavirus4.bounceOff(wall2);
  coronavirus4.bounceOff(wall1);
  coronavirus4.bounceOff(edges);
  player.bounceOff(wall3);
  player.bounceOff(wall2);
  player.bounceOff(wall1);
  player.bounceOff(edges);
  //gamestate
  if (gamestate==='serve') {
    text("press space to start",150,180);
    }
   if (keyDown("space")) {
    gamestate='play';
    coronavirus.velocityX=1;
    coronavirus2.velocityY=2;
coronavirus2.velocityX=2;
    coronavirus3.velocityY=-2;
coronavirus3.velocityX=2;
coronavirus4.velocityX=-1;
}
if (player.isTouching(coronavirus)|| 
(player.isTouching(coronavirus2)||
(player.isTouching(coronavirus3)||
(player.isTouching(coronavirus4))))){
      player.x=375;
      player.y=30;
      
       }
    //winning
if (player.isTouching(vaccine)&&
(coin1.scale===0)&&
    (coin2.scale===0)&&
    (coin3.scale===0)&&
    (coin4.scale===0)&&
    (coin5.scale===0)&&
    (coin6.scale===0)){
      text("YOU WON,CONGRATS",150,180);
       text("Treasure Hunted",150,230);
       stopSound();
       coronavirus.velocityX=0;
    coronavirus2.velocityY=0;
     coronavirus2.velocityX=0;
    coronavirus3.velocityY=0;
    coronavirus3.velocityX=0;
    coronavirus4.velocityX=0;
    backGround(bg);
    }
    if (player.isTouching(vaccine)&&
(coin1.scale===0.12)||
    (coin2.scale===0.12)||
    (coin3.scale===0.12)||
    (coin4.scale===0.12)||
    (coin5.scale===0.12)||
    (coin6.scale===0.12)){
    text("Collect all coins",150,300);
       text("Treasure Is still there",150,230);}
  //player movement
   if (keyDown("up")) {
     player.y=player.y-2;
   }
   if (keyDown("down")) {
     player.y=player.y+2;
   }
   if (keyDown("left")) {
     player.x=player.x-2;
   }
   if (keyDown("right")) {
     player.x=player.x+2;
   }}




drawSprites();

}