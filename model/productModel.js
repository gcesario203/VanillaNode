const products = require('../data/products.json')


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

module.exports = {find,findById}