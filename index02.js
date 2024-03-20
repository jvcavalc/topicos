const {createServer} = require('http');

let server = createServer((request, response) => {
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write('<h1>Hello World</h1><p>projeto</p>');
    response.end();
});

server.listen(8000);

console.log("Projeto iniciado");

const {log} = console()