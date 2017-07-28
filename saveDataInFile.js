var request = require("request");
var parsedJSON = require('./2014_reserve_parlementaire.json');

var address = '23 rue Charles Infroit';
var url 		= 'https://api-adresse.data.gouv.fr/search/?q=' + address;
request(url, function(error, response, body) {
	console.log(body);
});

// parsedJSON.forEach(function(entry) {
// 	var address = entry.Adresse;
// 	var url 		= 'https://api-adresse.data.gouv.fr/search/?q=' + address;
// 	request(url, function(error, response, body) {
// 		console.log(body);
// 	});
// });
