function updateDodge(){
  for(var i = 0; i < dodge.length; i++){
    if(dodge[i].size <= 0){
      dodge.splice(i, 1);
    } else {
      dodge[i].size -= display.battleDodgeShrink;
      dodge[i].x += display.battleDodgeShrink;
      dodge[i].y += display.battleDodgeShrink / 2;
      dodge[i].y -= display.battleDodgeMoveSpeed;
    }
  }
}

function checkBattleEnd(){
  if(enemies.length == 0){
    game.state = "room";
    for(var i = 0; i < heroes.length; i++){
      heroes[i].level++;
    }
  }
}

function enemyDropItems(enemy){
  var numDrops = randomBetween(enemies[enemy].dropMin, enemies[enemy].dropMax);

  if(numDrops > 0){
    for(var i = 0; i < numDrops; i++){
      var num = Math.floor(Math.random() * enemies[enemy].drops.length);
      roomFloor[game.room].push(enemies[enemy].drops[num]);
    }
  }
}

function checkDeath(){
  for(var i = 0; i < heroes.length; i++){
    if(heroes[i].health <= 0){
      heroes.splice(i, 1);
    }
  }
  for(var i = 0; i < enemies.length; i++){
    if(enemies[i].health <= 0){
      enemyDropItems(i);
      enemies.splice(i, 1);
      checkBattleEnd();
    }
  }
}

function turn(){
  var allCharacters = [];

  for(var i = 0; i < heroes.length; i++){
    allCharacters.push([heroes[i].stats[5].value, i, "hero"]);
  }
  for(var i = 0; i < enemies.length; i++){
    allCharacters.push([enemies[i].stats[5].value, i, "enemy"]);
  }
  allCharacters.sort(function(a, b){return b[0] - a[0]});

  if(game.turn >= allCharacters.length){
    game.turn = 0;
  }

  if(allCharacters[game.turn][2] == "hero"){
    drawActionButtons(allCharacters[game.turn][1]);
    game.playerTurn = allCharacters[game.turn][1];
    game.turnCharacterType = "hero";
  }
  if(allCharacters[game.turn][2] == "enemy"){
    game.turnTime--;
    if(game.turnTime < 0){
      game.turnTime = constants.enemyTurnTime;
      game.turnCharacterType = "enemy";
      game.enemyTurn = allCharacters[game.turn][1];
      game.enemySelectedAttack = Math.floor(Math.random() * heroes.length);
    } else if(game.turnTime == 0){
      attack(enemies[allCharacters[game.turn][1]], heroes[game.enemySelectedAttack], game.enemySelectedAttack, "hero");
      game.turn++;
      game.enemySelectedAttack = null;
    }
  }
}

function attack(a, d, dn, dt){
  dodgeChance = Math.random() * 100;
  defense = d.stats[4].value;
  if(d.defending){
    defense *= constants.defendMultiplyer;
  }
  if(dodgeChance > d.stats[3].value){
    if(defense < a.stats[2].value){
      d.health -= (a.stats[2].value - defense);
    }
  } else if(dt == "hero"){
    dodge.push({
      size: display.battleDodgeFontSize,
      x: display.heroXOffset + display.heroSpacing * dn + display.cardW * dn + display.battleDodgeXOffset,
      y: display.ch - display.heroYOffset - display.cardH + display.battleDodgeYOffset
    });
  } else {
    dodge.push({
      size: display.battleDodgeFontSize,
      x: display.heroXOffset + display.heroSpacing * dn + display.cardW * dn + display.battleDodgeXOffset,
      y: display.heroYOffset + display.battleDodgeYOffset
    });
  }
  checkDeath();
}

function checkPlayerAttack(cx, cy){
  if(game.selectedAction == "attack"){
    for(var i = 0; i < enemies.length; i++){
      var x = display.heroXOffset + display.heroSpacing * i + display.cardW * i;
      var y = display.heroYOffset;
      if(checkButtonClick(x, y, display.cardW, display.cardH, cx, cy)){
        game.selectedAction = null;
        heroes[game.playerTurn].energy -= constants.attackEnergyCost;
        game.turn++;
        heroes[game.playerTurn].defending = false;
        attack(heroes[game.playerTurn], enemies[i], i, "enemy");
      }
    }
  }
}

function checkPlayerHeal(cx, cy){
  if(game.selectedAction == "heal"){
    for(var i = 0; i < heroes.length; i++){
      var x = display.heroXOffset + display.heroSpacing * i + display.cardW * i;
      var y = display.ch - display.heroYOffset - display.cardH;
      if(checkButtonClick(x, y, display.cardW, display.cardH, cx, cy)){
        if(heroes[i] != heroes[game.playerTurn]){
          for(var j = 0; heroes[i].health < heroes[i].stats[0].value && j < heroes[game.playerTurn].stats[6].value; j++){
            heroes[i].health++;
          }
          heroes[game.playerTurn].defending = false;
          game.selectedAction = null;
          heroes[game.playerTurn].energy -= constants.healEnergyCost;
          game.turn++;
        }
      }
    }
  }
}

function checkContinueButtonClick(cx, cy){
  if(checkButtonClick(display.continueButtonXOffset, display.continueButtonYOffset, display.continueButtonW, display.continueButtonH, cx, cy)){
    game.room++;
    game.turn = 0;
    roomFloor[game.room] = [];
    game.state = "battle";
    randomizeEnemies();
  }
}

function checkActionButtonClick(cx, cy){
  for(var i = 0; i < display.battleActionButtonText.length; i++){
    var x = display.cardW * game.playerTurn + display.heroSpacing * game.playerTurn + display.heroXOffset;
    var y = display.ch - display.heroYOffset - display.cardH + display.battleActionButtonYOffset;
    if(checkButtonClick(x, y + display.battleActionButtonH * i, display.cardW, display.battleActionButtonH, cx, cy)){
      if(i == 0 && heroes[game.playerTurn].energy >= constants.attackEnergyCost){
        game.selectedAction = "attack";
      } else
      if(i == 1 && heroes[game.playerTurn].energy >= constants.defendEnergyCost){
        heroes[game.playerTurn].energy -= constants.defendEnergyCost;
        heroes[game.playerTurn].defending = true;
        game.selectedAction = null;
        game.turn++;
      } else
      if(i == 2 && heroes[game.playerTurn].energy >= constants.healEnergyCost){
        game.selectedAction = "heal";
      } else
      if(i == 3){
        for(var j = 0; heroes[game.playerTurn].energy < heroes[game.playerTurn].stats[1].value; j++){
          heroes[game.playerTurn].energy++;
        }
        game.selectedAction = null;
        game.turn++;
      }
    }
  }
}

function checkEquipmentClick(cx, cy){
  var num = checkGridClick(display.invEquipmentGridXOffset,
  display.invEquipmentGridYOffset,
  display.invEquipmentGridW,
  display.invEquipmentGridH,
  cx,
  cy);
  if(num != null){
    switch(num){
      case 0:
        if(heroes[game.inventoryCharacter].head != null){
          changeStats(heroes[game.inventoryCharacter].head, -1);
          roomFloor[game.room].push(heroes[game.inventoryCharacter].head);
          heroes[game.inventoryCharacter].head = null;
        }
        break;
      case 1:
        if(heroes[game.inventoryCharacter].hand1 != null){
          changeStats(heroes[game.inventoryCharacter].hand1, -1);
          roomFloor[game.room].push(heroes[game.inventoryCharacter].hand1);
          heroes[game.inventoryCharacter].hand1 = null;
        }
        break;
      case 2:
        if(heroes[game.inventoryCharacter].body != null){
          changeStats(heroes[game.inventoryCharacter].body, -1);
          roomFloor[game.room].push(heroes[game.inventoryCharacter].body);
          heroes[game.inventoryCharacter].body = null;
        }
        break;
      case 3:
        if(heroes[game.inventoryCharacter].hand2 != null){
          changeStats(heroes[game.inventoryCharacter].hand2, -1);
          roomFloor[game.room].push(heroes[game.inventoryCharacter].hand2);
          heroes[game.inventoryCharacter].hand2 = null;
        }
        break;
    }
  }
}

function checkFloorGridHover(){
  var num = checkGridHover(display.invFloorGridXOffset,
  display.invFloorGridYOffset,
  display.invFloorGridW,
  display.invFloorGridH);
  if(roomFloor[game.room][num] != null){
    drawDropDown(roomFloor[game.room][num].stats, roomFloor[game.room][num].id);
  }
}

function checkEnemyCardHover(){
  for(var i = 0; i < enemies.length; i++){
    if(checkButtonClick(display.heroXOffset + display.cardW * i + display.heroSpacing * i,
    display.heroYOffset,
    display.cardW,
    display.cardH,
    game.mouseX,
    game.mouseY)){
      if(enemies[i].nameLine2 == null){
        drawDropDown(enemies[i].stats, enemies[i].name);
      } else {
        drawDropDown(enemies[i].stats, enemies[i].name + " " + enemies[i].nameLine2);
      }
    }
  }
}

function checkEquipmentGridHover(){
  var num = checkGridHover(display.invEquipmentGridXOffset,
  display.invEquipmentGridYOffset,
  display.invEquipmentGridW,
  display.invEquipmentGridH);
  if(num == 0 && heroes[game.inventoryCharacter].head != null){
    drawDropDown(heroes[game.inventoryCharacter].head.stats, heroes[game.inventoryCharacter].head.id);
  } else if(num == 1 && heroes[game.inventoryCharacter].hand1 != null){
    drawDropDown(heroes[game.inventoryCharacter].hand1.stats, heroes[game.inventoryCharacter].hand1.id);
  } else if(num == 2 && heroes[game.inventoryCharacter].body != null){
    drawDropDown(heroes[game.inventoryCharacter].body.stats, heroes[game.inventoryCharacter].body.id);
  } else if(num == 3 && heroes[game.inventoryCharacter].hand2 != null){
    drawDropDown(heroes[game.inventoryCharacter].hand2.stats, heroes[game.inventoryCharacter].hand2.id);
  }
}

function checkGridHover(x, y, w, h){
  for(var i = 0; i < w; i++){
    for(var j = 0; j < h; j++){
      if(game.mouseX >= x + display.invBoxW * i + display.invBoxSpacing * i
      && game.mouseX <= x + display.invBoxW * i + display.invBoxSpacing * i + display.invBoxW
      && game.mouseY >= y + display.invBoxH * j + display.invBoxSpacing * j
      && game.mouseY <= y + display.invBoxH * j + display.invBoxSpacing * j + display.invBoxH){
        return j * w + i;
      }
    }
  }
  return null;
}

function checkGridClick(x, y, w, h, cx, cy){
  for(var i = 0; i < w; i++){
    for(var j = 0; j < h; j++){
      if(cx >= x + display.invBoxW * i + display.invBoxSpacing * i
      && cx <= x + display.invBoxW * i + display.invBoxSpacing * i + display.invBoxW
      && cy >= y + display.invBoxH * j + display.invBoxSpacing * j
      && cy <= y + display.invBoxH * j + display.invBoxSpacing * j + display.invBoxH){
        return j * w + i;
      }
    }
  }
  return null;
}

function changeStats(gear, multiply){
  for(var i = 0; i < gear.stats.length; i++){
    heroes[game.inventoryCharacter].stats[i].value += gear.stats[i].value * multiply;
  }
}

function checkInvFloorClick(cx, cy){
  var num = checkGridClick(display.invFloorGridXOffset, display.invFloorGridYOffset, display.invFloorGridW, display.invFloorGridH, cx, cy);
  if(num != null && roomFloor[game.room][num] != null){
    if(roomFloor[game.room][num].type == "head" && heroes[game.inventoryCharacter].head == null){
      changeStats(roomFloor[game.room][num], 1);
      heroes[game.inventoryCharacter].head = roomFloor[game.room][num];
      roomFloor[game.room].splice(num,1);
    } else if(roomFloor[game.room][num].type == "body" && heroes[game.inventoryCharacter].body == null){
      changeStats(roomFloor[game.room][num], 1);
      heroes[game.inventoryCharacter].body = roomFloor[game.room][num];
      roomFloor[game.room].splice(num,1);
    } else if(roomFloor[game.room][num].type == "hand"){
      if(heroes[game.inventoryCharacter].hand1 == null){
        changeStats(roomFloor[game.room][num], 1);
        heroes[game.inventoryCharacter].hand1 = roomFloor[game.room][num];
        roomFloor[game.room].splice(num,1);
      } else if(heroes[game.inventoryCharacter].hand2 == null){
        changeStats(roomFloor[game.room][num], 1);
        heroes[game.inventoryCharacter].hand2 = roomFloor[game.room][num];
        roomFloor[game.room].splice(num,1);
      }
    }
  }
}

function checkInvBackButton(cx, cy){
  if(checkButtonClick(display.invBackButtonXOffset, display.invBackButtonYOffset, display.invBackButtonW, display.invBackButtonH, cx, cy)){
    game.state = "room";
  }
}

function checkInvStatUpgradeButton(cx, cy){
  if(heroes[game.inventoryCharacter].levelsUsed < heroes[game.inventoryCharacter].level){
    for(var i = 0; i < heroes[game.inventoryCharacter].stats.length; i++){
      if(checkButtonClick(display.invStatUpgradeXOffset,
      display.invStatUpgradeYOffset + display.invStatUpgradeSpacing * i + display.invStatUpgradeH * i,
      display.invStatUpgradeW, display.invStatUpgradeH, cx, cy) && heroes[game.inventoryCharacter].stats[i].value < heroes[game.inventoryCharacter].stats[i].max){
        heroes[game.inventoryCharacter].stats[i].value += heroes[game.inventoryCharacter].stats[i].increase;
        heroes[game.inventoryCharacter].levelsUsed++;
      }
    }
  }
}

function checkCardInvButton(cx, cy){
  for(var i = 0; i < heroes.length; i++){
    if(checkButtonClick(display.heroXOffset + display.heroSpacing * i + display.cardW * i + display.cardInvButtonXOffset,
    display.ch - display.heroYOffset - display.cardH + display.cardInvButtonYOffset,
    display.cardInvButtonW,
    display.cardInvButtonH,
    cx,
    cy)){
      game.state = "inventory";
      game.inventoryCharacter = i;
    }
  }
}

function checkButtonClick(x, y, w, h, cx, cy){
  if(cx >= x && cx <= x + w && cy >= y && cy <= y + h){
    return true;
  }
}

function updateMouse(event){
  game.mouseX = event.offsetX;
  game.mouseY = event.offsetY;
}
