const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer(function(request, response) {
    const requestUrl = request.url;
    const parsedUrl = url.parse(requestUrl, true);

    if (!parsedUrl.query.name) {
        response.writeHead(404);
        response.end("Invalid route!");
        return
    };
    
    const fileName = parsedUrl.query.name;
    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            response.writeHead(404);
            response.end("File not found!");
            return;
        }
        else {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        }
    });
}).listen(5000);

console.log('Server running at http://localhost:5000/');