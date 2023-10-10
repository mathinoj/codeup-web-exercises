"use strict"

// let overallTimer = 6;
// let x = setInterval(updateTimer, 1000);
//
// function updateTimer() {
// 	if (overallTimer == 4) {
// 		alert('EXTERMINATE!');
// 		document.body.innerHTML = '';
// 	} else if (overallTimer > 0) {
// 		document.getElementById('timer').innerHTML = detonationTimer;
// 	}
//
// 	overallTimer--;
// }
// updateTimer()

let count = 0;
let max = 6;
let interval = 1000; // interval time in milliseconds

const intervalTime = setInterval( () => {
	if (count === max) {
		clearInterval(intervalTime);
	} else {
		count++;
		// console.log('Repeating this line ' + count);
		document.getElementById('timer').innerHTML = count;
	}
}, interval);


// const interval2secs = setInterval( () => {
// 	if (count === 2) {
// 		clearInterval(interval2secs);
// 		let x = document.querySelector('img');
// 		console.log(x)
// 		x.setAttribute('src', 'img/codyDuck.png')
// 		console.log(x)
// 	} else {
// 		// count++;
// 		// console.log('Repeating this line ' + count);
// 		// document.getElementById('timer').innerHTML = count;
// 	}
// }, interval);
//
// const interval4secs = setInterval( () =>{
// 	if(count === 4){
// 		clearInterval(interval4secs)
// 		let profileName = document.querySelector('h2')
// 		profileName.innerHTML = '<h2>Matt Dogg</h2>'
// 		console.log("4 secs")
// 	} else {
// 		// count++;
// 		document.getElementById('timer').innerHTML = count;
// 	}
// }, interval)
//
// const intervalMax = setInterval( () =>{
// 	if(count === max){
// 		clearInterval(intervalMax)
//
// 		console.log("6 secs")
// 	} else {
// 		count++;
// 		document.getElementById('timer').innerHTML = count;
// 	}
// }, interval)

// const delay = 5000; // delay time in milliseconds
//
// const timeoutId = setTimeout(() => alert('Here is a delayed hello!'), delay);

setTimeout(() => {
	let x = document.querySelector('img');
	console.log(x)
	x.setAttribute('src', 'img/codyDuck.png')
	console.log(x)
	// count++;
	// document.getElementById('timer').innerHTML = count;
}, 2000)

setTimeout(() => {
	let profileName = document.querySelector('h2')
		profileName.innerHTML = '<h2>Matt Dogg</h2>'
}, 4000)

setTimeout(() => {
	let addClass = document.querySelector('p')
	addClass.classList.add('added-Class')
	console.log(addClass)
	let changeFontColor = document.getElementById('profile-desc')
	changeFontColor.style.color = 'rebeccaPurple';
}, 6000)

//Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.
// const intervalId = setInterval( () => {
let theInterval = setInterval(backgroundColor, 2000);
function backgroundColor() {
	let getButton = document.getElementById('profile-card')
	getButton.classList.toggle('bRound-Color')
}
let stopIt = function stopRound(){
	clearTimeout(theInterval)
}
let getButton = document.getElementById('toggle-btn')
getButton.addEventListener('click', stopIt)
// https://www.w3schools.com/jsref/met_win_cleartimeout.asp



