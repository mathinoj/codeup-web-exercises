'use strict'

let sample = 'Hello Codeup';
console.log('sample: ' +sample)
// alert(`Hello from '${sample}'`)

let showIt = sample.length;
console.log('showIt: ' +showIt)

let addToUl = document.querySelector('#youEll')
let addLength = document.querySelector("#ellEye");
addLength.innerText = `Length = ${showIt}`;

let showCaps = sample.toUpperCase();
let showLow = sample.toLowerCase();
let addCaps = document.querySelector('#ellEye1');
addCaps.innerText = `All caps: ${showCaps} / all low: ${showLow}`

let conCat = sample + ' Students';
let addCat = document.querySelector('#ellEye2');
addCat.innerText = `Concatination station: ${conCat}`

let replace = conCat.replace(' Students', ' Class')
let replaceCat = document.querySelector('#ellEye3')
replaceCat.innerText = `Its been replaced: ${replace}`

let cIndex = replace.indexOf('c')
let bigC = replace.indexOf('C')
let cIndexLI = document.querySelector('#ellEye4')
cIndexLI.innerText = `What happened to "c" index: ${cIndex} // This is what "C" index should be: ${bigC}`

let showCode = replace.substring(6, 12);
let subStrang = document.querySelector('#ellEye5');
subStrang.innerText = `Should only see: ${showCode}`;

let merm = 3;
let broBear = 5;
let hurc = 1;
let price = 3;
let total = (merm + broBear + hurc) * price;
let showTotz = document.querySelector('#ellEye6');
showTotz.innerText = `Your movie total is: $${total}!`

let goog = 400;
let amazon = 380;
let faceB = 350;
let f = 10;
let g = 6;
let a = 4;
let payTotal = (goog*g) + (amazon*a) + (faceB*f)
let showPayTotz = document.querySelector('#ellEye7')
showPayTotz.innerText = `You earned: $${payTotal}`

let username = 'codeup';
let password = 'notastrongpassword';

let pWord5 = password.length >= 5;
let showPwrdLngth = document.querySelector('#ellEye8')
showPwrdLngth.innerText = `Pword length is at least 5chars long: ${pWord5}`

let findIt = password.includes(username)
let tfUserName = document.querySelector('#ellEye9')
tfUserName.innerText = `Is the username in the p-word? ${findIt}`

let pWord20 = password.length <= 20;
let tfPwrd20 = document.querySelector('#ellEye10');
tfPwrd20.innerText = `Is p-word less than or equal to 20: ${pWord20}`

let spaceUsername = ' codeup ';
let spacePass = ' notastrongpassword ';

let trimSpaceUser = spaceUsername.trim();
let trimSpacePass = spacePass.trim();
let trimUser = document.querySelector('#ellEye11');
trimUser.innerText =   `Username untrimmed: "${spaceUsername}", but w/ trim its: "${trimSpaceUser}"`
let trimPass = document.querySelector('#ellEye12');
trimPass.innerText = `Password untrimmed: "${spacePass}", but w/ trim its: "${trimSpacePass}"`

for(let i = 1; i <= 10; ++i){
    // let x = 1;
let iToString = i.toString()
let repetition = iToString.repeat(5)

    console.log(repetition)
    // console.log(i++)
    // console.log(typeof i)

}



