const productController = require('../controller/productController.js')
const utils = require('../utils.js');

let productRoutes = 
{
    resolveUrlMethods: (request,response)=>
    {
        if(request.url.match(utils.urlRegexpById("products")) && request.method === 'GET')
        {
            const id = utils.resolveUrlId(request.url)
            productController.getProductById(request,response,id)
        }
        else if(request.url.match(utils.urlRegexpById("products")) && request.method === 'DELETE')
        {
            const id = utils.resolveUrlId(request.url)
            productController.deleteProduct(request,response,id)
        }
        else if(request.url.match(utils.urlRegexp("products")) && request.method === 'GET')
        {
            productController.getProducts(request,response)
        }
        else if(request.url.match(utils.urlRegexp("products")) && request.method === 'POST')
        {
            productController.createProduct(request,response)
        }
        else
        {
            productController.errorResponse(request,response)
        }

    }
}

module.exports = productRoutes