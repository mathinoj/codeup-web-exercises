alert('Welcome to site!')
let faveColor = prompt('Whats your fave color?');
alert(`My fave color is ${faveColor} and your fave color is ${faveColor}, what are the odds!`)


let promptMerm = prompt('How many days you rent Lil Merm?');
let promptBroBear = prompt('How many days you rent Bro Bear?');
let promptHercules = prompt("How many days you rent Hercules?");
let rentPrice = 3;
let parseMerm = parseInt(promptMerm)
let parseBB = parseInt(promptBroBear)
let parseHer = parseInt(promptHercules)
let totMovy = (parseMerm + parseBB + parseHer) * rentPrice;
alert(`Your total for all three movies is: $${totMovy}`)

let google = 400;
let amazon = 380;
let faceB = 350;
let promptG = prompt('How many hours you work at google?')
let promptA = prompt('How many hours you work at amazon?')
let promptFB = prompt('How many hours you work at bookface?')
let parseG = parseInt(promptG)
let parseA = parseInt(promptA)
let parseFB = parseInt(promptFB)
let totalPay = (google*parseG) + (amazon*parseA) + (faceB*parseFB)
alert(`Your total pay for the week is: $${totalPay}`)

let promptClass = prompt('Is the class full, Yes or No?');
let toLowClass = promptClass.toLowerCase();
let promptSched = prompt('Does this class conflict with sched, Yes or No?');
let toLowSched = promptSched.toLowerCase();
if(toLowClass === 'no' && toLowSched === 'no'){
    alert('You CAN enroll!')
}else{
    alert('You Cant Enroll!')
}

let promptPremium = confirm('Are you a premium member, OK(Yes) or Cancel(No)?');
// let lowPremium = promptPremium.toLowerCase();
// if(lowPremium === 'yes'){
if(promptPremium === true){
    alert('You get special offer!')
} else {
    let promptHowMany = prompt('How many items did you buy?');
    let parseHowMany = parseInt(promptHowMany);
    if (parseHowMany < 2 || parseHowMany === 2) {
        alert('You gotta buy more than 2 items!')
    } else if (parseHowMany > 2) {
        // let promptExpired = prompt('Has offer expired, Yes or No?');
        let promptExpired = confirm('Has offer expired, OK(Yes) or Cancel(No)?');
        // let lowExpired = promptExpired.toLowerCase();
        // if (lowExpired === 'yes') {
            if (promptExpired === true) {
                alert('We cant give special offer!')
        } else {
            alert('You qualify for special offer!')
        }
    }
}

