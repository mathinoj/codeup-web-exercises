"use strict"

// let c=2
// for(let i = 1; i <= 16; i++){
//
// 	console.log(i + " | " + c**i);
// }

// let c = 2;
// let i = 1;
// while (i <= 16) {
// 	console.log('Iteration #' + i +": " + c**i);
// 	i++;
// }

// ICE CREAM - DO WHILE LOOP

// let i = 3;
// do {
// 	console.log('while loop iteration #' + i);
// 	i++;
// } while (i <= 10);

function cones() {
//This reps the amount of cones to sell
	let numberOfConesToSell = Math.floor(Math.random() * 50) + 50;
// The amount of cones being bought by her clients
	let amountOfConesBought = Math.floor(Math.random() * 5) + 1;

	let newAmount = numberOfConesToSell + amountOfConesBought;
	let totalCones = 100 - (numberOfConesToSell + amountOfConesBought);
	let minusCone = 100 - numberOfConesToSell;
	let conesRemaining = amountOfConesBought - minusCone;

	do {
		if(amountOfConesBought === 1){
			console.log(`I have sold ${numberOfConesToSell} cones. Customer bought ${amountOfConesBought} cone.`)
		} else {
			console.log(`I have sold ${numberOfConesToSell} cones. Customer bought ${amountOfConesBought} cones.`)
		}
	}
	while (totalCones >= 100);
	if (totalCones === 0) {
		console.log("All cones sold!")
	} else if ((numberOfConesToSell + amountOfConesBought) < 100) {
		console.log(`With the customer purchase I now have sold ${newAmount} cones. I Need to sell ${totalCones} more, then there will be no more cones.`);
	} else if (conesRemaining === 1){
		console.log(`Cant sell ${amountOfConesBought} cuz I have only have ${minusCone} cones left, but I can sell ${conesRemaining} cone. :(`)
	} else {
		console.log(`Cant sell ${amountOfConesBought} cuz I have only have ${minusCone} cones left, but I can sell ${conesRemaining} cones. :(`);
	}
}
cones();
