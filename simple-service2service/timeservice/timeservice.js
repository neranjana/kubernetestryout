var http = require("http");
var instanceId = Math.floor(Math.random() * 100) + 100;

const thisServicePort = parseInt(process.env.THIS_SERVICE_PORT, 10);

// to run this, execute 
// THIS_SERVICE_PORT=8901 node timeservice.js

http.createServer(function (request, response) {
    var date = new Date();

    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`${date.toTimeString()} from ${instanceId}`);
}).listen(thisServicePort)

// Console will print the message
console.log('Server running at http://127.0.0.1:' + thisServicePort);