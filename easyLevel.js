function easyLevelSprites(){
    var playerSide;
    player = createSprite(50,100,10,10);
    player.addAnimation('player',playerRest);
    player.addAnimation('playerRmove',playerRmove);
    player.addAnimation('playerRAttack',playerRAttack);
    player.addAnimation('playerLAttack',playerLAttack);
    player.addAnimation('playerLmove',playerLmove);
    player.addAnimation('playerSneakAttackR',playerSneakAttackR);
    player.addAnimation('playerSneakAttackL',playerSneakAttackL);
    //player.shapeColor = "red";
    normalEnemy1 = createSprite(250,100,10,10);
    normalEnemy1.velocityX = -7;
    normalEnemy1.addAnimation('nErightMove',nERightmove);
    normalEnemy1.addAnimation('nEleftMove',nELeftmove);
    normalEnemy1.addAnimation("nEAttackL",nEAttackL);
    normalEnemy1.addAnimation("nEAttackR",nEAttackR);
    normalEnemy2 = createSprite(450,300,10,10);
    normalEnemy2.velocityY = 7;
    normalEnemy2.addAnimation('nErightMove',nERightmove);
    normalEnemy2.addAnimation('nEleftMove',nELeftmove);
    normalEnemy2.addAnimation("nEAttackL",nEAttackL);
    normalEnemy2.addAnimation("nEAttackR",nEAttackR);
    normalEnemy3 = createSprite(800,600,10,10);
    normalEnemy3.velocityX = 7;
    normalEnemy3.addAnimation('nErightMove',nERightmove);
    normalEnemy3.addAnimation('nEleftMove',nELeftmove);
    normalEnemy3.addAnimation("nEAttackL",nEAttackL);
    normalEnemy3.addAnimation("nEAttackR",nEAttackR);
    wall1 = createSprite(100,height-250,200,40);

    wall2 = createSprite(300,height-400,50,200);
    wall3 = createSprite(400,250,50,17);
    wall4 = createSprite(750,300,20,75);
    wall5 = createSprite(100,550,50,17);
    wall6 = createSprite(870,600,20,75);
    wall7 = createSprite(500,750,50,17);
    wall8 = createSprite(650,550,20,75);
    wall9 = createSprite(380,600,50,17);
    wall10 = createSprite(350,800,20,75);
    treasure = createSprite(970,15,20,10);
   // treasure.shapeColor = "yellow";
   treasure.addAnimation('treasure',treasure);
    invisibleWall1 = createSprite(150,100,10,10);
    invisibleWall1.visible = true;
    invisibleWall2 = createSprite(350,100,10,10);
    invisibleWall2.visible = true;
    invisibleWall3 = createSprite(450,400,10,10);
    invisibleWall3.visible = true;
    invisibleWall4 = createSprite(450,200,10,10);
    invisibleWall4.visible = true;
    invisibleWall5 = createSprite(700,600,10,10);
    invisibleWall5.visible = true;
    invisibleWall6 = createSprite(900,600,10,10);
    invisibleWall6.visible = true;

    easyLevelGroup.add(player);
    easyLevelGroup.add(normalEnemy1);
    easyLevelGroup.add(normalEnemy2);
    easyLevelGroup.add(normalEnemy3);
    easyLevelGroup.add(wall1);
    easyLevelGroup.add(wall2);
    easyLevelGroup.add(wall3);
    easyLevelGroup.add(wall4);
    easyLevelGroup.add(wall5);
    easyLevelGroup.add(wall6);
    easyLevelGroup.add(wall7);
    easyLevelGroup.add(wall8);
    easyLevelGroup.add(wall9);
    easyLevelGroup.add(wall10);
    easyLevelGroup.add(treasure);
    easyLevelGroup.add(invisibleWall1);
    easyLevelGroup.add(invisibleWall2);
    easyLevelGroup.add(invisibleWall3);
    easyLevelGroup.add(invisibleWall4);
    easyLevelGroup.add(invisibleWall5);
    easyLevelGroup.add(invisibleWall6);
}
function easyLevelMoves(){
    normalEnemy1.bounceOff(invisibleWall1);
    normalEnemy1.changeAnimation('nErightMove');
    normalEnemy1.bounceOff(invisibleWall2);
    normalEnemy1.changeAnimation('nEleftMove');
    normalEnemy2.bounceOff(invisibleWall3);
    normalEnemy2.bounceOff(invisibleWall4);
    normalEnemy3.bounceOff(invisibleWall5);
    normalEnemy3.changeAnimation('nErightMove');
    normalEnemy3.bounceOff(invisibleWall6);
    normalEnemy3.changeAnimation('nEleftMove');
    player.collide(edges);

    if(keyDown(UP_ARROW)){
        player.velocityY = -5; 
        player.velocityX = 0;
        player.changeAnimation('player');
    }
    if(keyDown(DOWN_ARROW)){
        player.velocityY = 5;
        player.velocityX = 0;
        player.changeAnimation('player');
    }
    if(keyDown(RIGHT_ARROW)){
        player.velocityY = 0;
        player.velocityX = 5;
        player.changeAnimation('playerRmove');
        playerSide = "right";
    }
    if(keyDown(LEFT_ARROW)){
        player.velocityY = 0;
        player.velocityX = -5;
        player.changeAnimation('playerLmove');
        playerSide = "left";
    }
    if(keyWentUp(UP_ARROW)||keyWentUp(DOWN_ARROW)||keyWentUp(LEFT_ARROW)||keyWentUp(RIGHT_ARROW)){
        player.velocityX = 0;
        player.velocityY = 0;
        player.changeAnimation('player');
    }
}
function easyLevelMovement(){
    if(player.isTouching(wall1)){
        player.collide(wall1);
    }
    if(player.isTouching(wall2)){
        player.collide(wall2);
    }
    if(player.isTouching(wall3)){
        player.collide(wall3);
    }
    if(player.isTouching(wall4)){
        player.collide(wall4);
    }
    if(player.isTouching(wall5)){
        player.collide(wall5);
    }
    if(player.isTouching(wall6)){
        player.collide(wall6);
    }
    if(player.isTouching(wall7)){
        player.collide(wall7);
    }
    if(player.isTouching(wall8)){
        player.collide(wall8);
    }
    if(player.isTouching(wall9)){
        player.collide(wall9);
    }
    if(player.isTouching(wall10)){
        player.collide(wall10);
    }
}
function easyLevelAttack(){
    if(keyDown("a")){
        if(playerSide==="right"){
            player.changeAnimation('playerRAttack');
        }
        else{
            player.changeAnimation('playerLAttack');
        }
        
        if(player.isTouching(normalEnemy1)){            
            normalEnemy1.hide();
        }
        if(player.isTouching(normalEnemy2)){
            normalEnemy2.hide();
        }
        if(player.isTouching(normalEnemy3)){
            normalEnemy3.hide();
        }
    }
    if(keyWentUp("a")){
        player.changeAnimation('player');
    }
    if(keyDown("s")){
        if(playerSide==="right"){
            player.changeAnimation('playerSneakAttackR');
        }
        else{
            player.changeAnimation('playerSneakAttackL');
        }
        
        if(player.isTouching(normalEnemy1)){            
            normalEnemy1.hide();
        }
        if(player.isTouching(normalEnemy2)){
            normalEnemy2.hide();
        }
        if(player.isTouching(normalEnemy3)){
            normalEnemy3.hide();
        }
    }
    if(keyWentUp("s")){
        player.changeAnimation('player');
    }
    if(player.x-normalEnemy1.x<=100){
        normalEnemy1.changeAnimation(nEAttackL);
       // console.log('HI');
       text("Game Over",500,500);
       retryButton = createButton("Retry");
       retryButton.position(500,500);
       player.hide();
       retryButton.mousePressed(()=>{
           retryButton.visible = false;
           gameState = "beginner";
           subGameState = 1;
    })}
    if(player.x-normalEnemy2.x<=100){
        normalEnemy2.changeAnimation(nEAttackL);
        // console.log('HI');
        text("Game Over",500,500);
        retryButton = createButton("Retry");
        retryButton.position(500,500);
        player.hide();
        retryButton.mousePressed(()=>{
            retryButton.visible = false;
            gameState = "beginner";
            subGameState = 1;
       
    })}
    if(player.x-normalEnemy3.x<=100){
        normalEnemy1.changeAnimation(nEAttackL);
        // console.log('HI');
        text("Game Over",500,500);
        retryButton = createButton("Retry");
        retryButton.position(500,500);
        player.hide();
        retryButton.mousePressed(()=>{
            retryButton.visible = false;
            gameState = "beginner";
            subGameState = 1;
    })}
}