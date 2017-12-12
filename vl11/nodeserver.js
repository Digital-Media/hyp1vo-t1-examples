"use strict";

const http = require("http");

const server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hallo Welt!");
    response.end();
});

server.listen(3000);
console.log("Server running at port 3000!");
