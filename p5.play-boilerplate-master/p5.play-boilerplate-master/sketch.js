var sun,mercury,venus,earth,mar,jupitar,saturn,neptune,uranus;


function setup() {
  createCanvas(800,800);

  sun = createSprite(400,400,80,80);
  sun.shapeColor = "yellow";
  
mercury = createSprite(320,370,10,10);
mercury.shapeColor = "orange";

venus= createSprite (300,320,15,15);
venus.shapeColor = "brown";

earth = createSprite (500, 480,20,20);
earth.shapeColor = "blue";

mars = createSprite(600, 400,30,30);
mars.shapeColor = "maroon";

jupitar = createSprite (400,240,40,40);
jupitar.shapeColor = "green";

saturn = createSprite (200,580,45,45);
saturn.shapeColor = "purple";
uranus = createSprite (150,200,30,30);
uranus.shapeColor = "white";
neptune = createSprite (700,100,20,20);
neptune.shapeColor = "blue";


}

function draw() {
  background ("black");

if (mousePressedOver (sun)){
sun.width = sun.width +10;
sun.height = sun.height+10;
}
if (sun.isTouching (mercury)){

mercury.destroy();
}

if (sun.isTouching (venus)){

 venus.destroy();
  }

  if (sun.isTouching (earth)){

    mearth.destroy();
    }

    if (sun.isTouching (mars)){

      mars.destroy();
      }
      if (sun.isTouching (jupitar)){

        jupitar.destroy();
        }

        if (sun.isTouching (saturn)){

          saturn.destroy();
          }
          if (sun.isTouching (neptune)){

           neptune.destroy();
            }
            if (sun.isTouching (uranus)){

              uranus.destroy();
              }

  drawSprites();
}
