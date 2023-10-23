"use strict";

/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function geocode(search, token) {
	let baseUrl = 'https://api.mapbox.com';
	let endPoint = '/geocoding/v5/mapbox.places/';
	return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
		.then( res => res.json() )
		// to get all the data from the request, comment out the following three lines...
		.then( data => data.features[0].center);
}

// geocode('Sabor Mexico Mezcal, San Antonio, Texas', MAPBOX_API_KEY).then(result => {
// 	console.log(result);
// 	map.setCenter(result);
// 	map.setZoom(15);
// })
mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v11', // style URL
	zoom: 10, // starting zoom
	center: [-98.4916, 29.4252] // [lng, lat]
});

let restaurants = [
	{
		"place": "Wingstop",
		"food": "Wings",
		"location": ["7959 Fredericksburg Rd Ste 151, San Antonio, TX 78229"],
		gridCorr: [-98.56996827502782, 29.511644264578596],
	},
	{
		"place": "Hon Machi",
		"food": "Korean BBQ",
		"location": ["10222 Huebner Rd Ste 110, San Antonio, TX 78240"],
		gridCorr: [-98.58418974434008, 29.53812893187275],
	},
	{
		"place": "2M",
		"food": "BBQ",
		"location": ["2731 S WW White Rd, San Antonio, TX 78222"],
		gridCorr: [-98.4048782308534, 29.3826600982261],
	}
]

// geocode(restaurants[0].location, MAPBOX_API_KEY).then(function (result){
// 	map.setCenter(result);
// 	let marker = new mapboxgl.Marker()
// 		.setLngLat(result)
// 		.addTo(Map);
// })
// function placeEat() {
	for (let i = 0; i < restaurants.length; i++) {
		geocode(restaurants[i].location, MAPBOX_API_KEY).then(result => {
			console.log(result);
			map.setCenter(result);
			map.setZoom(15);
		})
		console.log(restaurants[i].gridCorr)




		// const marker = new mapboxgl.Marker()
		// 	.setLngLat([restaurants[i].gridCorr])
		// 	.addTo(map);
		// console.log(marker)
		// let popup = new mapboxgl.Popup()
		// 	.setLngLat([restaurants[i].gridCorr])
		// 	.setHTML("<p>Codeup Rocks!</p>")
		// 	.addTo(map);
		// const codeupPopup = new mapboxgl.Popup()
		// 	.setHTML("<p>Welcome to San Antonio!</p>");
		// marker.setPopup(codeupPopup);

	}
// }

// const map = new mapboxgl.Map({
// 	container: 'map', // container ID
// 	style: 'mapbox://styles/mapbox/streets-v11', // style URL
// 	zoom: 10, // starting zoom
// 	center: [-98.4916, 29.4252] // [lng, lat]
// });

// const marker = new mapboxgl.Marker()
// 	.setLngLat([-98.4916, 29.4260])
// 	.addTo(map);
// let popup = new mapboxgl.Popup()
// 	.setLngLat([-98.489615, 29.426827])
// 	.setHTML("<p>Codeup Rocks!</p>")
// 	.addTo(map);
// const codeupPopup = new mapboxgl.Popup()
// 	.setHTML("<p>Welcome to San Antonio!</p>");
// marker.setPopup(codeupPopup);

// mapboxgl.accessToken = MAPBOX_API_KEY;
// const map = new mapboxgl.Map({
// 	container: 'map', // container ID
// 	style: 'mapbox://styles/mapbox/streets-v11', // style URL
// 	zoom: 10, // starting zoom
// 	center: [-98.4916, 29.4252] // [lng, lat]
// });

// const marker = new mapboxgl.Marker()
// 	.setLngLat([-98.4916, 29.4260])
// 	.addTo(map);
// let popup = new mapboxgl.Popup()
// 	.setLngLat([-98.489615, 29.426827])
// 	.setHTML("<p>Codeup Rocks!</p>")
// 	.addTo(map);
// const codeupPopup = new mapboxgl.Popup()
// 	.setHTML("<p>Welcome to San Antonio!</p>");
// marker.setPopup(codeupPopup);


/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function reverseGeocode(coordinates, token) {
	let baseUrl = 'https://api.mapbox.com';
	let endPoint = '/geocoding/v5/mapbox.places/';
	return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
		.then( res => res.json() )
		// to get all the data from the request, comment out the following three lines...
		.then( data => data.features[0].place_name );
}
