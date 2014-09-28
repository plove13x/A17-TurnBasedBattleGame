// ATTEMPTS TO MAKE BATTLE GENERATOR A FUNCTION


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
