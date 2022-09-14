var heroes = [];

var names = ["Bob", "Joe"];

var heroPictures = [document.getElementById("hero1")];

var possibleEnemies = [[{
  name: "Goblin",
  level: 0,
  stats: [{
    id: "Max health",
    value: 7,
  },{
    id: "Max energy",
    value: 0,
  },{
    id: "Strength",
    value: 2,
  },{
    id: "Dexterity",
    value: 5,
  },{
    id: "Defence",
    value: 1,
  },{
    id: "Speed",
    value: 0,
  },{
    id: "Healing",
    value: 0,
  }],
  health: 7,
  image: document.getElementById("image"),
  drops: [items.head[0], items.body[0], items.hand[0]],
  dropNum: 1
}],[{
  name: "Boblin",
  level: 1,
  stats: [{
    id: "Max health",
    value: 7,
  },{
    id: "Max energy",
    value: 0,
  },{
    id: "Strength",
    value: 2,
  },{
    id: "Dexterity",
    value: 5,
  },{
    id: "Defence",
    value: 1,
  },{
    id: "Speed",
    value: 0,
  },{
    id: "Healing",
    value: 0,
  }],
  health: 7,
  image: document.getElementById("image"),
  drops: [items.head[0], items.body[0], items.hand[0]],
  dropNum: 1
}]];

var enemies = [];
