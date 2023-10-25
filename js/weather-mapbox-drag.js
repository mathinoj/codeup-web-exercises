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

	let dateShow = document.querySelector('#forecast')

	fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
		`lat=${coords.lat}&lon=${coords.lng}` +
		`&appid=${WEATHERMAP_API_KEY}` +
		`&units=imperial`)
		.then( data => data.json())
		.then( forecast => {
			let forecastArr = forecast.list;
			for(let i=6; i < forecastArr.length; i += 8){
				let forecastDt = forecastArr[i].dt
				const date = new Date(forecastDt * 1000);
				let month = (date.getMonth()+1)
				let day = (date.getUTCDate());
				let year = (date.getUTCFullYear())
				let hours = date.getHours()
				// console.log(hours)

				//DATE
				let fullDate = (`${month}-${day}-${year}`)
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
