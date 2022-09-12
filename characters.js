var heroes = [{
  name: "Joe",
  level: 5,
  levelsUsed: 0,
  stats: [{
    id: "Max health",
    value: 100,
    increase: 1
  },{
    id: "Max energy",
    value: 100,
    increase: 1
  },{
    id: "Strength",
    value: 200,
    increase: 1
  },{
    id: "Dexterity",
    value: 50,
    increase: 1
  },{
    id: "Defence",
    value: 1,
    increase: 1
  },{
    id: "Speed",
    value: 6,
    increase: 1
  },{
    id: "Healing",
    value: 3,
    increase: 1
  }],
  health: 70,
  energy: 85,
  image: document.getElementById("hero1"),
  head: null,
  body: null,
  hand1: null,
  hand2: null,
  defending: false
},{
  name: "Bob",
  level: 5,
  levelsUsed: 0,
  stats: [{
    id: "Max health",
    value: 100,
    increase: 1
  },{
    id: "Max energy",
    value: 100,
    increase: 1
  },{
    id: "Strength",
    value: 200,
    increase: 1
  },{
    id: "Dexterity",
    value: 50,
    increase: 1
  },{
    id: "Defence",
    value: 1,
    increase: 1
  },{
    id: "Speed",
    value: 6,
    increase: 1
  },{
    id: "Healing",
    value: 3,
    increase: 1
  }],
  health: 70,
  energy: 85,
  image: document.getElementById("hero1"),
  head: null,
  body: null,
  hand1: null,
  hand2: null,
  defending: false
}];

var possibleEnemies = [[{
  name: "Goblin",
  level: 5,
  stats: [{
    id: "Max health",
    value: 100,
  },{
    id: "Max energy",
    value: 100,
  },{
    id: "Strength",
    value: 5,
  },{
    id: "Dexterity",
    value: 5,
  },{
    id: "Defence",
    value: 3,
  },{
    id: "Speed",
    value: 5,
  },{
    id: "Healing",
    value: 3,
  }],
  health: 70,
  image: document.getElementById("image"),
  drops: [items.head[0], items.body[0], items.hand[0]],
  dropNum: 1
}]];

var enemies = [{...possibleEnemies[0][0]},{...possibleEnemies[0][0]}];
