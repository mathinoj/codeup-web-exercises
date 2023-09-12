"use strict"

// function showMultiplicationTable(number){
// 	for(let i = 1; i <= 10; i++){
// 		console.log(`${number} x ${i} = ${number*i}`)
// 		// return number * i;
// 	}
// }
// showMultiplicationTable((7))


for(let i = 1; i <= 10; i++){
	let random = Math.floor(Math.random() * 180) + 20;
	// console.log(random)
	if(random % 2 === 0){
		console.log(`${random} is even`)
	} else {
		console.log(`${random} is odd`)
	}
}

for(let i = 1; i <10; i++){
	let repeater = i.toString();
	console.log(repeater.repeat(i))
}
