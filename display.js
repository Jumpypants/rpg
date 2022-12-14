var display = {
  font: "Arial",

  cw: 1000,
  ch: 600,

  //bg
  backgrounds: [document.getElementById("bg0")],

  //cards
  cardImage: document.getElementById("card"),
  enemyCardImage: document.getElementById("card_enemy"),
  cardW: 180,
  cardH: 265,

  heroXOffset: 30,
  heroYOffset: 30,
  heroSpacing: 30,

  cardNameCol: "black",
  cardNameFontSize: 20,
  cardNameXOffset: 30,
  cardNameYOffset: 35,

  cardLevelCol: "black",
  cardLevelFontSize: 20,
  cardLevelXOffset: 45,
  cardLevelYOffset: 55,

  cardImageXOffset: 20,
  cardImageYOffset: 65,
  cardImageW: 130,
  cardImageH: 80,

  cardImageBorderW: 2,
  cardImageBoderCol: "black",

  cardHealthCol: "black",
  cardHealthFontSize: 20,
  cardHealthXOffset: 15,
  cardHealthYOffset: 170,

  cardEnergyCol: "black",
  cardEnergyFontSize: 20,
  cardEnergyXOffset: 15,
  cardEnergyYOffset: 195,

  cardInvButtonCol: "white",
  cardInvButtonXOffset: 10,
  cardInvButtonYOffset: 210,
  cardInvButtonW: 150,
  cardInvButtonH: 30,

  cardInvButtonTextCol: "black",
  cardInvButtonTextFontSize: 20,
  cardInvButtonTextXOffset: 40,
  cardInvButtonTextYOffset: 230,

  //inventory
  invBgCol: "white",
  invBgXOffset: 10,
  invBgYOffset: 10,
  invBgW: 980,
  invBgH: 580,

  invBoxW: 70,
  invBoxH: 70,
  invBoxSpacing: 20,

  invEquipmentBoxCol: "gray",
  invEquipmentGridXOffset: 50,
  invEquipmentGridYOffset: 150,
  invEquipmentGridW: 2,
  invEquipmentGridH: 2,

  invNameCol: "black",
  invNameFontSize: 50,
  invNameXOffset: 50,
  invNameYOffset: 100,

  invLevelCol: "black",
  invLevelFontSize: 40,
  invLevelXOffset: 260,
  invLevelYOffset: 175,

  invPlayerImageXOffset: 0,
  invPlayerImageYOffset: 300,
  invPlayerImageW: 260,
  invPlayerImageH: 160,

  invFloorBoxCol: "gray",
  invFloorGridXOffset: 550,
  invFloorGridYOffset: 150,
  invFloorGridW: 5,
  invFloorGridH: 5,

  invStatsCol: "black",
  invStatsFontSize: 30,
  invStatsXOffset: 260,
  invStatsYOffset: 210,
  invStatsSpacing: 10,

  invStatUpgradeCol: "gray",
  invStatUpgradeXOffset: 500,
  invStatUpgradeYOffset: 180,
  invStatUpgradeW: 30,
  invStatUpgradeH: 30,
  invStatUpgradeSpacing: 10,

  invStatUpgradeTextCol: "black",
  invStatUpgradeTextXOffset: 506,
  invStatUpgradeTextYOffset: 205,
  invStatUpgradeTextFontSize: 30,
  invStatUpgradeTextSpacing: 10,

  invHeadImageXOffset: 50,
  invHeadImageYOffset: 150,
  invHeadImageW: 70,
  invHeadImageH: 70,

  invBodyImageXOffset: 50,
  invBodyImageYOffset: 240,
  invBodyImageW: 70,
  invBodyImageH: 70,

  invHand1ImageXOffset: 140,
  invHand1ImageYOffset: 150,
  invHand1ImageW: 70,
  invHand1ImageH: 70,

  invHand2ImageXOffset: 140,
  invHand2ImageYOffset: 240,
  invHand2ImageW: 70,
  invHand2ImageH: 70,

  invBackButtonCol: "gray",
  invBackButtonXOffset: 50,
  invBackButtonYOffset: 500,
  invBackButtonW: 70,
  invBackButtonH: 50,

  invBackButtonTextCol: "black",
  invBackButtonTextXOffset: 50,
  invBackButtonTextYOffset: 535,
  invBackButtonTextFontSize: 30,

  //drop down
  dropDownCol: "Bisque",
  dropDownTextCol: "black",
  dropDownFontSize: 20,
  dropDownTitleFontSize: 25,
  dropDownW: 230,
  dropDownSpacing: 5,
  dropDownTextXOffset: 5,
  dropDownTextYOffset: 25,
  dropDownTitleXOffset: 5,
  dropDownTitleYOffset: 25,

  //battle
  battleActionButtonCol: "Bisque",
  battleActionButtonW: 170,
  battleActionButtonH: 30,
  battleActionButtonYOffset: 30,
  battleActionButtonTextCol: "black",
  battleActionButtonTextFontSize: 20,
  battleActionButtonTextXOffset: 10,
  battleActionButtonTextYOffset: 5,
  battleActionButtonText: ["Attack: -30", "Defend: -20", "Heal: -50", "Rest"],

  battleCardBorderW: 170,
  battleCardBorderH: 250,

  battleChooseCharacterBorderW: "10",
  battleChooseCharacterBorderCol: "red",

  battleCharacterTurnBorderW: "5",
  battleCharacterTurnBorderCol: "blue",

  battleCharacterHealBorderW: "10",
  battleCharacterHealBorderCol: "pink",

  battleCharacterDefendImage: document.getElementById("defend"),
  battleCharacterDefendImageXOffset: 65,
  battleCharacterDefendImageYOffset: 205,
  battleCharacterDefendImageW: 40,
  battleCharacterDefendImageH: 40,

  battleDodgeCol: "Red",
  battleDodgeFontSize: 100,
  battleDodgeXOffset: 0,
  battleDodgeYOffset: 100,
  battleDodgeText: "Dodge",
  battleDodgeShrink: 2,
  battleDodgeMoveSpeed: 2,

  //continue button
  continueButtonCol: "gray",
  continueButtonXOffset: 410,
  continueButtonYOffset: 100,
  continueButtonW: 180,
  continueButtonH: 50,
  continueButtonText: "Continue",
  continueButtonTextCol: "black",
  continueButtonTextFontSize: 30,
  continueButtonTextXOffset: 435,
  continueButtonTextYOffset: 135,

  //score
  scoreCol: "red",
  scoreXOffset: 800,
  scoreYOffset: 100,
  scoreFontSize: 30,
  scoreText: "Score: ",

  levelCol: "red",
  levelXOffset: 800,
  levelYOffset: 150,
  levelFontSize: 30,
  levelText: "Level: "
};
