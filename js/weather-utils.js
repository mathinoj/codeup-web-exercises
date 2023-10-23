'use strict'

function appendLeadingZeroes(n){
	if(n <= 9){
		return "0" + n;
	}
	return n;
}

function dateFromTimeStamp(timeStamp){
	let dateTime = new Date(timeStamp * 1000);
	let year = dateTime.getFullYear();
	let month = appendLeadingZeroes(dateTime.getMonth() + 1);
	let day = dateTime.getUTCDate();
	let hours = dateTime.getHours();
	return `${year}-${month}-${day} ${hours}:00`;
}