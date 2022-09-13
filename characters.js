var heroes = [];

var names = ["Bob", "Joe"];

var heroPictures = [document.getElementById("hero1")];

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

var enemies = [];
