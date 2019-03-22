var http = require("http");
var instanceId = Math.floor(Math.random() * 100) + 100;

// to run this without any container, execute 
// node timeservice.js

http.createServer(function (request, response) {
    var date = new Date();

    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`${date.toTimeString()} from ${instanceId}`);
}).listen(8901)

// Console will print the message
console.log('Server running at http://127.0.0.1:8901');