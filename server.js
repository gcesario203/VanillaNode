const http = require('http');
const PORT = process.env.PORT || 3333;
const productController = require('./controller/productController.js')
const {urlRegexp,urlRegexpById} = require('./utils.js');

const server = http.createServer((request,response)=>
{
    if(request.url.match(urlRegexpById("products")) && request.method === 'GET')
    {
        productController.debugResponse(request,response,"Teste")
    }
    else if(request.url.match(urlRegexp("products")) && request.method === 'GET')
    {
       productController.getProducts(request,response)
    }
    else
    {
        productController.errorResponse(request,response)
    }
    
})

server.listen(PORT,()=> console.log(`Server rodando na porta ${PORT}`))

