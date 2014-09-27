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
    this.spendingPower = (propsObject.spendingPower === undefined) ? 100 : propsObject.spendingPower; 
    this.strength = (propsObject.strength === undefined) ? 50 : propsObject.strength; 
    this.conceit = (propsObject.conceit === undefined) ? 50 : propsObject.conceit;
    this.status = (propsObject.status === undefined) ? "normal" : propsObject.status;
};

PlayerType.prototype.fight = function() {
	console.log("I can put shit on the pt.");
};


function Celebrity (name, propsObject) {
	PlayerType.apply(this, arguments);
	this.hp = 1000;
	this.spendingPower = 200;
	this.conceit = 83.33333;
};

Celebrity.prototype = Object.create(PlayerType.prototype);




function OfficerFarva (name, propsObject) {
	PlayerType.apply(this, arguments);
	this.hp = 2000;
	this.status = "confused";
};

OfficerFarva.prototype = Object.create(PlayerType.prototype);
OfficerFarva.prototype.throwLiterOfCola = function() {
	console.log("I said Liter of Cola.");
};


function KennyPowers (name, propsObject) {
	PlayerType.apply(this, arguments);
	this.spendingPower = 60;
	this.status = "notSober"
};

KennyPowers.prototype = Object.create(PlayerType.prototype);
KennyPowers.prototype.throwBeerCan = function() {
	console.log("Add new Kenny quote here.");
};


function DerekZoolander (name, propsObject) {
	PlayerType.apply(this, arguments);
	this.strength = 15;
	this.conceit = 100;
};

DerekZoolander.prototype = Object.create(PlayerType.prototype);
DerekZoolander.prototype.blueSteel = function() {
	console.log("...");
};


function GordonGekko (name, propsObject) {
	Celebrity.apply(this, arguments);
	this.spendingPower = 500;
	this.conceit = 95;
};

GordonGekko.prototype = Object.create(Celebrity.prototype);
GordonGekko.prototype.makeItRain = function() {
	console.log("I just made it rain on your ass.");
};


function NbaBaller (name, propsObject) {
	Celebrity.apply(this, arguments);
	this.hp = 1200;
	this.strength = 75;
	this.spendingPower = 300;
};

NbaBaller.prototype = Object.create(Celebrity.prototype);
NbaBaller.prototype.dunk = function() {
	console.log("And 1");
};


function DonaldTrump (name, propsObject) {
	Celebrity.apply(this, arguments);
	this.spendingPower = 400;
};

DonaldTrump.prototype = Object.create(Celebrity.prototype);
DonaldTrump.prototype.youreFired = function() {
	console.log("You're Fired.");
};


function MikeTyson (name, propsObject) {
	Celebrity.apply(this, arguments);
	this.hp = 2500;
	this.spendingPower = 40;
	this.strength = 90;
	this.conceit = 13;
};

MikeTyson.prototype = Object.create(Celebrity.prototype);
MikeTyson.prototype.biteEarOff = function() {
	console.log("Bites ear off.");
};



// AFTER PLAYER SELECTS HIS PLAYER TYPES FROM INITIAL MENU AND PASSES IN THEIR NAMES, THE FOUR MEMBERS OF HIS PARTY SHOULD BE VARIABLES. EXAMPLE BELOW.

var pMember1 = new MikeTyson ("Lauren");
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
    this.spendingPower = (propsObject.spendingPower === undefined) ? 100 : propsObject.spendingPower; 
    this.strength = (propsObject.strength === undefined) ? 50 : propsObject.strength; 
    this.conceit = (propsObject.conceit === undefined) ? 50 : propsObject.conceit;
    this.status = (propsObject.status === undefined) ? "normal" : propsObject.status;
};

EnemyType.prototype.fight = function() {
	console.log("Attacks player.");
};


function EvilCelebrity (name, propsObject) {
	EnemyType.apply(this, arguments);
	this.hp = 1000;
	this.spendingPower = 200;
	this.conceit = 83.33333;
};

EvilCelebrity.prototype = Object.create(EnemyType.prototype);


function Monster (name, propsObject) {
	EnemyType.apply(this, arguments);
	this.hp = 2500;
	this.spendingPower = 50;
	this.conceit = 25;
};

Monster.prototype = Object.create(EnemyType.prototype);


function AnnaNicoleSmith (name, propsObject) {
	EvilCelebrity.apply(this, arguments);
	this.status = "confused";
};

AnnaNicoleSmith.prototype = Object.create(EvilCelebrity.prototype);
AnnaNicoleSmith.prototype.stealMoney = function() {
	console.log("I love you.");
};


function Jaws (name, propsObject) {
	Monster.apply(this, arguments);
	this.status = "slow";
};

Jaws.prototype = Object.create(Monster.prototype);
Jaws.prototype.eat = function() {
	console.log("I sunk your battleship.")
};


function Communist (name, propsObject) {
	Monster.apply(this, arguments);
	this.hp = 1500;
};

Communist.prototype = Object.create(Monster.prototype);
Communist.prototype.spreadTheWealth = function() {
	console.log("Everyone in your party now has equal spending power. Conceit may shrink as well.")
};



// ENEMIES WON'T HAVE NAMES AS AN INPUT UNLESS THEY ARE BEING INITIATED AS PARTY MEMBERS BY A HUMAN IN MULTI-PLAYER MODE. EXAMPLE BELOW.

var enemy1 = new AnnaNicoleSmith ();
var enemy2 = new Jaws ();
var enemy3 = new Jaws ();
var enemy4 = new Communist ();
var enemy5 = new AnnaNicoleSmith ();






/*
var sadie = new Dog({
  color: "black",
  hungry: false
});
*/


