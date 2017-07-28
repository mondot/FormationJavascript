var http = require('http');

var server = http.createServer(function(req, res) {
	console.log(req.url);
	res.writeHead(200);
	res.end('salut tout le monde');
});

server.listen(8080);