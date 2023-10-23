'use strict'

// fetch(`https://api.openweathermap.org/data/2.5/weather?` +
// 	`lat=29.426825118534886&lon=-98.48948239256946` +
// 	// `id=4726206` +
// 	`&appid=${WEATHERMAP_API_KEY}` +
// 	`&units=imperial`)
// 	.then( data => data.json())
// 	.then( currentWeather => console.log(currentWeather));

let dateShow = document.querySelector('#forecast')

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
	`lat=29.426825118534886&lon=-98.48948239256946` +
	`&appid=${WEATHERMAP_API_KEY}` +
	`&units=imperial`)
	.then( data => data.json())
	.then( forecast => {
		// console.log(forecast)
		let forecastArr = forecast.list;
		// console.log(forecastArr)
		for(let i=0; i < forecastArr.length; i++){
		// forecast.list.forEach(weather => {
			// console.log(weather.dt)
			// console.log(forecastArr[i])

			let forecastDt = forecastArr[i].dt
			const date = new Date(forecastDt * 1000);
			// console.log(date)
			let month = (date.getMonth()+1)
			let day = (date.getUTCDate());
			let year = (date.getUTCFullYear())
			let hours = date.getHours()

			let fullDate = (`${month}-${day}-${year}`)
			let fullTime = `${hours}:00`

			let tempLow = forecastArr[i].main.temp_min;
			let tempMax = forecastArr[i].main.temp_max;
			let tempLoMax = `${tempLow} F / ${tempMax} F`
			console.log(forecastArr[i])

			let weatherId = forecastArr[i].weather[0].icon;

			// DESCRIPTION
			let weatherDescription = `Description: ${forecastArr[i].weather[0].description}`
			// console.log(weatherDescription)

			// HUMIDITY
			let weatherHumid = `Humidity: ${forecastArr[i].main.humidity}`;
			// console.log(weatherHumid)

			// WIND

			// PRESSURE
			if (hours === 16){
				let fullDateShow = document.createElement('h4')
				let tempLoHi = document.createElement('h6')
				let weatherIcon = document.createElement('img')
				weatherIcon.src = `https://openweathermap.org/img/w/${weatherId}.png`
				let description = document.createElement('p')
				description.setAttribute('class', 'weatherDescription')
				let humid = document.createElement('p')
				humid.setAttribute('class', 'humidity')



				fullDateShow.innerText = fullDate;
				tempLoHi.innerText = tempLoMax;
				weatherIcon.innerHTML = weatherIcon;
				description.innerText = weatherDescription
				humid.innerText = weatherHumid
				// dateShow.innerText = fullDate;
				dateShow.appendChild(fullDateShow)
				dateShow.appendChild(tempLoHi)
				dateShow.appendChild(weatherIcon)
				dateShow.appendChild(description)
				dateShow.appendChild(humid)
				// console.log(tempMax)
				console.log(weatherId)
				// console.log(fullDate)
			}

			}
		// })

	});


// const date = new Date(currentWeather.dt * 1000);
// console.log(date.getFullYear);

// const date = new Date(currentWeather.dt * 1000);
// console.log(date.getFullYear);