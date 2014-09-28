//This is Pat's personal JavaScript file (to help us keep organized and isolated, at least at first while working out a bunch of kinks).
//It's probably best if you guys create jay.js, bigballahs.js, etc. for now instead of us all colliding in main.js.


'use strict';


// All player types in the game are based off of either the default "PlayerType" constructor or the "Celebrity" constructor.

function PlayerType (name, propsObject) {
  	this.name = name;
	if (!propsObject) {
    	propsObject = {};
  	}
    this.hp = (propsObject.hp === undefined) ? 1500 : propsObject.hp;  
    this.sp = (propsObject.sp === undefined) ? 100 : propsObject.sp; 
    this.strength = (propsObject.strength === undefined) ? 50 : propsObject.strength; 
    this.conceit = (propsObject.conceit === undefined) ? 50 : propsObject.conceit;
    this.status = (propsObject.status === undefined) ? "normal" : propsObject.status;
};

// OBVIOUSLY DOWN THE ROAD THIS WILL NEED TO BE CHANGED AS THE # OF ENEMIES MAY NOT BE 4. WOULD ALSO BE COOL FOR THE USER TO CHOOSE WHICH ENEMY TO TARGET.
PlayerType.prototype.fight = function() {
	var target = window["enemy" + prompt("Which enemy do you want to attack?\nPlease enter a # from 1-" + numEnemies + ".")];
	/*var target = Math.floor(Math.random() * 100);
	console.log(target);
	if (target < 25) {
		target = enemy1;
		}	else if (25 < target && target < 50) {
			target = enemy2;
			}	else if (50 < target && target < 75) {
				target = enemy3;
				}	else {
				target = enemy4;
	}*/
	console.log(target);
	var damage = this.strength*(Math.floor(Math.random() * 10));
	console.log(damage);
	console.log("Attacks enemy.");

	if (Math.floor(Math.random() * 100) > this.conceit && Math.floor(Math.random() * 100) > target.conceit) {
		(alert("You missed you loser!"))
	}	else {
			target.hp = (target.hp - damage);
		}

	console.log(target.hp);
	if (target.hp <= 0) {
		target.status = "dead";
		console.log(target.status);
	}
};


function Celebrity (name, propsObject) {
	PlayerType.apply(this, arguments);
	this.hp = 1000;
	this.sp = 200;
	this.conceit = 83.33333;
};

Celebrity.prototype = Object.create(PlayerType.prototype);




function OfficerFarva (name, propsObject) {
	PlayerType.apply(this, arguments);
	this.hp = 1750;
	this.sp = 25;
	this.strength = 49;
	this.conceit = 45;
	this.status = "confused";
};

OfficerFarva.prototype = Object.create(PlayerType.prototype);
OfficerFarva.prototype.throwLiterOfCola = function() {
	console.log("I said Liter of Cola.");
};


function KennyPowers (name, propsObject) {
	PlayerType.apply(this, arguments);
	this.hp = 666;
	this.sp = 60;
	this.strength = 60;
	this.conceit = 69;
	this.status = "notSober"
};

KennyPowers.prototype = Object.create(PlayerType.prototype);
KennyPowers.prototype.throwBeerCan = function() {
	console.log("Add new Kenny quote here.");
};


function DerekZoolander (name, propsObject) {
	PlayerType.apply(this, arguments);
	this.hp = 800;
	this.sp = 50;
	this.strength = 3;
	this.conceit = 98;
};

DerekZoolander.prototype = Object.create(PlayerType.prototype);
DerekZoolander.prototype.blueSteel = function() {
	console.log("...");
};


function GordonGekko (name, propsObject) {
	Celebrity.apply(this, arguments);
	this.sp = 500;
	this.strength = 20;
	this.conceit = 85;
};

GordonGekko.prototype = Object.create(Celebrity.prototype);
GordonGekko.prototype.makeItRain = function() {
	console.log("I just made it rain on your ass.");
};


function NbaBaller (name, propsObject) {
	Celebrity.apply(this, arguments);
	this.hp = 1300;
	this.sp = 250;
	this.strength = 75;	
	this.conceit = 80;
};

NbaBaller.prototype = Object.create(Celebrity.prototype);
NbaBaller.prototype.dunk = function() {
	console.log("And 1");
};


function DonaldTrump (name, propsObject) {
	Celebrity.apply(this, arguments);
	this.hp = 1200;
	this.sp = 400;
	this.strength = 30;
	this.conceit = 90;
};

DonaldTrump.prototype = Object.create(Celebrity.prototype);
DonaldTrump.prototype.youreFired = function() {
	console.log("You're Fired.");
};


function MikeTyson (name, propsObject) {
	Celebrity.apply(this, arguments);
	this.hp = 2500;
	this.sp = 85;
	this.strength = 85;
	this.conceit = 33;
};

MikeTyson.prototype = Object.create(Celebrity.prototype);
MikeTyson.prototype.biteEarOff = function() {
	console.log("Bites ear off.");
};



// AFTER PLAYER SELECTS HIS PLAYER TYPES FROM INITIAL MENU AND PASSES IN THEIR NAMES, THE FOUR MEMBERS OF HIS PARTY SHOULD BE VARIABLES. EXAMPLE BELOW.

var pMember1 = new KennyPowers ("Lauren");
var pMember2 = new DonaldTrump ("Idiot");
var pMember3 = new KennyPowers ("Baller");
var pMember4 = new GordonGekko ("Sterling");




// ENEMY CONSTRUCTORS

function EnemyType (name, propsObject) {
	if (!name) {
		this.name = "N/A";
	} 
	else {
		this.name = name;
	}
	if (!propsObject) {
    	propsObject = {};
  	}
    this.hp = (propsObject.hp === undefined) ? 1500 : propsObject.hp;  
    this.sp = (propsObject.sp === undefined) ? 100 : propsObject.sp; 
    this.strength = (propsObject.strength === undefined) ? 50 : propsObject.strength; 
    this.conceit = (propsObject.conceit === undefined) ? 50 : propsObject.conceit;
    this.status = (propsObject.status === undefined) ? "normal" : propsObject.status;
};

EnemyType.prototype.fight = function() {
	var target = Math.floor(Math.random() * 100);
	console.log(target);
	if (target < 25) {
		target = pMember1;
		}	else if (25 < target && target < 50) {
			target = pMember2;
			}	else if (50 < target && target < 75) {
				target = pMember3;
				}	else {
				target = pMember4;
	}
	console.log(target);
	var damage = this.strength*(Math.floor(Math.random() * 10));
	console.log(damage);
	console.log("Attacks player.");

	if (Math.floor(Math.random() * 100) > this.conceit && Math.floor(Math.random() * 100) > target.conceit) {
		(alert("You missed you loser!"))
	}	else {
			target.hp = (target.hp - damage);
		}
	
	console.log(target.hp);
	if (target.hp <= 0) {
		target.status = "dead";
		console.log(target.status);
	}
};


function EvilCelebrity (name, propsObject) {
	EnemyType.apply(this, arguments);
	this.hp = 1000;
	this.sp = 200;
	this.conceit = 83.33333;
};

EvilCelebrity.prototype = Object.create(EnemyType.prototype);


function Monster (name, propsObject) {
	EnemyType.apply(this, arguments);
	this.hp = 2500;
	this.sp = 50;
	this.conceit = 25;
};

Monster.prototype = Object.create(EnemyType.prototype);




function AnnaNicoleSmith (name, propsObject) {
	EvilCelebrity.apply(this, arguments);
	this.hp = 100;
	this.sp = 200;
	this.strength = 5;
	this.conceit = 99;
	this.status = "confused";
};

AnnaNicoleSmith.prototype = Object.create(EvilCelebrity.prototype);
AnnaNicoleSmith.prototype.stealMoney = function() {
	console.log("I love you.");
};


function Communist (name, propsObject) {
	Monster.apply(this, arguments);
	this.hp = 2000;
	this.sp = 5;
	this.strength = 40;
	this.conceit = 13;
};

Communist.prototype = Object.create(Monster.prototype);
Communist.prototype.spreadTheWealth = function() {
	console.log("Everyone in your party now has equal spending power. Conceit may shrink as well.")
};


function Jaws (name, propsObject) {
	Monster.apply(this, arguments);
	this.hp = 500;
	this.sp = 10;
	this.strength = 90;
	this.conceit = 20;
	this.status = "slow";
};

Jaws.prototype = Object.create(Monster.prototype);
Jaws.prototype.eat = function() {
	console.log("I sunk your battleship.")
};




// SELECT YOUR PARTY MEMBERS.

/*

<select id="characterSelect">
    <option value="1" selected="selected">Officer Farva</option>
    <option value="2">Kenny Powers</option>
    <option value="3">Derek Zoolander</option>
    <option value="4">Gordon Gekko</option>
    <option value="5">NBA Baller</option>
    <option value="6">Donald Trump</option>
    <option value="7">Mike Tyson</option>
</select>

+ AN INPUT BOX FOR THE CHARACTER NAME




var pMemberChoice = document.getElementById("characterSelect").value;
	if (pMemberChoice = "1") {
		pMember1 = new OfficerFarva ();
	} else if (pMemberChoice = "2") {
		pMember1 = new KennyPowers ();
	} else if (pMemberChoice = "3") {
		pMember1 = new DerekZoolander ();
	} else if (pMemberChoice = "4") {
		pMember1 = new GordonGekko ();
	} else if (pMemberChoice = "5") {
		pMember1 = new NbaBaller ();
	} else if (pMemberChoice = "6") {
		pMember1 = new DonaldTrump ();
	} else {
		pMember1 = new MikeTyson ();
	}

*/




// ENEMIES WON'T HAVE NAMES AS AN INPUT UNLESS THEY ARE BEING INITIATED AS PARTY MEMBERS BY A HUMAN IN MULTI-PLAYER MODE.

// var enemy1 = new AnnaNicoleSmith ();
// var enemy2 = new Jaws ();
// var enemy3 = new Communist ();
// var enemy4 = new Communist ();
// var enemy5 = new AnnaNicoleSmith ();
// var enemy6 = new AnnaNicoleSmith ();


// BATTLE GENERATOR

var numEnemies = 1 + (Math.floor(Math.random() * 10));
if (numEnemies > 6) { 
	numEnemies = 4; 
};



if (numEnemies >= 1) {
	var eGen = Math.floor(Math.random() * 100);
    if (eGen < 50) {
		var enemy1 = new AnnaNicoleSmith ();
	}	else if (50 < eGen && eGen < 75) {
			enemy1 = new Communist ();
		}	else {
				enemy1 = new Jaws ();
			}
}

if (numEnemies >= 2) {
	var eGen = Math.floor(Math.random() * 100);
    if (eGen < 50) {
		var enemy2 = new AnnaNicoleSmith ();
	}	else if (50 < eGen && eGen < 75) {
			enemy2 = new Communist ();
		}	else {
				enemy2 = new Jaws ();
			}
}

if (numEnemies >= 3) {
	var eGen = Math.floor(Math.random() * 100);
    if (eGen < 50) {
		var enemy3 = new AnnaNicoleSmith ();
	}	else if (50 < eGen && eGen < 75) {
			enemy3 = new Communist ();
		}	else {
				enemy3 = new Jaws ();
			}
}

if (numEnemies >= 4) {
	var eGen = Math.floor(Math.random() * 100);
    if (eGen < 50) {
		var enemy4 = new AnnaNicoleSmith ();
	}	else if (50 < eGen && eGen < 75) {
			enemy4 = new Communist ();
		}	else {
				enemy4 = new Jaws ();
			}
}

if (numEnemies >= 5) {
	var eGen = Math.floor(Math.random() * 100);
    if (eGen < 50) {
		var enemy5 = new AnnaNicoleSmith ();
	}	else if (50 < eGen && eGen < 75) {
			enemy5 = new Communist ();
		}	else {
				enemy5 = new Jaws ();
			}
}

if (numEnemies = 6) {
	var eGen = Math.floor(Math.random() * 100);
    if (eGen < 50) {
		var enemy6 = new AnnaNicoleSmith ();
	}	else if (50 < eGen && eGen < 75) {
			enemy6 = new Communist ();
		}	else {
				enemy6 = new Jaws ();
			}
}




// function bGen(numEnemies) {
// 	for (i=1; i<=numEnemies; i++) {									TRY #1: THIS LINE GENERATES THIS ERROR AND NOT SURE KNOW WHY: Uncaught ReferenceError: i is not defined
// 		var counter = i;
// 		var eGen = Math.floor(Math.random() * 100);
//     		if (eGen < 50) {
// 				window["enemy"+counter] = new AnnaNicoleSmith ();
// 			}	else if (50 < eGen && eGen < 75) {
// 					window["enemy"+counter] = new Communist ();
// 				}	else {
// 						window["enemy"+counter] = new Jaws ();
// 					}
// 	}
// };


// bGen(numEnemies);




// var enemyArray = [];

// for (i = 0; i < numEnemies; i++) { 					TRY #2: THIS LINE ALSO GENERATES THIS ERROR AND NOT SURE KNOW WHY: Uncaught ReferenceError: i is not defined 
//     var eGen = Math.floor(Math.random() * 100);
//     if (eGen < 50) {
// 		enemyArray[i] = new AnnaNicoleSmith ();
// 	}	else if (50 < eGen && eGen < 75) {
// 			enemyArray[i] = new Communist ();
// 		}	else {
// 				enemyArray[i] = new Jaws ();
// 			}

// 	_.each(enemyArray[x], function() {
// 		window["enemy" + (x+1)] = enemyArray[x];
// 	});
// } 


// if (enemyArray[1]) {									TRY #3
// 		var enemy2 = enemyArray[1];
// }




// SECOND LAYER OF COMMAND MENUS

$(".player_action_selector button").on( "click", function() {
		pMember1.fight();
	/*
	if (enemyTarget = 1) {
		pMember1.fight("enemy"+enemyTarget);
	};
	*/
});








/*
var sadie = new Dog({
  color: "black",
  hungry: false
});
*/