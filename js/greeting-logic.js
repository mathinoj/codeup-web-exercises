'use strict'

import randomNumber from "./number-utils.js";

const greetings =
	[
		"Hello",
		"Hi",
		"Hey there",
		"Greetings",
		"Salutations",
		"Howdy",
		"Yo",
		"Bonjour",
		"Hola",
		"Ciao",
		"Namaste",
		"G'day",
		"What's up",
		"Sup",
		"How's it going",
		"Nice to meet you",
		"Welcome",
		"Hey",
		"How are you",
		"Pleased to meet you"
	];
// In greeting-logic.js, put the following array of greetings and create a function that returns a random greeting. Make sure to export what you need from this file and import the random number function from numberUtils.

export function randGreet(){
	let indexNumb = randomNumber(0, (greetings.length - 1))
	// for(let i=0; i < greetings.length; i++){
	// console.log(greetings[indexNumb])
	return greetings[indexNumb]
	// }
}
// randGreet()

