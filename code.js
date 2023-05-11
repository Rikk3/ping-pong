var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cb792057-5345-465a-b1c0-c6bc46e84f2a","da3af6c7-8947-4f8a-afb2-700e1104b709","1a07a195-6569-49bb-a094-db8ca60a4fa3"],"propsByKey":{"cb792057-5345-465a-b1c0-c6bc46e84f2a":{"name":"raquete","sourceUrl":null,"frameSize":{"x":149,"y":338},"frameCount":1,"looping":true,"frameDelay":12,"version":"u12IfaXacWZgtRdV1CPTCZkiHqc9USnl","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":149,"y":338},"rootRelativePath":"assets/cb792057-5345-465a-b1c0-c6bc46e84f2a.png"},"da3af6c7-8947-4f8a-afb2-700e1104b709":{"name":"raquete2","sourceUrl":null,"frameSize":{"x":149,"y":338},"frameCount":1,"looping":true,"frameDelay":12,"version":"C6xu5gaS9yIxho5UxOVUJsCJS7MFks8X","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":149,"y":338},"rootRelativePath":"assets/da3af6c7-8947-4f8a-afb2-700e1104b709.png"},"1a07a195-6569-49bb-a094-db8ca60a4fa3":{"name":"bola","sourceUrl":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var raquete2 = createSprite(200, 20, 100, 10);
var raquete = createSprite(200, 380, 100, 10);
var bola = createSprite(200, 200,15,15);
var gamestate = 'sacar' ;

raquete2.shapeColor = 'blue';
raquete.shapeColor = 'blue';
bola.shapeColor = 'white';

raquete2.rotation = 270;

raquete.rotation= 90;

createEdgeSprites();

bola.setAnimation('bola');
raquete.setAnimation('raquete');
raquete2.setAnimation('raquete2');

bola.scale = 0.05;
raquete.scale = 0.5;
raquete2.scale = 0.5;

function draw() {
  
  background('gray');
  
  for (var i = 0; i <= 400; i=i+20) {
line(i,200,i+10,200)}

if (gamestate === 'sacar'){
  fill("black");
  textSize(20);
  textFont("Arial");
  text("preçione enter para continuar", 70, 250);
}

if (keyDown("ENTER")){
  gamestate = 'jogar';
}

 if (gamestate=== 'jogar'){

if (keyDown("A")) {
 raquete.x -= 5}
 
  if (keyDown("D")) {
 raquete.x += 5}
 
 if (keyDown("LEFT")) {
 raquete.x -= 5}
 
  if (keyDown("RIGHT")) {
 raquete.x += 5}
 
  if (keyDown("SPACE")) {
 raquete.x = bola.x ;}
 
if (keyDown("ENTER")) {
bola.velocityX = 5 ;
bola.velocityY = 5;}

raquete2.x = bola.x ;

if(bola.y<0 || bola.y>400){
resetbola() }

if(bola.isTouching(raquete)|| bola.isTouching(raquete2))
{
playSound("assets/category_sports/Hitting_Soccer_Ball_SFX.mp3", false);
}
}

bola.bounceOff(rightEdge);
bola.bounceOff(leftEdge);
bola.bounceOff(raquete2);
bola.bounceOff(raquete);

drawSprites();
}

function resetbola (){
  bola.y =200;
  bola.x =200;
bola.velocityY = 0;
bola.velocityX = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
