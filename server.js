const http = require('http');
const PORT = process.env.PORT || 3333;
const productController = require('./controller/productController.js')
const utils = require('./utils.js');

const server = http.createServer((request,response)=>
{
    if(request.url.match(utils.urlRegexpById("products")) && request.method === 'GET')
    {
        const id = utils.resolveUrlId(request.url)
        productController.getProductById(request,response,id)
    }
    else if(request.url.match(utils.urlRegexp("products")) && request.method === 'GET')
    {
       productController.getProducts(request,response)
    }
    else
    {
        productController.errorResponse(request,response)
    }
    
})

server.listen(PORT,()=> console.log(`Server rodando na porta ${PORT}`))

