function randomBetween(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomName(){
  var one = ["e","a","i","o","u","ea","ie","ee", "oo", "ae", "ou"];
  var two = ["qu","t","p","d","g","k","x","c","v","b","h","ch", "ck","w","r","y","s","f","l","z","n","m"];

  function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomL(l){
    return l[Math.floor(Math.random() * l.length)];
  }

  var numNames = 1000;

  var name = "";

  var numLetters = random(3,5);

  var startOne = random(1,2);

  if(startOne == 1){
    name += randomL(one);
    numLetters -= 1;
  }

  for(var i = 0; i < numLetters; i++){
    var l = random(1,2);

    if(l == 1){
      name += randomL(two);
      name += randomL(one);
      i++;
    } else if(l == 2 && i > 0){
      name += randomL(two);
      name += randomL(two);
      name += randomL(one);
      i+=2
    } else {
      i--;
    }
  }

  capName = name.substr(0, 1);
  capNameOne = capName.toUpperCase();
  name = name.replace(capName, capNameOne);

  return(name);
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
      name: randomName(),
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
