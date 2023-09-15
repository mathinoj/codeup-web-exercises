"use strict"

// let chooseOdd = Number(prompt("Choose an odd number between 1 and 50!"))
// console.log(`Numb to skip ${chooseOdd}`)
//
// for(let i=1; i <= 50; i++){
// 	if(i === chooseOdd){
// 		console.log(`Skipping number: ${chooseOdd}`)
// 	} else if(i % 2 !== 0 ){
// 		console.log("Here is odd number: " +i)
// 	}
// }

function numSkip() {
	let userInput;

	while (true) {
		userInput = prompt("Give me an odd number between 1 & 50");

		if (userInput % 2 !== 0 && userInput > 0 && userInput < 51) {
			break;
		}
	}

	console.log(`Number to skip is ${userInput}`);

	for (let i = 1; i < 50; i += 2) {
		if (i == userInput) {
			console.log(`Yikes! skipping number: ${i}`);
			continue;
		}
		console.log(`Here is an odd number: ${i}`);
	}
}
numSkip()

