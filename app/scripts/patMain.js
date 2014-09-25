//This is Pat's personal JavaScript file (to help us keep organized and isolated, at least at first while working out a bunch of kinks).
//It's probably best if you guys create jay.js, bigballahs.js, etc. for now instead of us all colliding in main.js.

'use strict';


function Dog (propsObject) {  
  if (!propsObject) {
    propsObject = {};
  }
    this.color = (propsObject.color === undefined) ? "brown" : propsObject.color;      
    this.hungry = (propsObject.hungry === undefined) ? true : propsObject.hungry;
    this.status = (propsObject.status === undefined) ? "normal" : propsObject.status;
};


var sadie = new Dog({
  color: "black",
  hungry: false
});




// player.prototype.fnName = function(){};


