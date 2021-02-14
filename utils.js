const fs = require('fs')

let utils =
{
    contentHeader:
    {
        'Content-Type':'application/json'
    },

    databaseFilePath: () =>
    {
        return './data/products.json'
    },

    writeDataToFile:(filename, content)=>
    {
        fs.writeFileSync(
            filename, 
            JSON.stringify(content),
            'utf-8',
            err=>
            {
                if(err)
                {
                    console.log(err)
                }
            })
    },

    urlRegexpById: (controllerName) =>
    {
        let regularExp = new RegExp(`/api\/${controllerName}\/([0-9]+)`)


        return regularExp
    },

    urlRegexp: (controllerName) =>
    {
        let regularExp = new RegExp(`/api\/${controllerName}`)


        return regularExp
    },

    resolveUrlId: url => 
    {
        const id = url.split('/')[3]

        return id
    }
}


module.exports = utils