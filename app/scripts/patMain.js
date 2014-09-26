//This is Pat's personal JavaScript file (to help us keep organized and isolated, at least at first while working out a bunch of kinks).
//It's probably best if you guys create jay.js, bigballahs.js, etc. for now instead of us all colliding in main.js.

'use strict';

function PlayerType (name, propsObject) {
  	this.name = name;
	if (!propsObject) {
    	propsObject = {};
  	}
    this.hp = (propsObject.hp === undefined) ? 1500 : propsObject.hp;      
    this.conceit = (propsObject.conceit === undefined) ? false : propsObject.conceit;
    this.status = (propsObject.status === undefined) ? "normal" : propsObject.status;
};

PlayerType.prototype.fight = function() {
	console.log("I can put shit on the pt.");
}

function Celebrity (name, propsObject) {
	PlayerType.apply(this, arguments);
	this.hp = 1000;
	this.conceit = true;
};

Celebrity.prototype = Object.create(PlayerType.prototype);

function GordonGekko (name, propsObject) {
	Celebrity.apply(this, arguments);
};

GordonGekko.prototype = Object.create(Celebrity.prototype);



// AFTER PLAYER SELECTS HIS PLAYER TYPES FROM INITIAL MENU AND PASSES IN THEIR NAMES, THE FOUR MEMBERS OF HIS PARTY SHOULD BE VARIABLES.

var pMember1 = new gordonGekko ("Lauren");
var pMember2 = new playerType ("Idiot");
var pMember3 = new celebrity ("Baller");
var pMember4 = new gordonGekko ("Sterling");







/*
var sadie = new Dog({
  color: "black",
  hungry: false
});
*/



