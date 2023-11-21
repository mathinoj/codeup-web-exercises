'use strict'


let dateShow = document.querySelector(`.forecast`)
// console.log(dateShow)
// let grabC = document.querySelectorAll('.card')
// // let grabContainer = document.querySelector('.container')
// let grabC = document.querySelectorAll('.card-body')
// let grabC = document.querySelector(`.card-${i}`)
// console.log(grabCd)
// let tryThis = document.querySelector("[data-forecast='4']")
let tryThis = document.querySelectorAll(".forecast")

let weatherArr = [];

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
	`lat=29.426825118534886&lon=-98.48948239256946` +
	`&appid=${WEATHERMAP_API_KEY}` +
	`&units=imperial`)
	.then(data => data.json())
	.then(forecast => {
		for (let i = 6; i < forecast.list.length; i += 8) {
			weatherArr.push(forecast.list[i])
		}

		console.log(weatherArr)
		for(let i=0; i < weatherArr.length; i++){
			let grabCard = document.querySelector(`#card-${i}`)

			//CITY
			let city = forecast.city.name;
			//DATE
			let grabDtFromList = weatherArr[i].dt;
			let date = new Date(grabDtFromList * 1000)
			let month = (date.getMonth() + 1)
			let day = (date.getUTCDate());
			let year = (date.getUTCFullYear())
			let fullDate = (`${month}-${day}-${year}`)
			//TEMPERATURE
			let tempLow = weatherArr[i].main.temp_min;
			let tempMax = weatherArr[i].main.temp_max;
			let tempLoMax = `${tempLow} F / ${tempMax} F`
			//WEATHER ICON
			let weatherId = weatherArr[i].weather[0].icon;
			// DESCRIPTION
			let weatherDescription = `Description: ${weatherArr[i].weather[0].description}`
			// HUMIDITY
			let weatherHumid = `Humidity: ${weatherArr[i].main.humidity}`;
			// WIND
			let windSpeed = `Wind Speed: ${weatherArr[i].wind.speed}`
			// PRESSURE
			let pressureMain = `Pressure: ${weatherArr[i].main.pressure}`


			let showCity = document.createElement('h3')
			showCity.setAttribute('id', `city-${i}`)
			let fullDateShow = document.createElement('h4')
			fullDateShow.setAttribute('id', `fullDate-${i}`)
			let tempLoHi = document.createElement('h6')
			tempLoHi.setAttribute('id', `temp-${i}`)
			let weatherIcon = document.createElement('img')
			weatherIcon.src = `https://openweathermap.org/img/w/${weatherId}.png`
					weatherIcon.setAttribute('id', `icon-${i}`)
			let description = document.createElement('p')
			description.setAttribute('id', `weatherDescription-${i}`)
			let humid = document.createElement('p')
			humid.setAttribute('id', `humidity-${i}`)
			let wind = document.createElement('p')
			wind.setAttribute('id', `wind-${i}`)
			let pressure = document.createElement('p')
			pressure.setAttribute('id', `pressure-${i}`)


			showCity.innerText = city;
			fullDateShow.innerText = fullDate;
			tempLoHi.innerText = tempLoMax;
			weatherIcon.innerHTML = weatherId;
			description.innerText = weatherDescription
			humid.innerText = weatherHumid
			wind.innerText = windSpeed;
			pressure.innerText = pressureMain;


			grabCard.appendChild(showCity)
			grabCard.appendChild(fullDateShow)
			grabCard.appendChild(tempLoHi)
			grabCard.appendChild(weatherIcon)
			grabCard.appendChild(description)
			grabCard.appendChild(humid)
			grabCard.appendChild(wind)
			grabCard.appendChild(pressure)
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

			const map = new mapboxgl.Map({
				container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
				style: 'mapbox://styles/mapbox/streets-v12',
				center: [inputLong, inputLat],
				zoom: 6
			});

			reverseGeocode({lng: inputLong, lat: inputLat}, MAPBOX_API_KEY).
			then( results => console.log(results) );

			const alamoInfo = {
				address: results,
				popupHTML: "<p>Welcome to the HERE!</p>"
			};

			function placeMarkerAndPopup(info, token, map) {
				geocode(info.address, token).then( coords => {
					let popup = new mapboxgl.Popup()
						.setHTML(info.popupHTML);
					let marker = new mapboxgl.Marker()
						.setLngLat(coords)
						.addTo(map)
						.setPopup(popup);
					popup.addTo(map);
				});
			}

			placeMarkerAndPopup(alamoInfo, MAPBOX_API_KEY, map);

			document.getElementById('fly').addEventListener('click', () => {
// Fly to a random location
				map.flyTo({
					center: [(Math.random() - 0.5) * 360, (Math.random() - 0.5) * 100],
					essential: true // this animation is considered essential with respect to prefers-reduced-motion
				});
			});

			fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
				`lat=${inputLat}&lon=${inputLong}` +
				`&appid=${WEATHERMAP_API_KEY}` +
				`&units=imperial`)
				.then(data => data.json())
				.then(forecast => {
					for (let i = 6; i < forecast.list.length; i += 8) {
						weatherArr.push(forecast.list[i])

					}

					for(let i=0; i < weatherArr.length; i++){
						let grabCard = document.querySelector(`#card-${i}`)


						//CITY
						let city = forecast.city.name;
						//DATE
						let grabDtFromList = weatherArr[i].dt;
						let date = new Date(grabDtFromList * 1000)
						let month = (date.getMonth() + 1)
						let day = (date.getUTCDate());
						let year = (date.getUTCFullYear())
						let fullDate = (`${month}-${day}-${year}`)
						//TEMPERATURE
						let tempLow = forecast.list[i].main.temp_min;
						let tempMax = forecast.list[i].main.temp_max;
						let tempLoMax = `${tempLow} F / ${tempMax} F`
						//WEATHER ICON
						let weatherId = forecast.list[i].weather[0].icon;
						// DESCRIPTION
						let weatherDescription = `Description: ${forecast.list[i].weather[0].description}`
						// HUMIDITY
						let weatherHumid = `Humidity: ${forecast.list[i].main.humidity}`;
						// WIND
						let windSpeed = `Wind Speed: ${forecast.list[i].wind.speed}`
						// PRESSURE
						let pressureMain = `Pressure: ${forecast.list[i].main.pressure}`


						let showCity = document.getElementById(`city-${i}`)
						let fullDateShow = document.getElementById(`fullDate-${i}`)
						let tempLoHi = document.getElementById(`temp-${i}`)
						let weatherIcon = document.getElementById(`icon-${i}`)
						let description = document.getElementById(`weatherDescription-${i}`)
						let humid = document.getElementById(`humidity-${i}`)
						let wind = document.getElementById(`wind-${i}`)
						let pressure = document.getElementById(`pressure-${i}`)

						showCity.innerText = city;
						fullDateShow.innerText = fullDate;
						tempLoHi.innerText = tempLoMax;
						weatherIcon.innerHTML = weatherId;
						description.innerText = weatherDescription
						humid.innerText = weatherHumid
						wind.innerText = windSpeed;
						pressure.innerText = pressureMain;


						grabCard.appendChild(showCity)
						grabCard.appendChild(fullDateShow)
						grabCard.appendChild(tempLoHi)
						grabCard.appendChild(weatherIcon)
						grabCard.appendChild(description)
						grabCard.appendChild(humid)
						grabCard.appendChild(wind)
						grabCard.appendChild(pressure)
					}

				});
		})
	}
}




