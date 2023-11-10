"use strict"

mapboxgl.accessToken = MAPBOX_API_KEY;
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
	container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
	style: 'mapbox://styles/mapbox/streets-v12',
	center: [-98.4916, 29.4260],
	zoom: 5
});

const canvas = map.getCanvasContainer();

const geojson = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'Point',
				'coordinates': [-98.4916, 29.4260]
			}
		}
	]
};

function onMove(e) {
	const coords = e.lngLat;

// Set a UI indicator for dragging.
	canvas.style.cursor = 'grabbing';

// Update the Point feature in `geojson` coordinates
// and call setData to the source layer `point` on it.
	geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
	map.getSource('point').setData(geojson);
}

function onUp(e) {
	const coords = e.lngLat;

// Print the coordinates of where the point had
// finished being dragged to on the map.
// 	coordinates.style.display = 'block';
	coordinates.innerHTML = `Longitude: ${coords.lng}<br />Latitude: ${coords.lat}`;
	canvas.style.cursor = '';
	console.log("Long: " +coords.lng)
	console.log("Lat: " +coords.lat)

	let weatherArr = [];

	fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
		`lat=${coords.lat}&lon=${coords.lng}` +
		`&appid=${WEATHERMAP_API_KEY}` +
		`&units=imperial`)
		.then( data => data.json())
		.then( forecast => {
			for (let i = 6; i < forecast.list.length; i += 8) {
				// let newD = document.createElement("div")

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

// Unbind mouse/touch events
	map.off('mousemove', onMove);
	map.off('touchmove', onMove);
}


map.on('load', () => {
// Add a single point to the map.
	map.addSource('point', {
		'type': 'geojson',
		'data': geojson
	});

	map.addLayer({
		'id': 'point',
		'type': 'circle',
		'source': 'point',
		'paint': {
			'circle-radius': 10,
			'circle-color': '#F84C4C' // red color
		}
	});

// When the cursor enters a feature in
// the point layer, prepare for dragging.
	map.on('mouseenter', 'point', () => {
		map.setPaintProperty('point', 'circle-color', '#3bb2d0');
		canvas.style.cursor = 'move';
	});

	map.on('mouseleave', 'point', () => {
		map.setPaintProperty('point', 'circle-color', '#3887be');
		canvas.style.cursor = '';
	});

	map.on('mousedown', 'point', (e) => {
// Prevent the default map drag behavior.
		e.preventDefault();

		canvas.style.cursor = 'grab';

		map.on('mousemove', onMove);
		map.once('mouseup', onUp);
	});

	map.on('touchstart', 'point', (e) => {
		if (e.points.length !== 1) return;

// Prevent the default map drag behavior.
		e.preventDefault();

		map.on('touchmove', onMove);
		map.once('touchend', onUp);
	});
});
