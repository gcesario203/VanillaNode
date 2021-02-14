let headers =
{
    contentHeader:
    {
        'Content-Type':'application/json'
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


module.exports = headers