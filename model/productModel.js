const products = require('../data/products.json')
const {writeDataToFile, databaseFilePath, idHandle} = require('../utils.js')

function create(product) {
    return new Promise((resolve, reject) => {

        console.log(idHandle(products))
        const newProduct = {id:idHandle(products),...product}

        products.push(newProduct) 

        writeDataToFile(databaseFilePath(), products)

        resolve(newProduct)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find(prod=>prod.id === id)

        if(product.id.length > 0)
        {
            resolve(product)
        }
        else
        {
            reject("Not found")
        }
    })    
}

function find() {
    return new Promise((resolve, reject) => {
        resolve(products)
    })    
}

module.exports = {find,findById,create}