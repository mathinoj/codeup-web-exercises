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


// let back = document.querySelector('ul')
// console.log(back.length)

// Create a button that, when clicked, makes the last li in each ul have a yellow background.
	let youEl = document.querySelectorAll('ul')
	console.log(youEl.length)
	for (let i = 0; i < youEl.length; i++) {
		// console.log(youEl[i])
		console.log(youEl[i].lastElementChild)

		let x = document.getElementById('newButton')
		x.addEventListener('click',
			function () {
				youEl[i].lastElementChild.style.backgroundColor = 'goldenrod'
			})
	}
    // https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist

// When any h3 is clicked, the lis underneath it should have a fontWeight of "bold". Hint: you should use this in the event listener to access the next sibling of the h3 that is clicked. You can get to the corresponding ul by traversing to the h3's sibling and then it's children.




