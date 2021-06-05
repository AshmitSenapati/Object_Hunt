var sam;
var obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10;
var obj1_img, obj2_img, obj3_img, obj4_img, obj5_img, obj6_img, obj7_img, obj8_img, obj9_img, obj10_img;

var hallWall1, hallWall2,hallWall3, hallWall4;
var KitchenWall1, KitchenWall2,KitchenWall3,KitchenWall4;
var studyWall1, studyWall2, studyWall3,studyWall4;
var PlayAreaWall1, PlayAreaWall2, PlayAreaWall3,PlayAreaWall4;


function preload(){



}
function setup(){
createCanvas(displayWidth-30,displayHeight-10);

    hallWall1 = createSprite(0,displayHeight-10,200,200);
    /*hallWall2 = createSprite(100,100,200,200);
    hallWall3 = createSprite(100,100,200,200);
    hallWall4 = createSprite(100,100,200,200);
  
    KitchenWall1 = createSprite(100,100,200,200);
    KitchenWall2 = createSprite(100,100,200,200);
    KitchenWall3 = createSprite(100,100,200,200);
    KitchenWall4 = createSprite(100,100,200,200);
  
    studyWall1 = createSprite(100,100,200,200);
    studyWall2 = createSprite(100,100,200,200);
    studyWall3 = createSprite(100,100,200,200);
    studyWall4 = createSprite(100,100,200,200);
    
    PlayAreaWall1 = createSprite(100,100,200,200);
    PlayAreaWall2 = createSprite(100,100,200,200);
    PlayAreaWall3 = createSprite(100,100,200,200);
    PlayAreaWall4 = createSprite(100,100,200,200);

*/



}
function draw(){
background(200)


drawSprites()
}