'use strict'

fetch(`https://api.openweathermap.org/data/2.5/weather?` +
	`lat=29.426825118534886&lon=-98.48948239256946` +
	`&appid=${WEATHERMAP_API_KEY}`)
	.then( data => console.log(data));
