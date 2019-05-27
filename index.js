var fs = require('fs');
var index = fs.readFileSync('index.html');
var http = require('http');
var port = 3000;
var request = require('request');
var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR1208FuOXIZu35v9SPj5ZqDXENLT3J5VHKqcO3lgCB3hDdpkNYBjBeJli0"

var app = http.createServer(function(req, res) {
	if (req.url === '/') {
		res.write('Hello World!!!');
 		res.end();
	} else if (req.url === '/about') {
		console.log(req.url);
 	    console.log(req.method);
 	    res.end();
	} else if (req.url === '/contact') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        res.end(index);
	} else if (req.url === '/pubinfo') {
		request({
		    url: url,
		    json: true
		}, function (error, response, body) {

		    if (!error && response.statusCode === 200) {
		        console.log(body)
		    }
		})
        res.end();
	}
});

app.listen(port, function() {
	console.log('Server at http://localhost:3000');
});
