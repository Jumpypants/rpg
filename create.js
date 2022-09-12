function randomizeEnemies(){
  var numEnemies = Math.floor(Math.random() * constants.enemyMax) + constants.enemyMin;

  for(var i = 0; i < numEnemies; i++){
    enemies.push(possibleEnemies[constants.enemyLevel][Math.floor(Math.random() * possibleEnemies[constants.enemyLevel].length)]);
  }
}

function start(){
  randomizeEnemies();
}
