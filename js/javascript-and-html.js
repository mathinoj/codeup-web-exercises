'use strict'

let sample = 'Hello Codeup';
// console.log('sample: ' +sample)
// alert(`Hello from '${sample}'`)

let showIt = sample.length;
console.log('showIt: ' +showIt)

let addToUl = document.querySelector('#youEll')
let addLength = document.querySelector("#ellEye");
addLength.innerText = `Length = ${showIt}`;



let showCaps = sample.toUpperCase();
let showLow = sample.toLowerCase();
let ul1 = document.getElementById("youEll");
let li1 = document.createElement("li");
li1.appendChild(document.createTextNode(`All caps: ${showCaps} / all low: ${showLow}`));
ul1.appendChild(li1);
// let addCaps = document.querySelector('#ellEye1');
// addCaps.innerText = `All caps: ${showCaps} / all low: ${showLow}`

let conCat = sample + ' Students';
// let addCat = document.querySelector('#ellEye2');
// addCat.innerText = `Concatination station: ${conCat}`
let ul2 = document.getElementById("youEll");
let li2 = document.createElement("li");
li2.appendChild(document.createTextNode(`Concatination station: ${conCat}`));
ul2.appendChild(li2);

let replace = conCat.replace(' Students', ' Class')
// let replaceCat = document.querySelector('#ellEye3')
// replaceCat.innerText = `Its been replaced: ${replace}`
let ul3 = document.getElementById("youEll");
let li3 = document.createElement("li");
li3.appendChild(document.createTextNode(`Its been replaced: ${replace}`));
ul3.appendChild(li3);


let cIndex = replace.indexOf('c')
let bigC = replace.indexOf('C')
// let cIndexLI = document.querySelector('#ellEye4')
// cIndexLI.innerText = `What happened to "c" index: ${cIndex} // This is what "C" index should be: ${bigC}`
let ul4 = document.getElementById("youEll");
let li4 = document.createElement("li");
li4.appendChild(document.createTextNode(`What happened to "c" index: ${cIndex} // This is what "C" index should be: ${bigC}`));
ul4.appendChild(li4);

let showCode = replace.substring(6, 12);
// let subStrang = document.querySelector('#ellEye5');
// subStrang.innerText = `Should only see: ${showCode}`;
let ul5 = document.getElementById("youEll");
let li5 = document.createElement("li");
li5.appendChild(document.createTextNode(`Should only see: ${showCode}`));
ul5.appendChild(li5);


let merm = 3;
let broBear = 5;
let hurc = 1;
let price = 3;
let total = (merm + broBear + hurc) * price;
// let showTotz = document.querySelector('#ellEye6');
// showTotz.innerText = `Your movie total is: $${total}!`
let ul6 = document.getElementById("youEll");
let li6 = document.createElement("li");
li6.appendChild(document.createTextNode(`Should only see: ${showCode}`));
ul6.appendChild(li6);

let goog = 400;
let amazon = 380;
let faceB = 350;
let f = 10;
let g = 6;
let a = 4;
let payTotal = (goog*g) + (amazon*a) + (faceB*f)
// let showPayTotz = document.querySelector('#ellEye7')
// showPayTotz.innerText = `You earned: $${payTotal}`
let ul7 = document.getElementById("youEll");
let li7 = document.createElement("li");
li7.appendChild(document.createTextNode(`You earned: $${payTotal}`));
ul7.appendChild(li7);

let username = 'codeup';
let password = 'notastrongpassword';

let pWord5 = password.length >= 5;
// let showPwrdLngth = document.querySelector('#ellEye8')
// showPwrdLngth.innerText = `Pword length is at least 5chars long: ${pWord5}`
let ul8 = document.getElementById("youEll");
let li8 = document.createElement("li");
li8.appendChild(document.createTextNode(`Pword length is at least 5chars long: ${pWord5}`));
ul8.appendChild(li8);

let findIt = password.includes(username)
// let tfUserName = document.querySelector('#ellEye9')
// tfUserName.innerText = `Is the username in the p-word? ${findIt}`
let ul9 = document.getElementById("youEll");
let li9 = document.createElement("li");
li9.appendChild(document.createTextNode(`Is the username in the p-word? ${findIt}`));
ul9.appendChild(li9);

let pWord20 = password.length <= 20;
// let tfPwrd20 = document.querySelector('#ellEye10');
// tfPwrd20.innerText = `Is p-word less than or equal to 20: ${pWord20}`
let ul10 = document.getElementById("youEll");
let li10 = document.createElement("li");
li10.appendChild(document.createTextNode(`Is p-word less than or equal to 20: ${pWord20}`));
ul10.appendChild(li10);

let spaceUsername = ' codeup ';
let spacePass = ' notastrongpassword ';

let trimSpaceUser = spaceUsername.trim();
let trimSpacePass = spacePass.trim();
// let trimUser = document.querySelector('#ellEye11');
// trimUser.innerText =   `Username untrimmed: "${spaceUsername}", but w/ trim its: "${trimSpaceUser}"`
let ul11 = document.getElementById("youEll");
let li11 = document.createElement("li");
li11.appendChild(document.createTextNode(`Username untrimmed: "${spaceUsername}", but w/ trim its: "${trimSpaceUser}"`));
ul11.appendChild(li11);
// let trimPass = document.querySelector('#ellEye12');
// trimPass.innerText = `Password untrimmed: "${spacePass}", but w/ trim its: "${trimSpacePass}"`
let ul12 = document.getElementById("youEll");
let li12 = document.createElement("li");
li12.appendChild(document.createTextNode(`Password untrimmed: "${spacePass}", but w/ trim its: "${trimSpacePass}"`));
ul12.appendChild(li12);

for(let i = 1; i < 10; i++){
    // console.log("I: " +i)
    let iToString = i.toString()
    let repetition = iToString.repeat(i)
    console.log(repetition)
}

function addTwoNumbs (firstNumb, secondNumb){
    const sum = firstNumb + secondNumb;
    return sum;
}
// now you can call(invoke) this 'addTwoNumbs' func in the console




