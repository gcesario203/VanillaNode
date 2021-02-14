const fs = require('fs')

let utils =
{
    contentHeader:
    {
        'Content-Type':'application/json'
    },

    sortCollection: collectionName =>
    {
        collectionName.sort((a,b) =>
        Number.parseInt(a.id) > Number.parseInt(b.id) ? 1 :
        Number.parseInt(a.id) < Number.parseInt(b.id) ? -1 : 
        0)
    },

    idHandle: (jsonCollection) =>
    {
        let nextId = 0
        for(let i = 0;i<jsonCollection.length;i++)
        {
            
            let aux = Number.parseInt(jsonCollection[i].id)

            if(aux > nextId)
            {
                nextId = aux
            }
        }

        nextId++

        return nextId.toString()
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