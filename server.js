const http = require('http')
const productRoutes = require('./routes/productRoutes.js')
const PORT = process.env.PORT || 3333


const server = http.createServer((request,response)=>
{
    productRoutes.resolveUrlMethods(request,response)
})

server.listen(PORT,()=> console.log(`Server rodando na porta ${PORT}`))

