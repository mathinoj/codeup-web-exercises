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
	let resultSentence = wordInput.join(' ').split(', ').toString()
	console.log(resultSentence)
}
reverseOdd('Make sure you only reverse words of odd length')
// https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/#remove-an-element-from-an-array-with-a-for-loop-and-push

/**
 * TODO:
 * Remove the Letters ABC
 * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
 *
 * Examples
 * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
 * >> removeABC("hello world!") ➞ null
 * >> removeABC("") ➞ null
 *
 * Notes
 * If the given string does not contain "a", "b", or "c", return null.
 */
function removeABC(sentence){
	let b = sentence.toLowerCase()
	console.log(b)
	let x = b.split('')
	console.log(x)

	let newMinusArr = []

	for(let i=0; i < x.length; i++){
		// console.log(x[i])
		if(x[i] !== 'a' && x[i] !== 'b' && x[i] !== 'c'){
			newMinusArr.push(sentence[i])
		} else {

		}
	}
	let reducedSentence = newMinusArr.join(' ').split(', ').toString()
	console.log(reducedSentence)
}
removeABC('This might be a bit hard')

// If a number is divisible by 3, the student says “fizz” rather than the number.
// 	If a number is divisible by 5, they say “buzz” rather than the number.
// 	If a number is divisible by both, they say “fizz buzz”

function fizzBuzz(numb){
	for(let i=1; i <= numb; i++){
		// console.log(i)
		if(i % 3 === 0 && i % 5 === 0){
			console.log(`Fizz Buzz!: ${i}`);
		} else if (i % 3 === 0) {
			console.log(`Fizz!: ${i}`);
		} else if (i % 5 ===0) {
			console.log(`Buzz!: ${i}`);
		} else {
			console.log(i);
		}
	}
}
fizzBuzz(30)

/**
 * TODO:
 * Integer Digits Count
 * Create a function named count that counts the integer's number of digits.
 *
 * Examples
 *
 * >> count(318) ➞ 3
 * >> count(-92563) ➞ 5
 * >> count(4666) ➞ 4
 * >> count(-314890) ➞ 6
 * >> count(654321) ➞ 6
 * count(638476) ➞ 6
 *
 * Notes
 * For an added challenge, try to solve this without using strings.
 */

function count(numb){
	let y = numb.toString()
	let p = y.split(' ')

	// let x = y.length;
	console.log(p)

	let b = parseInt(numb)
	console.log(b)
}
count(-5)