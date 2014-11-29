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
	console.log("Target:");
	console.log(target);
	var damage = this.strength*(Math.floor(Math.random() * 10));
	// console.log(damage);
	console.log(this.name + " attacks enemy for " + damage + " damage.");

	if (Math.floor(Math.random() * 100) > this.conceit && Math.floor(Math.random() * 100) > target.conceit) {
		(alert("You missed you loser!"))
	}	else {
			target.hp = (target.hp - damage);

				console.log("HP remaining: " + target.hp);
				
				if (target.hp <= 0) {
					target.status = "dead";
					console.log(target.status);
					(alert(this.name + " deals " + damage + " damage to " + target.kat + ". She looks dead enough. You should probably focus on someone else..."));
				} else {

			(alert(this.name + " deals " + damage + " damage to " + target.kat + "."));

				}
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
	this.avatar = "images/farva.jpg"
	this.hp = 1750;
	this.maxHP = 1750;
	this.sp = 25;
	this.maxSP = 25;
	this.sMCost = 3;
	this.strength = 49;
	this.conceit = 45;
	this.status = "confused";
};

OfficerFarva.prototype = Object.create(PlayerType.prototype);
OfficerFarva.prototype.specialMove = function() {
	var target = window["enemy" + prompt("Which enemy do you want to attack?\nPlease enter a # from 1-" + numEnemies + ".")];
	this.sp = (this.sp-this.sMCost);
	var damage = 333;	

	console.log("I said Liter of Cola.");
	console.log(target);
	
	target.hp = (target.hp - damage);
	
	console.log("Enemy HP remaining: " + target.hp);
				
	if (target.hp <= 0) {
		target.status = "dead";
		console.log(target.status);
		(alert(this.name + " accidentally rams his car into " + target.kat + " while trying to play 'Car RamRod', resulting in severe whiplash and " + damage + " damage. She looks dead enough. You should probably focus on someone else..."));
	} else {
		(alert(this.name + " accidentally rams his car into " + target.kat + " while trying to play 'Car RamRod', resulting in severe whiplash and " + damage + " damage."));
	}
};


function KennyPowers (name, propsObject) {
	PlayerType.apply(this, arguments);
	this.avatar = "images/kPowers.jpeg"
	this.hp = 666;
	this.maxHP = 666;
	this.sp = 60;
	this.maxSP = 60;
	this.sMCost = 5;
	this.strength = 60;
	this.conceit = 69;
	this.status = "notSober"
};

KennyPowers.prototype = Object.create(PlayerType.prototype);
KennyPowers.prototype.specialMove = function() {
	var target = window["enemy" + prompt("Which enemy do you want to attack?\nPlease enter a # from 1-" + numEnemies + ".")];
	this.sp = (this.sp-this.sMCost);
	var damage = 275;

	console.log("Can I wear the Scream mask?");
	console.log(target);
	
	target.hp = (target.hp - damage);
	
	console.log("Enemy HP remaining: " + target.hp);

	if (target.hp <= 0) {
		target.status = "dead";
		console.log(target.status);
		(alert(this.name + " gets frustrated and hurls a freshly opened beer can at " + target.kat + ", beaning her in the head for " + damage + " damage. She looks dead enough. You should probably focus on someone else..."));
	} else {
		(alert(this.name + " gets frustrated and hurls a freshly opened beer can at " + target.kat + ", beaning her in the head for " + damage + " damage."));
	}
};


function DerekZoolander (name, propsObject) {
	PlayerType.apply(this, arguments);
	this.avatar = "images/dZoo.jpeg"
	this.hp = 800;
	this.maxHP = 800;
	this.sp = 50;
	this.maxSP = 50;
	this.sMCost = 50;
	this.strength = 3;
	this.conceit = 98;
};

DerekZoolander.prototype = Object.create(PlayerType.prototype);
DerekZoolander.prototype.specialMove = function() {
	var target = window["enemy" + prompt("Which enemy do you want to attack?\nPlease enter a # from 1-" + numEnemies + ".")];
	this.sp = (this.sp-this.sMCost);
	var damage = 1500;
	
	console.log("I still can't turn left.");
	console.log(target);
	
	target.hp = (target.hp - damage);
	
	console.log("Enemy HP remaining: " + target.hp);
				
	if (target.hp <= 0) {
		target.status = "dead";
		console.log(target.status);
		(alert(this.name + " shows what all the hype is about and unleashes Blue Steel on " + target.kat + ", who is immediately stunned and sustains " + damage + " damage. She looks dead enough. You should probably focus on someone else..."));
	} else {
		(alert(this.name + " shows what all the hype is about and unleashes Blue Steel on " + target.kat + ", who is immediately stunned and sustains " + damage + " damage."));
	}
};


function GordonGekko (name, propsObject) {
	Celebrity.apply(this, arguments);
	this.avatar = "images/gekko.jpeg"
	this.maxHP = 1000;
	this.sp = 500;
	this.maxSP = 500;
	this.sMCost = 20;
	this.strength = 20;
	this.conceit = 85;
};

GordonGekko.prototype = Object.create(Celebrity.prototype);
GordonGekko.prototype.specialMove = function() {
	var target = window["enemy" + prompt("Which enemy do you want to attack?\nPlease enter a # from 1-" + numEnemies + ".")];
	this.sp = (this.sp-this.sMCost);
	var damage = 250;

	console.log("I just made it rain on your ass.");
	console.log(target);
	
	target.hp = (target.hp - damage);
	
	console.log("Enemy HP remaining: " + target.hp);
				
	if (target.hp <= 0) {
		target.status = "dead";
		console.log(target.status);
		(alert(this.name + " stands demeaningly over " + target.kat + " and makes it rain thousands of $1 bills. Papercuts cause " + damage + " damage. She looks dead enough. You should probably focus on someone else..."));
	} else {
		(alert(this.name + " stands demeaningly over " + target.kat + " and makes it rain thousands of $1 bills. Papercuts cause " + damage + " damage."));
	}
};


function NbaBaller (name, propsObject) {
	Celebrity.apply(this, arguments);
	this.avatar = "images/dirkParsons.jpeg"
	this.hp = 1300;
	this.maxHP = 1300;
	this.sp = 250;
	this.maxSP = 250;
	this.sMCost = 50;
	this.strength = 75;	
	this.conceit = 80;
};

NbaBaller.prototype = Object.create(Celebrity.prototype);
NbaBaller.prototype.specialMove = function() {
	var target = window["enemy" + prompt("Which enemy do you want to attack?\nPlease enter a # from 1-" + numEnemies + ".")];
	this.sp = (this.sp-this.sMCost);
	var damage = 400;

	console.log("And 1.");
	console.log(target);
	
	target.hp = (target.hp - damage);
	
	console.log("Enemy HP remaining: " + target.hp);
				
	if (target.hp <= 0) {
		target.status = "dead";
		console.log(target.status);
		(alert(this.name + " skys to the rafters and throws down a sick dunk in " + target.kat + "'s grill. " + damage + " damage inflicted. She looks dead enough. You should probably focus on someone else..."));
	} else {
		(alert(this.name + " skys to the rafters and throws down a sick dunk in " + target.kat + "'s grill. " + damage + " damage inflicted."));
	}
};


function DonaldTrump (name, propsObject) {
	Celebrity.apply(this, arguments);
	this.avatar = "images/trump.jpeg"
	this.hp = 1200;
	this.maxHP = 1200;
	this.sp = 400;
	this.maxSP = 400;
	this.sMCost = 10;
	this.strength = 30;
	this.conceit = 90;
};

DonaldTrump.prototype = Object.create(Celebrity.prototype);
DonaldTrump.prototype.specialMove = function() {
	var target = window["enemy" + prompt("Which enemy do you want to attack?\nPlease enter a # from 1-" + numEnemies + ".")];
	this.sp = (this.sp-this.sMCost);
	var damage = 333;

	console.log("You're Fired.");
	console.log(target);
	
	target.hp = (target.hp - damage);
	
	console.log("Enemy HP remaining: " + target.hp);
				
	if (target.hp <= 0) {
		target.status = "dead";
		console.log(target.status);
		(alert(this.name + " looks " + target.kat + " dead in the eye and declares 'You're Fired!', scarring her psychologically to the tune of " + damage + " damage. She looks dead enough. You should probably focus on someone else..."));
	} else {
		(alert(this.name + " looks " + target.kat + " dead in the eye and declares 'You're Fired!', scarring her psychologically to the tune of " + damage + " damage."));
	}
};


function MikeTyson (name, propsObject) {
	Celebrity.apply(this, arguments);
	this.avatar = "images/mTyson.jpeg"
	this.hp = 2500;
	this.maxHP = 2500;
	this.sp = 85;
	this.maxSP = 85;
	this.sMCost = 25;
	this.strength = 85;
	this.conceit = 33;
};

MikeTyson.prototype = Object.create(Celebrity.prototype);
MikeTyson.prototype.specialMove = function() {
	var target = window["enemy" + prompt("Which enemy do you want to attack?\nPlease enter a # from 1-" + numEnemies + ".")];
	this.sp = (this.sp-this.sMCost);
	var damage = 500;
	
	console.log("Bites ear off.");
	console.log(target);
	
	target.hp = (target.hp - damage);
	
	console.log("Enemy HP remaining: " + target.hp);
				
	if (target.hp <= 0) {
		target.status = "dead";
		console.log(target.status);
		(alert(this.name + " bites " + target.kat + "'s ear off and deals " + damage + " damage. She looks dead enough. You should probably focus on someone else..."));
	} else {
		(alert(this.name + " bites " + target.kat + "'s ear off and deals " + damage + " damage."));
	}
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
	// console.log(target);
	if (target < 25) {
		target = pMember1;
		}	else if (25 < target && target < 50) {
			target = pMember2;
			}	else if (50 < target && target < 75) {
				target = pMember3;
				}	else {
				target = pMember4;
	}
	console.log("Target: ");
	console.log(target);
	var damage = this.strength*(Math.floor(Math.random() * 10));
	console.log(this.kat + " attacks player for " + damage + " damage.");

	if (Math.floor(Math.random() * 100) > this.conceit && Math.floor(Math.random() * 100) > target.conceit) {
		(alert(this.kat + " missed. What a loser!"))
	}	else {
			(alert(this.kat + " deals " + damage + " damage to " + target.name + "."));
			target.hp = (target.hp - damage);
		}
	
	console.log("HP remaining: " + target.hp);
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
	this.kat = "Anna Nicole Smith";
	this.avatar = "images/ANS.jpg";
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
	this.kat = "Communist";
	this.avatar = "images/communism.jpg";
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
	this.kat = "Jaws";
	this.avatar = "images/jaws.jpg"
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


function appendPMembers() {

$(".player_area").empty();
$(".player_area").append( "<p>" + "<img src=\'" + pMember1.avatar + "\'></p>" );
$(".player_area").append( "<p>" + "<img src=\'" + pMember2.avatar + "\'></p>" );
$(".player_area").append( "<p>" + "<img src=\'" + pMember3.avatar + "\'></p>" );
$(".player_area").append( "<p>" + "<img src=\'" + pMember4.avatar + "\'></p>" );




// BOTTOM-RIGHT CHARACTER INFO

// var $p1hp = pMember1.hp;		COULD USE A VARIABLE IF NEED BE
$(".player_stats").empty();
// $(".player_stats").html = "";
$(".player_stats").append( "<p>" + pMember1.name + " | HP: " + pMember1.hp + "/" + pMember1.maxHP + " SP: " + pMember1.sp + "/" + pMember1.maxSP + "</p>" );
$(".player_stats").append( "<p>" + pMember2.name + " | HP: " + pMember2.hp + "/" + pMember2.maxHP + " SP: " + pMember2.sp + "/" + pMember2.maxSP + "</p>" );
$(".player_stats").append( "<p>" + pMember3.name + " | HP: " + pMember3.hp + "/" + pMember3.maxHP + " SP: " + pMember3.sp + "/" + pMember3.maxSP + "</p>" );
$(".player_stats").append( "<p>" + pMember4.name + " | HP: " + pMember4.hp + "/" + pMember4.maxHP + " SP: " + pMember4.sp + "/" + pMember4.maxSP + "</p>" );


$(".whoseTurn").empty();
// $(".whoseTurn").append("Do something " + pMember1.name + "!")


};




$(".pS").submit(function() {


// TOP-RIGHT PARTY MEMBER IMAGES (BUT FOR NOW JUST NAMES...)

var n = document.getElementById("p1Name").value;							/*COULD BE A PROMPT INSTEAD FOR THE CHARACTER NAMES*/
var pMemberChoice1 = document.getElementById("pMember1Select").value;
	if (pMemberChoice1 === "7") {
		pMember1 = new MikeTyson (n);
	} else if (pMemberChoice1 === "2") {
		pMember1 = new KennyPowers (n);
	} else if (pMemberChoice1 === "3") {
		pMember1 = new DerekZoolander (n);
	} else if (pMemberChoice1 === "4") {
		pMember1 = new GordonGekko (n);
	} else if (pMemberChoice1 === "5") {
		pMember1 = new NbaBaller (n);
	} else if (pMemberChoice1 === "6") {
		pMember1 = new DonaldTrump (n);
	} else {
		pMember1 = new OfficerFarva (n);
	}


n = document.getElementById("p2Name").value;
var pMemberChoice2 = document.getElementById("pMember2Select").value;
	if (pMemberChoice2 === "7") {
		pMember2 = new MikeTyson (n);
	} else if (pMemberChoice2 === "2") {
		pMember2 = new KennyPowers (n);
	} else if (pMemberChoice2 === "3") {
		pMember2 = new DerekZoolander (n);
	} else if (pMemberChoice2 === "4") {
		pMember2 = new GordonGekko (n);
	} else if (pMemberChoice2 === "5") {
		pMember2 = new NbaBaller (n);
	} else if (pMemberChoice2 === "6") {
		pMember2 = new DonaldTrump (n);
	} else {
		pMember2 = new OfficerFarva (n);
	}


n = document.getElementById("p3Name").value;
var pMemberChoice3 = document.getElementById("pMember3Select").value;
	if (pMemberChoice3 === "7") {
		pMember3 = new MikeTyson (n);
	} else if (pMemberChoice3 === "2") {
		pMember3 = new KennyPowers (n);
	} else if (pMemberChoice3 === "3") {
		pMember3 = new DerekZoolander (n);
	} else if (pMemberChoice3 === "4") {
		pMember3 = new GordonGekko (n);
	} else if (pMemberChoice3 === "5") {
		pMember3 = new NbaBaller (n);
	} else if (pMemberChoice3 === "6") {
		pMember3 = new DonaldTrump (n);
	} else {
		pMember3 = new OfficerFarva (n);
	}


n = document.getElementById("p4Name").value;
var pMemberChoice4 = document.getElementById("pMember4Select").value;
	if (pMemberChoice4 === "7") {
		pMember4 = new MikeTyson (n);
	} else if (pMemberChoice4 === "2") {
		pMember4 = new KennyPowers (n);
	} else if (pMemberChoice4 === "3") {
		pMember4 = new DerekZoolander (n);
	} else if (pMemberChoice4 === "4") {
		pMember4 = new GordonGekko (n);
	} else if (pMemberChoice4 === "5") {
		pMember4 = new NbaBaller (n);
	} else if (pMemberChoice4 === "6") {
		pMember4 = new DonaldTrump (n);
	} else {
		pMember4 = new OfficerFarva (n);
	}




appendPMembers();
resetPCommandMenu();




event.preventDefault();
});							/*END .pS FUNCTION*/


// THE ENEMY GENERATION STUFF BELOW MAY NEED TO BE PUT IN ITS OWN SEPARATE FUNCTION FOR CONSECUTIVE BATTLES. RIGHT NOW IT'S ALL ONE BIG FUNCTION!!!!




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

if (numEnemies === 6) {
	var eGen = Math.floor(Math.random() * 100);
    if (eGen < 50) {
		var enemy6 = new AnnaNicoleSmith ();
	}	else if (50 < eGen && eGen < 75) {
			enemy6 = new Communist ();
		}	else {
				enemy6 = new Jaws ();
			}
}



function appendEnemies() {

	// TOP-LEFT ENEMY IMAGES (BUT FOR NOW JUST NAMES...)

	$(".enemies_area").empty();
	$(".enemies_areaCol2").empty();
	// $(".enemies_area").html = "";
	if (enemy1 && enemy1.status !== "dead") { $(".enemies_area").append( "<p>" + "<img src=\'" + enemy1.avatar + "\'></p>" );}
	if (enemy2 && enemy2.status !== "dead") { $(".enemies_area").append( "<p>" + "<img src=\'" + enemy2.avatar + "\'></p>" );}
	if (enemy3 && enemy3.status !== "dead") { $(".enemies_area").append( "<p>" + "<img src=\'" + enemy3.avatar + "\'></p>" );}
	if (enemy4 && enemy4.status !== "dead") { $(".enemies_area").append( "<p>" + "<img src=\'" + enemy4.avatar + "\'></p>" );}
	if (enemy5 && enemy5.status !== "dead") { $(".enemies_areaCol2").append( "<p>" + "<img src=\'" + enemy5.avatar + "\'></p>" );}
	if (enemy6 && enemy6.status !== "dead") { $(".enemies_areaCol2").append( "<p>" + "<img src=\'" + enemy6.avatar + "\'></p>" );}




	// BOTTOM-LEFT ENEMY NAMES

	// var $e1kat = enemy1.kat;		COULD USE A VARIABLE IF NEED BE
	$(".enemy_stats").empty();
	if (enemy1 && enemy1.status !== "dead") { $(".enemy_stats").append( "<p>" + "Enemy #1: " + enemy1.kat + "</p>" );}
	if (enemy2 && enemy2.status !== "dead") { $(".enemy_stats").append( "<p>" + "Enemy #2: " + enemy2.kat + "</p>" );}
	if (enemy3 && enemy3.status !== "dead") { $(".enemy_stats").append( "<p>" + "Enemy #3: " + enemy3.kat + "</p>" );}
	if (enemy4 && enemy4.status !== "dead") { $(".enemy_stats").append( "<p>" + "Enemy #4: " + enemy4.kat + "</p>" );}
	if (enemy5 && enemy5.status !== "dead") { $(".enemy_stats").append( "<p>" + "Enemy #5: " + enemy5.kat + "</p>" );}
	if (enemy6 && enemy6.status !== "dead") { $(".enemy_stats").append( "<p>" + "Enemy #6: " + enemy6.kat + "</p>" );}

	if (!(enemy1 && enemy1.status !== "dead") && !(enemy2 && enemy2.status !== "dead") && !(enemy3 && enemy3.status !== "dead") && !(enemy4 && enemy4.status !== "dead") && !(enemy5 && enemy5.status !== "dead") && !(enemy6 && enemy6.status !== "dead")) 
	{
		alert("YOU WIN! Refresh the page to play again.");
	}
};




appendEnemies();




function enemyTurn() {
	if (enemy1 && enemy1.status !== "dead") {
		enemy1.fight();
	};
	if (enemy2 && enemy2.status !== "dead") {
		enemy2.fight();
	};
	if (enemy3 && enemy3.status !== "dead") {
		enemy3.fight();
	};
	if (enemy4 && enemy4.status !== "dead") {
		enemy4.fight();
	};
	if (enemy5 && enemy5.status !== "dead") {
		enemy5.fight();
	};
	if (enemy6 && enemy6.status !== "dead") {
		enemy6.fight();
	};

	appendPMembers();
	resetPCommandMenu();
};




// SECOND LAYER OF COMMAND MENUS

// var turnStatus = {specialSauce: false};
// console.log(turnStatus);
// $(".player_action_selector button.SM").on( "click", function() {
// 	turnStatus.specialSauce = true;
// 	console.log(turnStatus);
// });
	

// var turnsCompleted = [];


function resetPCommandMenu() {
	if (pMember1.hp >= 1 || pMember2.hp >= 1 || pMember3.hp >= 1 || pMember4.hp >= 1) {
		pTurn1();
	} else {
		alert('YOU LOSE!');
	}
};


function pTurn1() {
	// console.log('hi');
	if (pMember1.hp >= 1) {
		$(".whoseTurn").append("Do something " + pMember1.name + "!");
		$(".player_action_selector button").on( "click", function() {
			var moveType = $(this).attr('class');
			if (moveType === "attack") {
				pMember1.fight();
				$(".player_action_selector button").unbind("click");
				$(".whoseTurn").empty();
				pTurn2();
			} else if (moveType === "special") {
				if (pMember1.sp >= pMember1.sMCost) {
					pMember1.specialMove();	
					$(".player_action_selector button").unbind("click");
					$(".whoseTurn").empty();
					pTurn2();
				} else {
					alert("Not enough SP!");
				}
			}
			// if ($(".player_action_selector button").hasClass('SM')) {
			// 	pMember1.throwLiterOfCola();
			// } else {
				
			// }
		});
	} else {
		pTurn2();
	}
};

function pTurn2() {
	// console.log('hi');
	if (pMember2.hp >= 1) {
		$(".whoseTurn").append("Do something " + pMember2.name + "!")
		$(".player_action_selector button").on( "click", function() {
			// pMember2.fight();
			var moveType = $(this).attr('class');
			if (moveType === "attack") {
				pMember2.fight();
				$(".player_action_selector button").unbind("click");
				$(".whoseTurn").empty();
				pTurn3();
			} else if (moveType === "special") {
				if (pMember2.sp >= pMember2.sMCost) {
					pMember2.specialMove();	
					$(".player_action_selector button").unbind("click");
					$(".whoseTurn").empty();
					pTurn3();
				} else {
					alert("Not enough SP!");
				}
			}
		});
	} else {
		pTurn3();
	}
};

function pTurn3() {
	// console.log('hi');
	if (pMember3.hp >= 1) {
		$(".whoseTurn").append("Do something " + pMember3.name + "!")
		$(".player_action_selector button").on( "click", function() {
			var moveType = $(this).attr('class');
			if (moveType === "attack") {
				pMember3.fight();
				$(".player_action_selector button").unbind("click");
				$(".whoseTurn").empty();
				pTurn4();
			} else if (moveType === "special") {
				if (pMember3.sp >= pMember3.sMCost) {
					pMember3.specialMove();
					$(".player_action_selector button").unbind("click");
					$(".whoseTurn").empty();
					pTurn4();	
				} else {
					alert("Not enough SP!");
				}
			}
		});
	} else {
		pTurn4();
	}
};

function pTurn4() {
	// console.log('hi');
	if (pMember4.hp >= 1) {
		$(".whoseTurn").append("Do something " + pMember4.name + "!")
		$(".player_action_selector button").on( "click", function() {
			var moveType = $(this).attr('class');
			if (moveType === "attack") {
				pMember4.fight();
				$(".player_action_selector button").unbind("click");
				endPTurn();
			} else if (moveType === "special") {
				if (pMember4.sp >= pMember4.sMCost) {
					pMember4.specialMove();
					$(".player_action_selector button").unbind("click");
					endPTurn();	
				} else {
					alert("Not enough SP!");
				}
			}
		});
	} else {
		endPTurn();
	}
};


function endPTurn() {
	alert("End user's turn");
	$(".whoseTurn").empty();
	$(".whoseTurn").append("Enemy Turn - Watch Out!");
	appendEnemies();
	enemyTurn();
};


	



// resetPCommandMenu();

alert('Please select a player type and enter a name for each of your four party members in the top right quadrant of the screen.');




/*
	if (enemyTarget = 1) {
		pMember1.fight("enemy"+enemyTarget);
	};
	*/







/*
var sadie = new Dog({
  color: "black",
  hungry: false
});
*/