"use strict"

function showMultiplicationTable(number){
	for(let i = 1; i <= 10; i++){
		console.log(`${number} x ${i} = ${number*i}`)
		// return number * i;
	}
}
showMultiplicationTable((7))