"use strict"

let chooseOdd = Number(prompt("Choose an odd number between 1 and 50!"))
// console.log('choose: ' +chooseOdd)
// let parseEntry = parseInt(chooseOdd)
console.log(`Numb to skip ${chooseOdd}`)

for(let i=1; i <= 50; i++){
	// console.log('choose: ' +chooseOdd)
	// console.log(i)
	// console.log(parseEntry)
	// console.log(`Numb to skip ${chooseOdd}`)
	if(i === chooseOdd){
		console.log(`Skipping number: ${chooseOdd}`)
		// break;
	} else if(i % 2 !== 0 ){
		console.log("Here is odd number: " +i)
		// continue;
		// console.log(`Numb to skip ${chooseOdd}`)
	}
	// console.log(i)
	// console.log("Here is odd number: " +i)

}

