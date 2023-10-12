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
	let youEl = document.querySelectorAll('ul')
	console.log(youEl.length)
	for (let i = 0; i < youEl.length; i++) {
		// console.log(youEl[i])
		// console.log(youEl[i].lastElementChild)

		let x = document.getElementById('newButton')
		x.addEventListener('click',
			function () {
				youEl[i].lastElementChild.style.backgroundColor = 'goldenrod'
			})

		// console.log(youEl[i])
	}
		// youEl.nextElementSibling.style.backgroundColor = 'red'
    // https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist

// When any h3 is clicked, the lis underneath it should have a fontWeight of "bold". Hint: you should use this in the event listener to access the next sibling of the h3 that is clicked. You can get to the corresponding ul by traversing to the h3's sibling and then it's children.
let grabU = document.querySelectorAll('h3')
for(let i = 0; i < grabU.length; i++) {
	let g = grabU[i]
	// console.log(g)

	g.addEventListener('click',
		function () {
			this.nextElementSibling.style.fontWeight = 'bold'
		}
	);
}

//When any list item is clicked, the first li of that list item's parent ul should have a font color of blue. Hint: you should again rely on this in the li event handler.
let grabLi = document.querySelectorAll('li')
for(let i = 0; i < grabLi.length; i++){
	let b = grabLi[i]
// 	console.log(b)
console.log(grabLi)
	b.addEventListener('click',
		function (){
		this.parentElement.firstElementChild.style.backgroundColor = 'red'
		})
}

