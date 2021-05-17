//Variables Things...
var mapI
var virusI
var trophyI
var livesI
var hospitalI,vaxI
var aeroplane,aeroplane_Img
var islandI,island

//Variables Backgrounds...
var background_1
var clouds,clouds2
var water1, water2, water3, water4, water5, water6, water7, water8, water9, water10, water11, water12, water13, water14, water15, water16, 
water17,water_Animation
var grass, yellow_Flowers, orange_Flowers, red_Flowers, big_Tree, slim_Tree, bush1, bush2, tall_Grass, tall_Grass2

//Variables PC
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15
var boy,boy_Animation

var g1, g2, g3, g4, g5, g6, g7, g7, g8, g9, g10, g11, g12, g13, g14, g15,g16,g17,g18,g19,g20
var girl,girl_Animation

//GUI

var playButton,playImage
var idea,ideaI
var search,searchI
var redLocation,redI,greenLocation,greenI
var r1,r2,r3,r4,r5,rI
var lState=1


function preload(){
  mapI = loadImage("Map.png");
  virusI = loadImage("Virus/image-removebg-preview (9).png");
  trophyI=loadImage("Winner/Trophy.png");
livesI=loadImage("Lives/Heart.png");
hospitalI=loadImage("Hospitals/Hospital.png")
vaxI= loadImage("Hospitals/Vax.png")
aeroplane_Img=loadImage("Aeroplane.png")
islandI=loadImage("I1.png")

background_1=loadImage("Island.png")
clouds=loadImage("Clouds/Cloud_1.png")
//clouds2 = loadImage("Clouds/Cloud_2.png")
  water1=loadImage("Water/image 1.png")
  water2 = loadImage("Water/image 2.png")
  water3 = loadImage("Water/image 3.png")
  water4 = loadImage("Water/image 4.png")
  water5 = loadImage("Water/image 5.png")
  water6 = loadImage("Water/image 6.png")
  water7 = loadImage("Water/image 7.png")
  water8 = loadImage("Water/image 8.png")
  water9 = loadImage("Water/image 9.png")
  water10 = loadImage("Water/image 10.png")
  water11 = loadImage("Water/image 11.png")
  water12 = loadImage("Water/image 12.png")
  water13 = loadImage("Water/image 13.png")
  water14 = loadImage("Water/image 14.png")
  water15 = loadImage("Water/image 15.png")
  water16 = loadImage("Water/image 16.png")
  water17 = loadImage("Water/image 17.png")
  water_Animation = loadAnimation(water1, water2, water3, water4, water5, water6, water7, water8, water9, water10, water11, water12,
     water13, water14, water15, water16, water17)

grass=loadImage("Platform/Grass.png")

yellow_Flowers=loadImage("Trees And Grass/Flower-1.png")
  orange_Flowers = loadImage("Trees And Grass/Flower-2.png")
  red_Flowers = loadImage("Trees And Grass/Flower-3.png")

  big_Tree=loadImage("Trees And Grass/Asset 1.png")
  slim_Tree = loadImage("Trees And Grass/Tree.png")

  bush1 = loadImage("Trees And Grass/Asset 6.png")
  bush2 = loadImage("Trees And Grass/Bush.png")
  tall_Grass=loadImage("Trees And Grass/Asset 10.png")
  tall_Grass2=loadImage("Trees And Grass/Asset 13.png")

  b1 = loadImage("Boy/Run (1).png");
  b2 = loadImage("Boy/Run (2).png");
  b3 = loadImage("Boy/Run (3).png");
  b4 = loadImage("Boy/Run (4).png");
  b5 = loadImage("Boy/Run (5).png");
  b6 = loadImage("Boy/Run (6).png");
  b7 = loadImage("Boy/Run (7).png");
  b8 = loadImage("Boy/Run (8).png");
  b9 = loadImage("Boy/Run (9).png");
  b10 = loadImage("Boy/Run (10).png");
  b11 = loadImage("Boy/Run (11).png");
  b12 = loadImage("Boy/Run (12).png");
  b13 = loadImage("Boy/Run (13).png");
  b14 = loadImage("Boy/Run (14).png");
  b15 = loadImage("Boy/Run (15).png");

  boy_Animation = loadAnimation(b1 ,b2 ,b3 , b4 , b5 , b6 , b7 , b8 , b9 , b10 , b11 , b12 , b13 , b14 , b15 );

  g1 = loadImage("Girl/Run (1).png");
  g2 = loadImage("Girl/Run (2).png");
  g3 = loadImage("Girl/Run (3).png");
  g4 = loadImage("Girl/Run (4).png");
  g5 = loadImage("Girl/Run (5).png");
  g6 = loadImage("Girl/Run (6).png");
  g7 = loadImage("Girl/Run (7).png");
  g8 = loadImage("Girl/Run (8).png");
  g9 = loadImage("Girl/Run (9).png");
  g10 = loadImage("Girl/Run (10).png");
  g11 = loadImage("Girl/Run (11).png");
  g12 = loadImage("Girl/Run (12).png");
  g13 = loadImage("Girl/Run (13).png");
  g14 = loadImage("Girl/Run (14).png");
  g15 = loadImage("Girl/Run (15).png");
  g16 = loadImage("Girl/Run (16).png");
  g17 = loadImage("Girl/Run (17).png");
  g18 = loadImage("Girl/Run (18).png");
  g19 = loadImage("Girl/Run (19).png");
  g20 = loadImage("Girl/Run (20).png");

  girl_Animation = loadAnimation(g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15,g16,g17,g18,g19,g20)

  playImage=loadImage("Play123.png")
  searchI=loadImage("Glass.png")
  ideaI=loadImage("Idea.png")
  redI=loadImage("redl.png")
  greenI=loadImage("greenl.png")
  rI=loadImage("redl.png")
}

function setup() {
  createCanvas(1000,500);
  playButton=createSprite(500, 250, 50, 50);
  playButton.addImage(playImage);
  playButton.scale=0.5

  search = createSprite(650, 250, 50, 50);
  search.addImage(searchI);
  search.scale = 0.5

  idea = createSprite(320, 250, 50, 50);
  idea.addImage(ideaI);
  idea.scale = 0.29
  
  boy=createSprite(-50,350,50,50)
  boy.addAnimation("boy",boy_Animation)
boy.scale=0.3
boy.velocityX=3

  girl = createSprite(-200, 350, 50, 50)
  girl.addAnimation("girl", girl_Animation)
  girl.scale = 0.3
  girl.velocityX = 3

  aeroplane = createSprite(700, 70, 50, 50);
  aeroplane.addImage(aeroplane_Img);
  aeroplane.scale = 0.8

  r1=createSprite(1050,280,20,20)
  r1.addImage(rI)
  r1.scale=0.15

  r2 = createSprite(1050+150, 280, 20, 20)
  r2.addImage(rI)
  r2.scale = 0.15

  r3 = createSprite(1050+300, 280, 20, 20)
  r3.addImage(rI)
  r3.scale = 0.15

  r4 = createSprite(1050+450, 280, 20, 20)
  r4.addImage(rI)
  r4.scale = 0.15

  r5 = createSprite(1050+600, 280, 20, 20)
  r5.addImage(rI)
  r5.scale = 0.15

}

function draw() {
  background(islandI);  
  if (boy.x > 1050) {
    boy.x = -60

  }

  if (girl.x > 1050) {
    girl.x = -60

  }

  
  if (aeroplane.x > 750) {
    textSize(25)
    fill("white")
    strokeWeight(5)
    stroke("black")
    text("Good Luck !", 670, 70)
  }

  if (mousePressedOver(playButton)) {
    /*for (var num = 190; num < 825; num = num + 150) {
      var location = createSprite(num, 280, 20, 20);
      location.addImage(redI)
      location.scale = 0.15*/

lState=2

    playButton.x = 9000
    idea.x = 9000
    search.x = 9000
    boy.velocityX = 0
    girl.velocityX = 0
    boy.x = 9000
    girl.x = 9000
    aeroplane.velocityX = 4.7

  }

  if (lState===2) {
    r1.velocityX = -10
    if (r1.x === 190) {
      r1.velocityX = 0;
    }
    r2.velocityX = -10
    if (r2.x === 190 + 150) {
      r2.velocityX = 0
    }

    r3.velocityX = -10
    if (r3.x === 190 + 300) {
      r3.velocityX = 0
    }

    r4.velocityX = -10
    if (r4.x === 190 + 450) {
      r4.velocityX = 0
    }

    r5.velocityX = -10
    if (r5.x === 190 + 600) {
      r5.velocityX = 0
    }

    
  }
  drawSprites();
  
  
  
 


    
  

  }

  
