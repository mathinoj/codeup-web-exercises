'use strict'


// let img = document.createElement('img');
// img.src = 'img/Contra1.jpeg';
// let x = document.querySelector('div').appendChild(img);
// console.log(x)

let butt = document.createElement('button')
let y = document.querySelector('body').appendChild(butt)
// console.log(y)

let grabNewButt = document.querySelector('button')
grabNewButt.setAttribute('id', 'newButton')
grabNewButt.innerText = 'Press Dis'
// console.log(y)


// Create a button that, when clicked, makes the last li in each ul have a yellow background.
let alertIt = function (event){
	alert('yo!')
}

let x = document.getElementById('newButton')
x.addEventListener('click', (alertIt))
console.log(x)

