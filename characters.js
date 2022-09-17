var heroes = [];

var names = ["Bob", "Joe"];

var heroPictures = [document.getElementById("hero1"), document.getElementById("hero2")];

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
  dropMin: 1,
  dropMax: 1
}],[{
  name: "Stone Golem",
  level: 1,
  stats: [{
    id: "Max health",
    value: 12,
  },{
    id: "Max energy",
    value: 0,
  },{
    id: "Strength",
    value: 5,
  },{
    id: "Dexterity",
    value: 0,
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
  health: 15,
  image: document.getElementById("image"),
  drops: [items.head[1]],
  dropMin: 0,
  dropMax: 1
},{
  name: "Apprentice",
  level: 1,
  stats: [{
    id: "Max health",
    value: 10,
  },{
    id: "Max energy",
    value: 0,
  },{
    id: "Strength",
    value: 6,
  },{
    id: "Dexterity",
    value: 10,
  },{
    id: "Defence",
    value: 2,
  },{
    id: "Speed",
    value: 5,
  },{
    id: "Healing",
    value: 0,
  }],
  health: 10,
  image: document.getElementById("image"),
  drops: [items.body[1]],
  dropMin: 0,
  dropMax: 1
}]];

var enemies = [];
