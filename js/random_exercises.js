"use strict"

//create a function that accepts an array of numbers and returns the average!
// function average(numArr){
// 	let numAvgArr = numArr;
// 	let numAvgArrLength = numAvgArr.length
//
// 	let sum = 0;
// 	for(let i = 0; i < numAvgArrLength; i++){
// 		console.log(sum += numAvgArr[i])
// 	}
// 	console.log((sum / numAvgArrLength).toFixed(2))
// }
// average([2, 2, 2])

function panto(wrd){
	let e = wrd.split(' ').join('').toLowerCase()
	console.log(e)
	// let toLowReg = e.toLowerCase()
	let y = e.split('').reverse().join('')
	console.log(y)
	let toLowRev = y.split(' ').join('')
	console.log(toLowRev)
	if(toLowRev === e){
		console.log('IT IS, IT IS!!!');
	} else {
		console.log('It AiNt, It AiNt!!');
	}
}
panto('matty')

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */
function totalPets(arrObj){
	console.log(arrObj)
	// console.log(arrObj.length)
	let sum = 0
	for(let i = 0; i < arrObj.length; i++){
		// console.log(i)
		// console.log(arrObj[i])
		let x = arrObj[i].pets
		// console.log("X: " +x)
		let y = sum+= x;
		// console.log(y)
	}
	console.log('Total # of pets is: ' +sum)
}
totalPets([
	{
		name: 'Fernando Mendoza',
		pets: 2
	},
	{
		name: 'Jo Mendoza',
		pets: 4
	},
	{
		name: 'Moe Mendoza',
		pets: 5
	},
])

/**
 * TODO:
 * Write a function named reverseOdd that will take a string as argument, reverse all the words which have odd length. The even length words are not changed.
 *
 * Examples
 *
 * >> reverseOdd("Bananas") ➞ "sananaB"
 * >> reverseOdd("One two three four") ➞ "enO owt eerht four"
 * >> reverseOdd("Make sure uoy only esrever sdrow of ddo length") ➞ "Make sure you only reverse words of odd length"
 *
 * Notes
 * There is exactly one space between each word and no punctuation is used.
 * Should work with empty string.
 * Should work with only one word.
 */
function reverseOdd(wrd){
	let wordInput = wrd.split(' ')
	console.log(wordInput)

	for(let i = 0; i < wordInput.length; i++){
		let eachWordLength = wordInput[i].length
		let reverseWord = wordInput[i].split('').reverse().join('')
		// console.log(reverseWord)

		if(eachWordLength % 2 !== 0) {
			let oddWord = wordInput[i]
			console.log(oddWord)
			let indexOfOddWord = wordInput.indexOf(oddWord)
			// console.log(indexOfOddWord)
			// console.log(reverseWord)
			wordInput[indexOfOddWord] = reverseWord;
			// console.log(wrdIpt)
			console.log(reverseWord)
		}
	}
	let resultSentence = wordInput.join(' ').split(', ')
	console.log(resultSentence)
}
reverseOdd('odd words make you act weirdly')