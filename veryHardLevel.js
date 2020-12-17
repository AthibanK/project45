function veryHardLevelSprites(){
    var playerSide;
    if(hardToVeryHard===true)
        hardLevelGroup.setLifeTimeEach(0);
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
    hardEnemy3 = createSprite(450,300,10,10);
    hardEnemy3.velocityY = 7;
    hardEnemy3.addAnimation('nErightMove',nERightmove);
    hardEnemy3.addAnimation('nEleftMove',nELeftmove);
    hardEnemy3.addAnimation("nEAttackL",nEAttackL);
    hardEnemy3.addAnimation("nEAttackR",nEAttackR);
    hardEnemy1 = createSprite(800,600,10,10);
    hardEnemy1.velocityX = 7;
    hardEnemy1.addAnimation('nErightMove',nERightmove);
    hardEnemy1.addAnimation('nEleftMove',nELeftmove);
    hardEnemy1.addAnimation("nEAttackL",nEAttackL);
    hardEnemy1.addAnimation("nEAttackR",nEAttackR);
    hardEnemy2 = createSprite(1100,600,10,10);
    hardEnemy2.velocityX = 7;
    hardEnemy2.addAnimation('nErightMove',nERightmove);
    hardEnemy2.addAnimation('nEleftMove',nELeftmove);
    hardEnemy2.addAnimation("nEAttackL",nEAttackL);
    hardEnemy2.addAnimation("nEAttackR",nEAttackR);
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
    treasure.shapeColor = "yellow";
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
    invisibleWall7 = createSprite(1200,600,10,10);
    invisibleWall7.visible = true;
    invisibleWall8 = createSprite(1000,600,10,10);
    invisibleWall8.visible = true;

    hardLevelGroup.add(player);
    hardLevelGroup.add(normalEnemy1);
    hardLevelGroup.add(hardEnemy3);
    hardLevelGroup.add(hardEnemy1);
    hardLevelGroup.add(hardEnemy2);
    hardLevelGroup.add(wall1);
    hardLevelGroup.add(wall2);
    hardLevelGroup.add(wall3);
    hardLevelGroup.add(wall4);
    hardLevelGroup.add(wall5);
    hardLevelGroup.add(wall6);
    hardLevelGroup.add(wall7);
    hardLevelGroup.add(wall8);
    hardLevelGroup.add(wall9);
    hardLevelGroup.add(wall10);
    hardLevelGroup.add(treasure);
    hardLevelGroup.add(invisibleWall1);
    hardLevelGroup.add(invisibleWall2);
    hardLevelGroup.add(invisibleWall3);
    hardLevelGroup.add(invisibleWall4);
    hardLevelGroup.add(invisibleWall5);
    hardLevelGroup.add(invisibleWall6);
    hardLevelGroup.add(invisibleWall7);
    hardLevelGroup.add(invisibleWall8);
}
function veryHardLevelMoves(){
    normalEnemy1.bounceOff(invisibleWall1);
    normalEnemy1.changeAnimation('nErightMove');
    normalEnemy1.bounceOff(invisibleWall2);
    normalEnemy1.changeAnimation('nEleftMove');
   hardEnemy3.bounceOff(invisibleWall3);
    hardEnemy3.bounceOff(invisibleWall4);
    hardEnemy1.bounceOff(invisibleWall5);
    hardEnemy1.changeAnimation('nErightMove');
    hardEnemy1.bounceOff(invisibleWall6);
    hardEnemy1.changeAnimation('nEleftMove');
    hardEnemy2.bounceOff(invisibleWall8);
    hardEnemy2.changeAnimation('nErightMove');
    hardEnemy2.bounceOff(invisibleWall7);
    hardEnemy2.changeAnimation('nEleftMove');
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
function veryHardLevelMovement(){
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
function veryHardLevelAttack(){
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
        text("Game Over",500,500);
        retryButton = createButton("Retry");
        retryButton.position(500,500);
        player.hide();
        retryButton.mousePressed(()=>{
            retryButton.visible = false;
            gameState = "beginner";
            subGameState = 1;
    })}
    if(player.x-hardEnemy3.x<=100){
        hardEnemy3.changeAnimation(nEAttackL);
        text("Game Over",500,500);
        retryButton = createButton("Retry");
        retryButton.position(500,500);
        player.hide();
        retryButton.mousePressed(()=>{
            retryButton.visible = false;
            gameState = "beginner";
            subGameState = 1;
    })}
    if(player.x-hardEnemy1.x<=100){
        hardEnemy1.changeAnimation(nEAttackL);
        text("Game Over",500,500);
        retryButton = createButton("Retry");
        retryButton.position(500,500);
        player.hide();
        retryButton.mousePressed(()=>{
            retryButton.visible = false;
            gameState = "beginner";
            subGameState = 1;
    })}
    if(player.x-hardEnemy2.x<=100){
        hardEnemy2.changeAnimation(nEAttackL);
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