function randomizeEnemies(){
  var numEnemies = Math.ceil(Math.random() * (constants.enemyMax - constants.enemyMin + 1));

  for(var i = 0; i < numEnemies; i++){
    enemies.push(possibleEnemies[constants.enemyLevel][Math.floor(Math.random() * possibleEnemies[constants.enemyLevel].length)]);
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
        increase: 5
      },{
        id: "Max energy",
        value: 50,
        increase: 5
      },{
        id: "Strength",
        value: 5,
        increase: 1
      },{
        id: "Dexterity",
        value: 0,
        increase: 2
      },{
        id: "Defence",
        value: 1,
        increase: 1
      },{
        id: "Speed",
        value: 0,
        increase: 1
      },{
        id: "Healing",
        value: 5,
        increase: 5
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
