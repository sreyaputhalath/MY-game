var molly, gaurd,ground,bg,gamestate="puzzle1";
var puzzle;


function setup(){
createCanvas(windowWidth,windowHeight);

//creating the PC  and NPC characters//
bg= createSprite(width/2,height/2,width,height);
bg.shapeColor = "blue";
ground = createSprite(width/2,height-40,width,60);
molly = createSprite(width/2+200,height-100,20,90);

gaurd = createSprite(width/2-100,height-100,20,100);
ghost = createSprite(width/2-150,height-100,20,100);
ghost.visible = false;
puzzleG=new Group();


}

function draw(){
  background("white");

 //The instructions for the game// 
text("Hello molly you are actually trapped in the mall ,to escape from the mall you have solve puzzles and of course you must hurry before the ghost catches you",width/2-200,height/2-300)
 
// code for when the gamestate is start//
if(gamestate=="start"){
  if(keyDown("space")){
    bg.velocityX=-2;
    gaurd.visible=false;
    ghost.visible = true;
    }
    if(bg.x<width/3){
      bg.x=width/2;
    }
    portal();

    //code for when the gamestate is puzzle1//
    if(molly.isTouching(puzzleG)){
     gamestate="puzzle1";
    }
 }
 drawSprites();
//disable the puzzle group//
  if(gamestate=="puzzle1"){
    bg.velocityX=0;
    bg.shapeColor="purple";

    text("unscramble the given words below",width/2,height/8);
    text("RDOIASUANS",width/2,height/8+100);
     input1=createInput("");
    input1.position(width/2+100,height/8+90);
     submitbtn= createButton("Submit");
     submitbtn.position(width/2+280,height/8+90);
     var ans= "DINOSAUR";
     submitbtn.mousePressed(()=>{
       console.log("hello");
      var Userans=input1.value();
      Userans=Userans.toUpperCase();
      if(ans==Userans){
        console.log("hello");
      }
    });
     


  }




}
// code for spawning puzzles//
function portal(){
  if(frameCount%80===0){
     puzzle = createSprite(width+100,height-100,10,10);
    puzzle.velocityX=-3;
    puzzle.shapeColor= rgb(random(0,225),random(0,225),random(0,225));
    puzzleG.add(puzzle);
  }
}