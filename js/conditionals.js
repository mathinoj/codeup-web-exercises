"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color){
	// let colorz = prompt('Write a color in the box below!')
	// console.log('colorz: ' +colorz)
	// let color = colorz.toLowerCase()
	if(color === 'red'){
		alert(`${color} is the color of strawberries.`)
	} else if(color === 'orange'){
		alert(`Oranges are ${color}`)
	} else if(color === 'yellow'){
		alert(`Bananas are ${color}`)
	} else if(color === 'green'){
		alert(`My money is ${color}`)
	} else if(color === 'blue'){
		alert(`Sky is ${color}`)
	} else if(color === 'indigo'){
		alert(`Old digi watches had background color of ${color}`)
	} else if (color === 'violet'){
		alert(`Purple is similar to ${color}`)
	} else {
		alert(`I am not familiar with ${color}`)
	}
}
// console.log(analyzeColor('red'))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
// will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(randomColor)
// console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// let colorz = prompt('Write a color in the box below!');
// let colorz = 'violet'
// switch(colorz){
// 	case "red":
// 		alert(`You chose ${colorz}, my hair is red!`)
// 		break;
// 	case "orange":
// 		alert(`You chose ${colorz}, my orange is orange!`)
// 		break;
// 	case "yellow":
// 		alert(`You chose ${colorz}, i am not yella!`)
// 		break;
// 	case "green":
// 		alert(`You chose ${colorz}, my whip is green!`)
// 		break;
// 	case "blue":
// 		alert(`You chose ${colorz}, i got the blues!`)
// 		break;
// 	case "indigo":
// 		alert(`You chose ${colorz}, indigo is aight!`)
// 		break;
// 	case "violet":
// 		alert(`You chose ${colorz}, that makes me violent!`)
// 		break;
// 	default:
// 		alert(`${colorz} isnt my favorite but lets order some!`)
// 		break;
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let showColor = prompt(`Write a color!`)
// console.log(analyzeColor(showColor))
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, total){
	if(luckyNumber === 0){
		alert(`Lucky number is ${luckyNumber}. You get no discount. Your total is still $${total}`)
	} else if (luckyNumber === 1){
		let x = total - (total * .10);
		alert(`Lucky number is ${luckyNumber}. You get a 10% discount. Your old total was $${total}, your new total is $${x}`)
	} else if (luckyNumber === 2){
		let y = total - (total * .25);
		alert(`Lucky number is ${luckyNumber}. You get a 25% discount. Your old total was $${total}, your new total is $${y}`)
	} else if (luckyNumber === 3){
		let z = total - (total * .35);
		alert(`Lucky number is ${luckyNumber}. You get a 35% discount. Your old total was $${total}, your new total is $${z}`)
	} else if (luckyNumber === 4){
		let q = total - (total * .50);
		alert(`Lucky number is ${luckyNumber}. You get a 50% discount. Your old total was $${total}, your new total is $${q}`)
	} else if (luckyNumber === 5){
		alert(`Your lucky number is ${luckyNumber}. Your total was $${total}, but now its $0!`)
	}
}
// console.log(calculateTotal(5, 100))
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
console.log("luckyNumb: " +luckyNumber)
// let total = prompt('What is your total?')
// console.log(calculateTotal(luckyNumber, total))


// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved

let questionNumb = confirm('Would you like to enter a number?')
console.log('questionNumb: ' +questionNumb)
if(questionNumb === true) {
	let enterNum = prompt("Enter a number!")
	let enterNumb = parseInt(enterNum)
	console.log('enterNumb: ' + enterNumb)
	console.log("enterNumb is... " + typeof enterNumb)

	console.log(Boolean(enterNumb))
	let isEntryTorF = Boolean(enterNumb)
	console.log("isEntryOf: " +isEntryTorF)
	let enterNumbs;
		while (isEntryTorF !== true) {
			console.log('enter: ' +enterNum)
			enterNumbs = prompt(`You entered: ${enterNumbs || enterNum}, that is not a numb. Enter a numb.`);
			let enterNumb = parseInt(enterNumbs)
			console.log("enterNumbZ: " +enterNumbs)
			console.log("enterNumb: " +enterNumb)
			if(enterNumb <0 || enterNumb >0){
				if (enterNumb % 2 === 0 && enterNumb > 0) {
					alert(`Your number is ${enterNumb}. It is even, and is positive. Your number plus 100 equals ${enterNumb + 100}`)
				} else if (enterNumb % 2 !== 0 && enterNumb > 0) {
					alert(`Your number is ${enterNumb}. It is odd, and is positive. Your number plus 100 equals ${enterNumb + 100}`)
				} else if (enterNumb % 2 === 0 && enterNumb < 0) {
					alert(`Your number is ${enterNumb}. It is even, and is negative. Your number plus 100 equals ${enterNumb + 100}`)
				} else if (enterNumb % 2 !== 0 && enterNumb < 0) {
					alert(`Your number is ${enterNumb}. It is odd, and is negative. Your number plus 100 equals ${enterNumb + 100}`)
				}
				break;
			} else {
				alert('buy')
				break;
			}
		}
			if (enterNumb % 2 === 0 && enterNumb > 0) {
				alert(`Your number is ${enterNumb}. It is even, and is positive. Your number plus 100 equals ${enterNumb + 100}`)
			} else if (enterNumb % 2 !== 0 && enterNumb > 0) {
				alert(`Your number is ${enterNumb}. It is odd, and is positive. Your number plus 100 equals ${enterNumb + 100}`)
			} else if (enterNumb % 2 === 0 && enterNumb < 0) {
				alert(`Your number is ${enterNumb}. It is even, and is negative. Your number plus 100 equals ${enterNumb + 100}`)
			} else if (enterNumb % 2 !== 0 && enterNumb < 0) {
				alert(`Your number is ${enterNumb}. It is odd, and is negative. Your number plus 100 equals ${enterNumb + 100}`)
			}
} else {
	alert('Bye!')
}

