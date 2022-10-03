function randomBetween(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeEnemies(){
  var numEnemies = randomBetween(constants.enemyMin, constants.enemyMax);
  var level = Math.floor(game.room / constants.enemyRoomsPerlevel);
  if(level > possibleEnemies.length - 1){
    level = possibleEnemies.length - 1;
  }
  for(var i = 0; i < numEnemies; i++){
    enemies.push({...possibleEnemies[level][Math.floor(Math.random() * possibleEnemies[level].length)]});
  }
}

function createHeroes(){
  for(var i = 0; i < constants.startNumHeroes; i++){
    heroes.push({
      name: names[Math.floor(Math.random() * names.length)],
      level: 0,
      levelsUsed: 0,
      stats: [{
        id: "Max health",
        value: 20,
        increase: 3,
        max: 1000
      },{
        id: "Max energy",
        value: 50,
        increase: 5,
        max: 1000
      },{
        id: "Strength",
        value: 5,
        increase: 1,
        max: 1000
      },{
        id: "Dexterity",
        value: 0,
        increase: 2,
        max: 60
      },{
        id: "Defence",
        value: 1,
        increase: 1,
        max: 1000
      },{
        id: "Speed",
        value: 1,
        increase: 1,
        max: 1000
      },{
        id: "Healing",
        value: 5,
        increase: 5,
        max: 1000
      }],
      health: 20,
      energy: 50,
      image: heroPictures[Math.floor(Math.random() * heroPictures.length)],
      head: null,
      body: null,
      hand1: null,
      hand2: null,
      defending: false
    });
  }
}

function start(){
  randomizeEnemies();
  createHeroes();
}
