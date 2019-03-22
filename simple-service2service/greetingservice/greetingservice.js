var http = require("http");
var instanceId = Math.floor(Math.random() * 100);

const timeServiceUrl = process.env.TIME_SERVICE_URL;

// to run this without any container, first start timeservice on localhost and execute 
// TIME_SERVICE_URL=http://localhost:8901 node greetingservice.js

http.createServer(function (request, response) {

    var timeInfo = '';

    // getting time from time service
    http.get(timeServiceUrl, (resp) => {
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            timeInfo += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log("Time recieved");
            console.log(timeInfo);
            console.log("done");
            response.writeHead(200, { 'Content-Type': 'text/plain' });

            response.end(`Greetings from ${instanceId}, the time is ${timeInfo.toString()}`);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end(`Sorry, could not find timeservice: ${err.message}`);

    });
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain

}).listen(8902)

// Console will print the message
console.log('Server running at http://127.0.0.1:8902');