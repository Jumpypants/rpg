function drawBg(){
  if(possibleEnemies.length * constants.enemyRoomsPerlevel < game.room){
    var image = possibleEnemies.length * constants.enemyRoomsPerlevel;
  } else {
    var image = display.backgrounds[Math.floor(game.room / constants.enemyRoomsPerlevel)];
  }
  ctx.drawImage(image, 0, 0, display.cw, display.ch);
}

function drawGameOver(){

}

function drawHeroes(){
  for(var i = 0; i < heroes.length; i++){
    var x = display.heroXOffset + display.heroSpacing * i + display.cardW * i;
    var y = display.ch - display.heroYOffset - display.cardH;
    //cards
    ctx.drawImage(display.cardImage, x, y, display.cardW, display.cardH);
    if(game.state == "battle"){
      if(game.enemySelectedAttack == i && game.turnCharacterType == "enemy"){
        ctx.lineWidth = display.battleChooseCharacterBorderW;
        ctx.strokeStyle = display.battleChooseCharacterBorderCol;
        ctx.beginPath();
        ctx.rect(display.heroXOffset + display.heroSpacing * i + display.cardW * i, y, display.cardW, display.cardH);
        ctx.stroke();
      }
      if(game.turnCharacterType == "hero"){
        ctx.lineWidth = display.battleCharacterTurnBorderW;
        ctx.strokeStyle = display.battleCharacterTurnBorderCol;
        ctx.beginPath();
        ctx.rect(display.heroXOffset + display.heroSpacing * game.playerTurn + display.cardW * game.playerTurn, y, display.cardW, display.cardH);
        ctx.stroke();
      }
      if(game.turnCharacterType == "hero" && heroes[i] != heroes[game.playerTurn] && game.selectedAction == "heal"){
        ctx.lineWidth = display.battleCharacterHealBorderW;
        ctx.strokeStyle = display.battleCharacterHealBorderCol;
        ctx.beginPath();
        ctx.rect(display.heroXOffset + display.heroSpacing * i + display.cardW * i, y, display.cardW, display.cardH);
        ctx.stroke();
      }
    }
    //name
    ctx.fillStyle = display.cardNameCol;
    ctx.font = "" + display.cardNameFontSize + "px " + display.font;
    ctx.fillText(heroes[i].name, x + display.cardNameXOffset, y + display.cardNameYOffset);
    //level
    ctx.fillStyle = display.cardLevelCol;
    ctx.font = "" + display.cardLevelFontSize + "px " + display.font;
    ctx.fillText("Level: " + heroes[i].level, x + display.cardLevelXOffset, y + display.cardLevelYOffset);
    //image
    ctx.drawImage(heroes[i].image, x + display.cardImageXOffset, y + display.cardImageYOffset, display.cardImageW, display.cardImageH);
    ctx.lineWidth = display.cardImageBorderW;
    ctx.strokeStyle = display.cardImageBoderCol;
    ctx.beginPath();
    ctx.rect(x + display.cardImageXOffset, y + display.cardImageYOffset, display.cardImageW, display.cardImageH);
    ctx.stroke();
    //health
    ctx.fillStyle = display.cardHealthCol;
    ctx.font = "" + display.cardHealthFontSize + "px " + display.font;
    ctx.fillText("Health: " + heroes[i].health + "/" + heroes[i].stats[0].value,
    x + display.cardHealthXOffset,
    y + display.cardHealthYOffset);
    //energy
    ctx.fillStyle = display.cardEnergyCol;
    ctx.font = "" + display.cardEnergyFontSize + "px " + display.font;
    ctx.fillText("Energy: " + heroes[i].energy + "/" + heroes[i].stats[1].value,
    x + display.cardEnergyXOffset,
    y + display.cardEnergyYOffset);
    //inventory button
    if(game.state == "room"){
      ctx.fillStyle = display.cardInvButtonCol;
      ctx.fillRect(x + display.cardInvButtonXOffset, y + display.cardInvButtonYOffset, display.cardInvButtonW, display.cardInvButtonH);
      //inventory button text
      ctx.fillStyle = display.cardInvButtonTextCol;
      ctx.font = "" + display.cardInvButtonTextFontSize + "px " + display.font;
      ctx.fillText("Inventory", x + display.cardInvButtonTextXOffset, y + display.cardInvButtonTextYOffset);
    }
    //defend icon
    if(heroes[i].defending && game.state == "battle"){
    ctx.drawImage(display.battleCharacterDefendImage,
      x + display.battleCharacterDefendImageXOffset,
      y + display.battleCharacterDefendImageYOffset,
      display.battleCharacterDefendImageW,
      display.battleCharacterDefendImageH);
    }
  }
}

function drawEnemies(){
  for(var i = 0; i < enemies.length; i++){
    var x = display.heroXOffset + display.heroSpacing * i + display.cardW * i;
    var y = display.heroYOffset;
    //cards
    ctx.drawImage(display.cardImage, x, y, display.cardW, display.cardH);

    if(game.selectedAction == "attack"){
      ctx.lineWidth = display.battleChooseCharacterBorderW;
      ctx.strokeStyle = display.battleChooseCharacterBorderCol;
      ctx.beginPath();
      ctx.rect(x, y, display.cardW, display.cardH);
      ctx.stroke();
    }
    if(game.turnCharacterType == "enemy"){
      ctx.lineWidth = display.battleCharacterTurnBorderW;
      ctx.strokeStyle = display.battleCharacterTurnBorderCol;
      ctx.beginPath();
      ctx.rect(display.heroXOffset + display.heroSpacing * game.enemyTurn + display.cardW * game.enemyTurn, y, display.cardW, display.cardH);
      ctx.stroke();
    }
    //name
    ctx.fillStyle = display.cardNameCol;
    ctx.font = "" + display.cardNameFontSize + "px " + display.font;
    if(enemies[i].nameLine2 == null){
      ctx.fillText(enemies[i].name, x + display.cardNameXOffset, y + display.cardNameYOffset);
    } else {
      ctx.fillText(enemies[i].name, x + display.cardNameXOffset, y + display.cardNameYOffset / 2);
      ctx.fillText(enemies[i].nameLine2, x + display.cardNameXOffset, y + display.cardNameYOffset);
    }
    //level
    ctx.fillStyle = display.cardLevelCol;
    ctx.font = "" + display.cardLevelFontSize + "px " + display.font;
    ctx.fillText("Level: " + enemies[i].level, x + display.cardLevelXOffset, y + display.cardLevelYOffset);
    //image
    ctx.drawImage(enemies[i].image, x + display.cardImageXOffset, y + display.cardImageYOffset, display.cardImageW, display.cardImageH);
    ctx.lineWidth = display.cardImageBorderW;
    ctx.strokeStyle = display.cardImageBoderCol;
    ctx.beginPath();
    ctx.rect(x + display.cardImageXOffset, y + display.cardImageYOffset, display.cardImageW, display.cardImageH);
    ctx.stroke();
    //health
    ctx.fillStyle = display.cardHealthCol;
    ctx.font = "" + display.cardHealthFontSize + "px " + display.font;
    ctx.fillText("Health: " + enemies[i].health + "/" + enemies[i].stats[0].value,
    x + display.cardHealthXOffset,
    y + display.cardHealthYOffset);
  }
}

function drawInventory(){
  //bg
  ctx.fillStyle = display.invBgCol;
  ctx.fillRect(display.invBgXOffset, display.invBgYOffset, display.invBgW, display.invBgH);
  //equipment slots
  drawGrid(display.invEquipmentGridXOffset,
  display.invEquipmentGridYOffset,
  display.invEquipmentGridW,
  display.invEquipmentGridH,
  display.invEquipmentBoxCol);
  //character name
  ctx.fillStyle = display.invNameCol;
  ctx.font = "" + display.invNameFontSize + "px " + display.font;
  ctx.fillText(heroes[game.inventoryCharacter].name, display.invNameXOffset, display.invNameYOffset);
  //character image
  ctx.drawImage(heroes[game.inventoryCharacter].image,
  display.invPlayerImageXOffset,
  display.invPlayerImageYOffset,
  display.invPlayerImageW,
  display.invPlayerImageH);
  //inventory grid
  drawGrid(display.invFloorGridXOffset,
  display.invFloorGridYOffset,
  display.invFloorGridW,
  display.invFloorGridH,
  display.invFloorBoxCol);
  //level
  ctx.fillStyle = display.invLevelCol;
  ctx.font = "" + display.invLevelFontSize + "px " + display.font;
  ctx.fillText("Level: " + heroes[game.inventoryCharacter].levelsUsed + "/" + heroes[game.inventoryCharacter].level,
  display.invLevelXOffset,
  display.invLevelYOffset);
  //stats
  for(var i = 0; i < heroes[game.inventoryCharacter].stats.length; i++){
    ctx.fillStyle = display.invStatsCol;
    ctx.font = "" + display.invStatsFontSize + "px " + display.font;
    ctx.fillText(heroes[game.inventoryCharacter].stats[i].id + ": " + heroes[game.inventoryCharacter].stats[i].value,
    display.invStatsXOffset,
    display.invStatsYOffset + display.invStatsSpacing * i + display.invStatsFontSize * i);
  }
  //stat upgrade buttons
  for(var i = 0; i < heroes[game.inventoryCharacter].stats.length; i++){
    if(heroes[game.inventoryCharacter].levelsUsed < heroes[game.inventoryCharacter].level
      && heroes[game.inventoryCharacter].stats[i].value < heroes[game.inventoryCharacter].stats[i].max){
      ctx.fillStyle = display.invStatUpgradeCol;
      ctx.fillRect(display.invStatUpgradeXOffset,
      display.invStatUpgradeYOffset + display.invStatUpgradeSpacing * i + display.invStatUpgradeH * i,
      display.invStatUpgradeW, display.invStatUpgradeH);

      ctx.fillStyle = display.invStatUpgradeTextCol;
      ctx.font = "" + display.invStatUpgradeTextFontSize + "px " + display.font;
      ctx.fillText("+",
      display.invStatUpgradeTextXOffset,
      display.invStatUpgradeTextYOffset + display.invStatUpgradeTextSpacing * i + display.invStatUpgradeTextFontSize * i);
    }
  }
  //head item
  if(heroes[game.inventoryCharacter].head != null){
    ctx.drawImage(heroes[game.inventoryCharacter].head.image,
    display.invHeadImageXOffset,
    display.invHeadImageYOffset,
    display.invHeadImageW,
    display.invHeadImageH);
  }
  //body item
  if(heroes[game.inventoryCharacter].body != null){
    ctx.drawImage(heroes[game.inventoryCharacter].body.image,
    display.invBodyImageXOffset,
    display.invBodyImageYOffset,
    display.invBodyImageW,
    display.invBodyImageH);
  }
  //hand1 item
  if(heroes[game.inventoryCharacter].hand1 != null){
    ctx.drawImage(heroes[game.inventoryCharacter].hand1.image,
    display.invHand1ImageXOffset,
    display.invHand1ImageYOffset,
    display.invHand1ImageW,
    display.invHand1ImageH);
  }
  //hand2 item
  if(heroes[game.inventoryCharacter].hand2 != null){
    ctx.drawImage(heroes[game.inventoryCharacter].hand2.image,
    display.invHand2ImageXOffset,
    display.invHand2ImageYOffset,
    display.invHand2ImageW,
    display.invHand2ImageH);
  }
  //floor items
  for(var i = 0; i < display.invFloorGridW; i++){
    for(var j = 0; j < display.invFloorGridH; j++){
      if(roomFloor[game.room][j * display.invFloorGridW + i] != null){
        ctx.drawImage(roomFloor[game.room][j * display.invFloorGridW + i].image,
        display.invFloorGridXOffset + display.invBoxW * i + display.invBoxSpacing * i,
        display.invFloorGridYOffset + display.invBoxH * j + display.invBoxSpacing * j,
        display.invBoxW,
        display.invBoxH);
      }
    }
  }
  //back button
  ctx.fillStyle = display.invBackButtonCol;
  ctx.fillRect(display.invBackButtonXOffset, display.invBackButtonYOffset, display.invBackButtonW, display.invBackButtonH);
  ctx.fillStyle = display.invBackButtonTextCol;
  ctx.font = "" + display.invBackButtonTextFontSize + "px " + display.font;
  ctx.fillText("Back", display.invBackButtonTextXOffset, display.invBackButtonTextYOffset);
}

function drawGrid(x, y, w, h, col){
  for(var i = 0; i < w; i++){
    for(var j = 0; j < h; j++){
      ctx.fillStyle = col;
      ctx.fillRect(x + display.invBoxW * i + display.invBoxSpacing * i,
      y + display.invBoxH * j + display.invBoxSpacing * j,
      display.invBoxW,
      display.invBoxH);
    }
  }
}

function drawDropDown(list, title){
  var x = game.mouseX;
  var y = game.mouseY;
  var w = display.dropDownW;
  var h = display.dropDownFontSize * list.length
  + display.dropDownSpacing * list.length
  + display.dropDownTextYOffset;

  if(x + w > display.cw){
    x -= w;
  }
  if(y + h > display.ch){
    y -= h;
  }

  ctx.fillStyle = display.dropDownCol;
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = display.dropDownTextCol;
  ctx.font = "" + display.dropDownTitleFontSize + "px " + display.font;
  ctx.fillText(title, x + display.dropDownTitleXOffset, y + display.dropDownTextYOffset);
  ctx.font = "" + display.dropDownFontSize + "px " + display.font;
  for(var i = 0; i < list.length; i++){
    ctx.fillText(list[i].id + ": " + list[i].value,
    x + display.dropDownTextXOffset,
    y + display.dropDownTextYOffset + display.dropDownFontSize * (i + 1) + display.dropDownSpacing * i);
  }
}

function drawActionButtons(hero){
  var x = display.cardW * hero + display.heroSpacing * hero + display.heroXOffset;
  var y = display.ch - display.heroYOffset - display.cardH + display.battleActionButtonYOffset;
  for(var j = 0; j < display.battleActionButtonText.length; j++){
    ctx.fillStyle = display.battleActionButtonCol;
    ctx.fillRect(x, y + display.battleActionButtonH * j, display.cardW, display.battleActionButtonH);
    ctx.fillStyle = display.battleActionButtonTextCol;
    ctx.font = "" + display.battleActionButtonTextFontSize + "px " + display.font;
    ctx.fillText(display.battleActionButtonText[j],
    x + display.battleActionButtonTextXOffset,
    y + display.battleActionButtonTextYOffset + display.battleActionButtonH * j + display.battleActionButtonTextFontSize);
  }
}

function drawContinueButton(){
  ctx.fillStyle = display.continueButtonCol;
  ctx.fillRect(display.continueButtonXOffset, display.continueButtonYOffset, display.continueButtonW, display.continueButtonH);
  ctx.fillStyle = display.continueButtonTextCol;
  ctx.font = "" + display.continueButtonTextFontSize + "px " + display.font;
  ctx.fillText(display.continueButtonText, display.continueButtonTextXOffset, display.continueButtonTextYOffset);
}

function drawDodge(){
  for(var i = 0; i < dodge.length; i++){
    ctx.fillStyle = display.battleDodgeCol;
    ctx.font = "" + dodge[i].size + "px " + display.font;
    ctx.fillText(display.battleDodgeText, dodge[i].x, dodge[i].y +  dodge[i].size);
  }
}

function drawScore(){
  ctx.fillStyle = display.scoreCol;
  ctx.font = "" + display.scoreFontSize + "px " + display.font;
  ctx.fillText(display.scoreText + game.room, display.scoreXOffset, display.scoreYOffset);

  ctx.fillStyle = display.levelCol;
  ctx.font = "" + display.levelFontSize + "px " + display.font;
  ctx.fillText(display.levelText + Math.floor(game.room / constants.enemyRoomsPerlevel), display.levelXOffset, display.levelYOffset);
}
