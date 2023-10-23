'use strict'

const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

// console.log(users)
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// let threeLangs = users.filter(function(user){
// 	if(user.languages.length >+3){
// 		return true
// 	}
// return false
// })
// console.log(threeLangs)
let threeLanguages = users.filter(n => n.languages.length >= 3)
console.log(threeLanguages)

// Use .map to create an array of strings where each element is a user's email address
let emiz = users.map( emz => emz.email)
console.log(emiz)

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let start = 0;
let yoe = users.reduce((total, years) =>
	total + years.yearsOfExperience, start);
console.log(yoe)

//let yoe = users.reduce(function(total, years){
// return total + user.yearsOfExperience;
// }, 0);

// 	Use .reduce to get the longest email from the list of users.
function findMaxE(maxSoFar, currentLength){
	let x = currentLength.email.length
	// console.log(x)
	let y = maxSoFar.length
	// console.log(y)
	if(x > y){
		return currentLength.email;
	}
	return maxSoFar;
}
let maxEmail = users.reduce(findMaxE, users[0].email)
console.log(maxEmail)

// 	Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let restart = "";
let userName = users.reduce((total, usersNames) =>
	total + ", " + usersNames.name, restart);
let u = userName.substring(1)
// https://javascript.plainenglish.io/how-to-remove-a-leading-comma-from-a-javascript-string-e703db36d975
console.log(`Your instructors are: ${u.trim()}.`)
// https://www.w3schools.com/jsref/jsref_trim_string.asp


let lengaus = "";
let languages = users.reduce((total, usersLanguages) =>
	total + ", " + usersLanguages.languages, lengaus);
// console.log(lengaus)
let b = languages.substring(1)
console.log(b)
// https://javascript.plainenglish.io/how-to-remove-a-leading-comma-from-a-javascript-string-e703db36d975
let c = b.trim()
console.log(c)
let v = c.split(' ')
console.log(v)
for(let i=0; i < v.length; i++){
	let t = v[i]
	let d = t.split(', ')
	let mh = d.join(',').split('')
	console.log(mh)
	for(let i=0; i<d.length; i++){
		console.log(d[i])
		let l = d[i].indexOf(',')
		console.log(l)
		// let bh = mh.splice(l, 1)
		let bh = mh.splice(l, 1, " ")
		console.log(bh)
		console.log(mh)
		console.log(l)

		// let s = d.splice(l, 1)
		// console.log(s)
	}

}
// let p = v.join('').split(' ')

