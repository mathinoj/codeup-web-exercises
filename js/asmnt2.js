// Write a function named checkForNumber that accepts an argument and returns a string 'number' or "not a number" based on whether the input is a number.
//
// checkForNumber(-1) // "number"
// checkForNumber(0) // "number"
// checkForNumber(6) // "number"
// checkForNumber() // "not a number"
// checkForNumber("hello") // "not a number"
// checkForNumber("777") // "not a number"
// Write a function named evenOrOdd that returns the string "even" or "odd" when passed a numeric argument. The resulting string should represent whether the number is even or odd.
//
// evenOrOdd(20) // "even"
// evenOrOdd(0) // "even"
// evenOrOdd(-28) // "even"
// evenOrOdd("22") // "even"
// evenOrOdd(5) // "odd"
// evenOrOdd(-93) // "odd"
// evenOrOdd("37") // "odd"
// Write a function named doubleTheElements that accepts an array of numbers and returns an array with double the value of each number. You can EITHER create and return a completely new array that stores the doubled elements, or you can double the elements in the array parameter and simply return the parameter.
//
// doubleTheElements([7, 8, 9, 10]) // [14, 16, 18, 20]
// doubleTheElements([1, 2, 3]) // [2, 4, 6]
// doubleTheElements([9, -9, 9.2]) // [18, -18, 18.4]
// Write a function named sumOfElements that accepts an array of numbers and returns the sum of those numbers.
//
// sumOfElements([1, 2, 3]) // 6
// sumOfElements([4, 6, 8, 10, 12]) // 40
// sumOfElements([1, .5]) // 1.5
// Write a function named average that accepts an array of numbers and returns the AVERAGE of those numbers. HINT: you can use your sumOfElements function from the above problem to help you with this problem.
//
// average([1, 2, 3]) // 2
// average([4, 6, 8, 10, 12]) // 8
// average([1, 2]) // 1.5
// Write a function named totalPrice that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the sum of every object's price property.
//
// totalPrice([
// 	{name: 'tomatoes', price: 4},
// 	{name: 'potatoes', price: 6},
// 	{name: 'wine', price: 16},
// ])
// // returns 26
// Write a function named findHighestPrice that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the highest price value from the array. findHighestPrice.
//
// findHighestPrice([
// 	{name: 'tomatoes', price: 4},
// 	{name: 'potatoes', price: 6},
// 	{name: 'wine', price: 16},
// ])
// // returns 16
// Write a function named newProduct with two parameters, a string that contains a name, and a number representing the product's price, and returns an object with properties name and price.
//
// newProduct('tomatoes', 3.99) // returns {name: 'tomatoes', price: 3.99}
// newProduct('Yu-Gi-Oh Booster Pack', 5.89) // returns {name: 'Yu-Gi-Oh Booster Pack', price: 5.89}
// Write a function named countWords that accepts a string and returns the number of words in that string. A "word" is defined as non-whitespace characters separated from other words by a space.
//
// countWords('Hello, Codeup!') // 2
// countWords('The quick brown fox jumps over the lazy dog!') // 9
// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
//
// isNegative(-1) // true
// isNegative(-5) // true
// isNegative(0) // false
// isNegative(6) // false
// Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10.
//
// isTen(1) // false
// isTen(10) // true
// isTen('10') // false

function checkForNumber(num){
	if (typeof num === 'number') {
		return 'number'
	} else {
		return 'not a number'
	}
}
checkForNumber(5)

function evenOrOdd(num){
	if(num % 2 === 0){
		return 'even'
	} else {
		return 'odd'
	}
}

function doubleTheElements(arrEnter){
	let newArr = [...arrEnter]
	for(let i = 0; i < arrEnter.length; i++){
		newArr[i] = newArr[i]*=2
	}
	return newArr
}

function sumOfElements(sumArr) {
	let sum = 0;
	let newArr = [...sumArr]
	for (let i = 0; i < sumArr.length; i++) {
		newArr = sum += sumArr[i]
	}
	return newArr;
}

function average(arrNum){
	let sum = 0;
	let newArr = [...arrNum];
	for(let i=0; i < arrNum.length; i++){
		newArr = (sum += arrNum[i])/arrNum.length
	}
	return newArr
}
function isNegative(num){
	return num < 0;
}


function totalPrice(arrObj){
	let sum = 0;
	let newArr = [...arrObj];
	for(let i = 0; i < arrObj.length; i++){
		newArr = sum += arrObj[i].price
	}
	return sum
}


function isTen(num){
	return num === 10;
}

function countWords(sting){
	if(sting === ""){
		return 0;
	} else {
		return sting.split(" ").length;
	}
}
