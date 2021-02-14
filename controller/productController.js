const Product = require('../model/productModel.js');
const {contentHeader} = require('../utils.js');

const getProductById = async(req,res,id)=>
{
    try {
        const product = await Product.findById(id)

        res.writeHead(200, contentHeader)

        res.end(JSON.stringify(product))
    } catch (error) {
        res.writeHead(404, contentHeader)
        res.end(`{"message":"Produto não encontrado"`)
    }
}

const createProduct = async(req,res) =>
{
    try {
        const newProduct = 
        {
            title:'Produto teste vanilla',
            description:'Produto de teste utilizando node vanillaço',
            price:200
        }

        const createMethod = await Product.create(newProduct)
        
        res.writeHead(201, contentHeader)

        return res.end(JSON.stringify(newProduct))
    } catch (error) {
        console.log(error)
    }
}

const getProducts = async(req,res) =>
{
    try {
        const products = await Product.find()

        res.writeHead(200,contentHeader)

        res.end(JSON.stringify(products))
    } catch (error) {
        res.writeHead(404,contentHeader)

        res.end(`{"message":${error.message}}`)
    }
}

const errorResponse = (req,res)=>
{
        res.writeHead(404,contentHeader)

        res.end(`{"message":"URL não identificada"}`)   
}

const debugResponse = (req,res,message) =>
{
    res.writeHead(300,contentHeader)

    res.end(`{"debug":${message}}`)
}

module.exports = {getProducts,errorResponse, debugResponse, getProductById, createProduct}