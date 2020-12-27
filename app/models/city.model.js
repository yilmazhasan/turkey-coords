const mongoose = require('mongoose');
var SchemaTypes = mongoose.Schema.Types;

const CitySchema = mongoose.Schema({
		_id: String,
		name: String,
		towns: [String],
		geolocation: {
			lat: String, 
			lng: String, 
			polygons : [[SchemaTypes.Double, SchemaTypes.Double]],
			boundingbox: [String, String, String, String]
		}  
	}, {
	timestamps: true
});

module.exports = mongoose.model('City', CitySchema, 'cities');

