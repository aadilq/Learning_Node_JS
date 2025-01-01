const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end("Hello from Node.js"); 
})

const PORT = 3000; 

server.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`)
})