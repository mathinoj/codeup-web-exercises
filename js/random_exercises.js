"use strict"

//create a function that accepts an array of numbers and returns the average!
function average(numArr){
	let numAvgArr = numArr;
	let numAvgArrLength = numAvgArr.length

	let sum = 0;
	for(let i = 0; i < numAvgArrLength; i++){
		console.log(sum += numAvgArr[i])
	}
	console.log((sum / numAvgArrLength).toFixed(2))
}
average([2, 2, 2])
