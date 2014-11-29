function resetPCommandMenu() {

$(".player_action_selector button").on( "click", function() {
		var moveType = $(this).attr('class');
		if (moveType === "attack") {
			pMember1.fight();
		} else if (moveType === "special") {
			if (pMember1.sp >= pMember1.sMCost) {
				pMember1.specialMove();	
			} else {
				alert("Not enough SP!");
			}
		}
		// if ($(".player_action_selector button").hasClass('SM')) {
		// 	pMember1.throwLiterOfCola();
		// } else {
			
		// }
		$(".player_action_selector button").unbind("click");
		$(".whoseTurn").empty();
		$(".whoseTurn").append("Do something " + pMember2.name + "!")
		$(".player_action_selector button").on( "click", function() {
			// pMember2.fight();
			var moveType = $(this).attr('class');
			if (moveType === "attack") {
				pMember2.fight();
			} else if (moveType === "special") {
				if (pMember2.sp >= pMember2.sMCost) {
					pMember2.specialMove();	
				} else {
					alert("Not enough SP!");
				}
			}
			$(".player_action_selector button").unbind("click");
			$(".whoseTurn").empty();
			$(".whoseTurn").append("Do something " + pMember3.name + "!")
			$(".player_action_selector button").on( "click", function() {
					var moveType = $(this).attr('class');
					if (moveType === "attack") {
						pMember3.fight();
					} else if (moveType === "special") {
						if (pMember3.sp >= pMember3.sMCost) {
							pMember3.specialMove();	
						} else {
							alert("Not enough SP!");
						}
					}
					$(".player_action_selector button").unbind("click");
					$(".whoseTurn").empty();
					$(".whoseTurn").append("Do something " + pMember4.name + "!")
					$(".player_action_selector button").on( "click", function() {
						var moveType = $(this).attr('class');
						if (moveType === "attack") {
							pMember4.fight();
						} else if (moveType === "special") {
							if (pMember4.sp >= pMember4.sMCost) {
								pMember4.specialMove();	
							} else {
								alert("Not enough SP!");
							}
						}
						$(".player_action_selector button").unbind("click");
						alert("End user's turn");
						$(".whoseTurn").empty();
						$(".whoseTurn").append("Get off me")
						appendEnemies();
						enemyTurn();
					});	
			});
		});		

});

};
