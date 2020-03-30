const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/OK') {
        console.log('Inbound \'OK\' request being processed...');
        res.writeHead(200);
        res.end;
    } else if (req.url === '/Bad-Request') {
        console.log('Inbound \'Bad-Request\' request being processed...');
        res.writeHead(400);
        res.end;
    } else if (req.url === '/Created') {
        console.log('Inbound \'Created\' request being processed...');
        res.writeHead(201);
        res.end;
    } else if (req.url === '/Forbidden') {
        console.log('Inbound \'Forbidden\' request being processed...');
        res.writeHead(403);
        res.end;
    } else if (req.url === '/Found') {
        console.log('Inbound \'Found\' request being processed...');
        res.writeHead(302);
        res.end;
    } else if (req.url === '/Gateway-Timeout') {
        console.log('Inbound \'Gateway-Timeout\' request being processed...');
        res.writeHead(504);
        res.end;
    } else if (req.url === '/Internal-Server-Error') {
        console.log('Inbound \'Internal-Server-Error\' request being processed...');
        res.writeHead(500);
        res.end;
    } else if (req.url === '/Moved-Permanently') {
        console.log('Inbound \'Moved-Permanently\' request being processed...');
        res.writeHead(301);
        res.end;
    } else if (req.url === '/Unauthorized') {
        console.log('Inbound \'Unauthorized\' request being processed...');
        res.writeHead(401);
        res.end;
    } else {
        console.log('Request: 404 Not Found');
        res.writeHead(404);
        res.end;
    }
}).listen(3000, () => {
    console.log('Listening on port 3000');
});
