/*
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res){
		console.log(req.url);
				if(req.url === '/index' || req.url === "main" || req.url === '/'){
					res.writeHead(200, {'Component-Type' : 'text/html; charset=utf-8'});
						fs.createReadStream(__dirname + '/index.html').pipe(res);
				}else{
					res.writeHead(200, {'Component-Type' : 'text/html; charset=utf-8'});
						fs.createReadStream(__dirname + '/404.html').pipe(res);
				}	
});
server.listen(3000,'127.0.0.1');
		console.log("Server 3000 has been active...")
*/		
console.log('active...')