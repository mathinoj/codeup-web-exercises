(function() {
	"use strict";
	// create a circle object
	let circle = {
		radius: 5,

		getArea: function (area) {
			// TODO: complete this method
			area = Math.PI * Math.pow(this.radius, 2)

			return area; // TODO: return the proper value
		},


		logInfo: function (doRounding) {
			// TODO: complete this method.

			// If doRounding is true, round the result to the nearest integer.
			// Otherwise, output the complete value

			console.log("Area of a circle with radius: " + this.radius + ", is: " +Math.round(this.getArea(doRounding)) + ".");
		}
	};


	// log info about the circle
	console.log("Raw circle information");
	circle.logInfo(false);
	console.log("Circle information rounded to the nearest whole number");
	circle.logInfo(true);

	console.log("=======================================================");
	// TODO: Change the radius of the circle to 5.

	// log info about the circle
	console.log("Raw circle information");
	circle.logInfo(false);
	console.log("Circle information rounded to the nearest whole number");
	circle.logInfo(true);
})();