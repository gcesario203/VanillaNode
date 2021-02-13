const http = require('http');
const products = require('./data/products.json')
const utils = require('./utils.js');

const PORT = process.env.PORT || 3333;

const server = http.createServer((request,response)=>
{
    if(request.url === '/api/products')
    {
        response.writeHead(200,utils.contentHeader)

        response.end(JSON.stringify(products))
    }
    else
    {
        response.writeHead(404,utils.contentHeader)

        response.end('{"message":"Not found"}')
    }
    
})

server.listen(PORT,()=> console.log(`Server rodando na porta ${PORT}`))

