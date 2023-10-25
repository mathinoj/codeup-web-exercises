'use strict'

let dateShow = document.querySelector('#forecast')
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
	`lat=29.426825118534886&lon=-98.48948239256946` +
	`&appid=${WEATHERMAP_API_KEY}` +
	`&units=imperial`)
	.then(data => data.json())
	.then(forecast => {
		let forecastArr = forecast.list;
		for (let i = 6; i < forecastArr.length; i += 8) {
			console.log(forecastArr[i])
			let forecastDt = forecastArr[i].dt
			const date = new Date(forecastDt * 1000);
			let month = (date.getMonth() + 1)
			let day = (date.getUTCDate());
			let year = (date.getUTCFullYear())
			let hours = date.getHours()
			// console.log(hours)

			//DATE
			let fullDate = (`${month}-${day}-${year}`)
			console.log(fullDate)
			//TEMPERATURE
			let tempLow = forecastArr[i].main.temp_min;
			let tempMax = forecastArr[i].main.temp_max;
			let tempLoMax = `${tempLow} F / ${tempMax} F`
			//WEATHER ICON
			let weatherId = forecastArr[i].weather[0].icon;
			// DESCRIPTION
			let weatherDescription = `Description: ${forecastArr[i].weather[0].description}`
			// HUMIDITY
			let weatherHumid = `Humidity: ${forecastArr[i].main.humidity}`;
			// WIND
			let windSpeed = `Wind Speed: ${forecastArr[i].wind.speed}`
			// PRESSURE
			let pressureMain = `Pressure: ${forecastArr[i].main.pressure}`

			// if (hours === 16){
			let fullDateShow = document.createElement('h4')
			fullDateShow.setAttribute('id', 'fullDate')
			let tempLoHi = document.createElement('h6')
			tempLoHi.setAttribute('id', 'temp')
			let weatherIcon = document.createElement('img')
			weatherIcon.src = `https://openweathermap.org/img/w/${weatherId}.png`
			weatherIcon.setAttribute('id', "icon")
			let description = document.createElement('p')
			description.setAttribute('id', 'weatherDescription')
			let humid = document.createElement('p')
			humid.setAttribute('id', 'humidity')
			let wind = document.createElement('p')
			wind.setAttribute('id', 'wind')
			let pressure = document.createElement('p')
			pressure.setAttribute('id', 'pressure')
			// let breakLine = document.createElement('hr')


			fullDateShow.innerText = fullDate;
			tempLoHi.innerText = tempLoMax;
			weatherIcon.innerHTML = weatherId;
			description.innerText = weatherDescription
			humid.innerText = weatherHumid
			wind.innerText = windSpeed;
			pressure.innerText = pressureMain;

			// dateShow.innerText = fullDate;
			dateShow.appendChild(fullDateShow)
			dateShow.appendChild(tempLoHi)
			dateShow.appendChild(weatherIcon)
			dateShow.appendChild(description)
			dateShow.appendChild(humid)
			dateShow.appendChild(wind)
			dateShow.appendChild(pressure)
		}
	});




function searchIt (e) {
	let searcher = document.getElementById('searchBar')
	let filter = searcher.value.toLowerCase()
	console.log(filter)
	if (filter) {

		// const coords = e.lngLat;
		// console.log(coords)
		geocode(filter, MAPBOX_API_KEY).then(function (results) {
			console.log(results)
			let inputLong = results[0]
			let inputLat = results[1]
			console.log("long: " + inputLong)
			console.log("lat: " + inputLat)

			fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
				`lat=${inputLat}&lon=${inputLong}` +
				`&appid=${WEATHERMAP_API_KEY}` +
				`&units=imperial`)
				.then(data => data.json())
				.then(forecast => {
					let forecastArr = forecast.list;
					for (let i = 6; i < forecastArr.length; i += 8) {
						console.log(forecastArr[i])
						let forecastDt = forecastArr[i].dt
						const date = new Date(forecastDt * 1000);
						let month = (date.getMonth() + 1)
						let day = (date.getUTCDate());
						let year = (date.getUTCFullYear())
						let hours = date.getHours()
						// console.log(hours)

						//DATE
						let fullDate = (`${month}-${day}-${year}`)
						console.log(fullDate)
						//TEMPERATURE
						let tempLow = forecastArr[i].main.temp_min;
						let tempMax = forecastArr[i].main.temp_max;
						let tempLoMax = `${tempLow} F / ${tempMax} F`
						//WEATHER ICON
						let weatherId = forecastArr[i].weather[0].icon;
						// DESCRIPTION
						let weatherDescription = `Description: ${forecastArr[i].weather[0].description}`
						// HUMIDITY
						let weatherHumid = `Humidity: ${forecastArr[i].main.humidity}`;
						// WIND
						let windSpeed = `Wind Speed: ${forecastArr[i].wind.speed}`
						// PRESSURE
						let pressureMain = `Pressure: ${forecastArr[i].main.pressure}`

						// if (hours === 16){
						let fullDateShow = document.getElementById('fullDate')
						let tempLoHi = document.getElementById('temp')
						let weatherIcon = document.getElementById('icon')
						let description = document.getElementById('weatherDescription')
						let humid = document.getElementById('humidity')
						let wind = document.getElementById('wind')
						let pressure = document.getElementById('pressure')
						// let breakLine = document.createElement('hr')


						fullDateShow.innerText = fullDate;
						tempLoHi.innerText = tempLoMax;
						weatherIcon.innerHTML = weatherId;
						description.innerText = weatherDescription
						humid.innerText = weatherHumid
						wind.innerText = windSpeed;
						pressure.innerText = pressureMain;

						// dateShow.innerText = fullDate;
						dateShow.appendChild(fullDateShow)
						dateShow.appendChild(tempLoHi)
						dateShow.appendChild(weatherIcon)
						dateShow.appendChild(description)
						dateShow.appendChild(humid)
						dateShow.appendChild(wind)
						dateShow.appendChild(pressure)
					}
				});
		})
	}
}




