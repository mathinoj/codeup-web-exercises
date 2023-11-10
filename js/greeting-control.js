'use strict'

import {randGreet} from './greeting-logic.js'

function main() {
	document.querySelector('#greetButt').addEventListener('click', greetUser)
	}

	function greetUser(){
		let firstName = document.querySelector('#fName').value
		console.log(firstName)

		let greetThem = randGreet() + " " + firstName;

		document.querySelector('.greeting').innerText =
			greetThem;
	}
main();