var bgImg
var cat, mouse
var cat_animation, mouse_animation





function preload() {
    //load the images here
    catImage1=loadAnimation("images/cat1.png")
    catImage2=loadAnimation("images/cat2.png","images/cat3.png")
    catImage3=loadAnimation("images/cat4.png")
    bgImg = loadImage(" images/garden.png")
    
    mouseImage1=loadAnimation(" images/mouse1.png")
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImage3=loadAnimation("images/mouse4.png")
}
    function setup() {
        createCanvas(1000, 800);
      
        cat=createSprite(870,600)
        cat.addAnimation("cat_run",catImage1)
        cat.scale=0.2

        mouse=createSprite(200,600)
        mouse.addAnimation("mouse_run",mouseImage1)
       mouse.scale=0.15

        //create tom and jerry sprites here

    }

    function draw() {

        background(bgImg);
        //Write condition here to evalute if tom and jerry collide

       if(cat.x-mouse.x<(cat.width-mouse.width)/2){
     
        cat.velocityX=0
        cat.addAnimation("cat_jump",catImage3)
        cat.changeAnimation("cat_jump")
        cat.scale=0.2


        mouse.addAnimation("mouse_jump",mouseImage3)
        mouse.changeAnimation("mouse_jump")
        mouse.scale=0.15
   
    }


      

  drawSprites();
    }
 

    function keyPressed(){
     
if(keyCode===32){
    cat.velocityX=-5
     cat.addAnimation("cat_eat",catImage2)
    cat.changeAnimation("cat_eat")
     cat.scale=0.2

     mouse.addAnimation("mouse_eat",mouseImage2)
     mouse.changeAnimation("mouse_eat")
     mouse.scale=0.2
     mouse.frameDelay=25
}

    }

    //hey pushkal its working wid space key 

        



